'use strict';
   const passport = require('passport');
   const Strategy = require('passport-local').Strategy;
   const { getUserLogin } = require('passport-local').Strategy;
   const passportJWT = require('passport-jwt');
   const JWTStrategy = passportJWT.Strategy;
   const ExtractJWT = passportJWT.ExtractJwt;

   // fake database: ****************
   const users = [
     {
       user_id: 1,
       name: 'Foo Bar',
       email: 'foo@bar.fi',
       password: 'foobar',
     },
     {
       user_id: 2,
       name: 'Bar Foo',
       email: 'bar@foo.fi',
       password: 'barfoo',
     },
   ];
   // *******************

   // fake database functions *********
    const getUser = (id) => {
      const user = users.filter((usr) => {
        if (usr.user_id === id) {
          return usr;
        }
      });
      return user[0];
    };
    
    const getUserLogin = (email) => {
      const user = users.filter((usr) => {
        if (usr.email === email) {
          return usr;
        }
      });
      return user[0];
    };
    // *****************
    
   // serialize: store user id in session 
   passport.serializeUser((id, done) => {
     console.log('serialize', id);
     // serialize user id by adding it to 'done()' callback
   });
   
   // deserialize: get user id from session and get all user data
   passport.deserializeUser(async (id, done) => {
       // get user data by id from getUser
       console.log('deserialize', user);
       // deserialize user by adding it to 'done()' callback
   });
   
   passport.use(new Strategy(
    async (username, password, done) => {
        try {
          const user = getUserLogin(username);
    
          if (user === undefined) return done(null, false, { message: 'User not found' });
          if (user.password !== password) return done(null, false, { message: 'Incorrect password' });
    
          delete user.password;
    
          return done(null, { ...user }, { message: 'Login successfilly '});
        } catch (error) {
          return done(error);
        }
      }
   ));

   passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'jee'
  }, (jwtPayload, done) => {
    
    const user = getUserLogin(jwtPayload.email);
    if (!user) return done('User not found');
  
    return done(null, user);
  }));
   
   module.exports = passport;