import db from '../../config/database';
import {
  addTestCaseHelper
} from './testCasesSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const addTestCaseQuery = async (body) => {
  try {
    let data
    for (let i = 0; i < body.content.length; i++) {
      const queryString = addTestCaseHelper({content: body.content[i], challenge_id: body.challenge_id});
      data = db.queryAsync(queryString);
    }
    success('addTestCaseQuery - successfully added test case ', data);
    return data;
  } catch (err) {
    error('addTestCaseQuery - error= ', err);
  }
};
