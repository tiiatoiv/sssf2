// schema/animalSchema.js 
import {gql} from 'apollo-server-express';

export default gql`
   extend type Query {
     animals: [Animal]
   }
   
   type Animal {
      id: ID
      animalName: String,
      species: ID,
   }
`;

{
   "id": "xxx",
   "Title": "Capgemini Oy",
   "Town": "Espoo",
   "AddressLine1": "Sinimäentie 8b",
   "StateOrProvince": "Southern Finland",
   "Postcode": "02630",
   "Location": {
       "type": "Point",
       "coordinates": [24.77772323548868, 60.203353130088146]
   },
   "Connections": [{
       "Quantity": 2,
       "ConnectionType": {
           "id": "yyy",
           "FormalName": "IEC 62196-2 Type 2",
           "Title": "Type 2 (Socket Only)"
       },
       "CurrentType": {
           "id": "zzz",
           "Description": "Alternating Current - Three Phase",
           "Title": "AC (Three-Phase)"
       },
       "LevelType": {
           "id": "aaa",
           "Title": "Level 2 : Medium (Over 2kW)",
           "Comments": "Over 2 kW, usually non-domestic socket type",
           "IsFastChargeCapable": false
       }
   }]
}
