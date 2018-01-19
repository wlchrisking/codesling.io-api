import db from '../../config/database';
import {
  addTestCaseHelper,
  retrieveTestCaseHelper
} from './testCasesSQLHelpers';
import {
  success,
  error
} from '../../lib/log';

export const addTestCaseQuery = async (body) => {
  try {
    const queryString = addTestCaseHelper(body);
    const data = db.queryAsync(queryString);
    success('addTestCaseQuery - successfully added test case ', data);
    return data;
  } catch (err) {
    error('addTestCaseQuery - error= ', err);
  }
};

export const retrieveTestCaseQuery = async (params) => {
  try {
    const queryString = retrieveTestCaseHelper(params);
    const data = await db.queryAsync(queryString);
    success('retrieveTestCaseQuery - successfully retrieved test cases ', data);
    return data;
  } catch (err) {
    error('retrieveTestCaseQuery - error= ', err)
  }
}
