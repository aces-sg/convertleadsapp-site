// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Submission } = initSchema(schema);

export {
  Submission
};