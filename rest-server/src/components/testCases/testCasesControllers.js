import {
  addTestCaseQuery,
  retrieveTestCaseQuery
} from './testCasesQuery';
import {
  success,
  error
} from '../../lib/log';

export const addTestCaseController = async (req, res) => {
  try {
    const data = await addTestCaseQuery(req.body);
    success('addTestCaseController - successfully added test case ', data);
    return res.status(200).send(data);
  } catch (err) {
    error('addTestCaseController - error= ', err);
  }
}

// this controller fetches test cases pertaining to a specific challenge id
export const fetchTestCaseController = async (req, res) => {
  try {
    const data = await retrieveTestCaseQuery(req.params);
    success('fetchTestCaseController - successfully retrieved test cases', data);
    return res.status(200).send(data);
  } catch (err) {
    error('fetchTestCaseController - error = ', err);
  }
}
