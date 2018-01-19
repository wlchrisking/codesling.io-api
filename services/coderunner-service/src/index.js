import { writeFile, readFile } from 'fs';
import { execFile } from 'child_process';
import express from 'express';
import bodyParser from 'body-parser';
import tmp from 'tmp';
import cors from 'cors';
// import vm from 'vm';

import log from './lib/log';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.method, req.path, res.statusCode);
  next();
});

app.post('/submit-code', (req, res) => {
  //need name, pass tests in from client.
<<<<<<< HEAD
  //then add test results to response
=======
  
>>>>>>> [add] - add part of implementation for user code testing
  // req.body.testCases.

  // would run tests here on user's code of req.body.code
  // following the below method
  // var funcAsGiven = 'function square(num) {return num * num; }';

  // //test info:
  // var testName = 'should return the square of an integer'
  // var funcName = 'square'
  // var testInput = 7
  // var testOutput = 49
  
  // //adding test to user's func:
  // var funcWithTest = funcAsGiven + ` ${funcName}(${testInput})`;
  
  // //running tests
  // var evaluateFunc = function(){
  //   if (eval(funcWithTest) === testOutput){
  //     console.log(eval(funcWithTest));
  //     console.log(`test ${testName} passed`);
  //   } else {
  //     console.log(`test ${testName} failed`);
  //   }
  // };
  // evaluateFunc();

  tmp.file({ postfix: '.js' }, (errCreatingTmpFile, path) => {
    writeFile(path, req.body.code, (errWritingFile) => {
      if (errWritingFile) {
        res.send(errWritingFile);
      } else {
        execFile('node', [path], (errExecutingFile, stdout, stderr) => {
          if (errExecutingFile) {
            let stderrFormatted = stderr.split('\n');
            stderrFormatted.shift();
            stderrFormatted = stderrFormatted.join('\n');
            console.log('stderrformatted', stderrFormatted);
            res.send(stderrFormatted);
          } else {

            // req.body.testCases to access the array of test cases
            
            // need to test stdout vs the array of testCases

            console.log('stdout', stdout);
            res.write(JSON.stringify(stdout));
            res.send();
          }
        });
      }
    });
  });
});

app.listen(PORT, log(`coderunner-service is listening on port ${PORT}`));
