import express from 'express';

import {
  addTestCaseController,
  fetchTestCaseController
} from './testCasesControllers';

const router = express.Router();

router.route('/')
  .post(addTestCaseController)

router.route('/:challengeID')
  .get(fetchTestCaseController)

export default router;
