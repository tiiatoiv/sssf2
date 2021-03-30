// schemas/index.js
import animalSchema from './animalSchema.js';
import {gql} from 'apollo-server-express';

const linkSchema = gql`
   type Query {
     _: Boolean
   }
   type Mutation {
     _: Boolean
   }
`;

export default [
   linkSchema,
   animalSchema,
];
