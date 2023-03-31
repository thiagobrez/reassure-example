/* eslint-disable import/no-extraneous-dependencies */
// import path from 'path';
import {dangerReassure} from 'reassure';

dangerReassure({
  inputFilePath: '.reassure/output.md',
  // inputFilePath: path.join(__dirname, '.reassure/output.md'), //
});
