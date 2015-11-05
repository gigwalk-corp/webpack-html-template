'use strict';
import fs from 'fs';
import path from 'path';
import bluebird from 'bluebird';
import { preprocess } from 'preprocess';
const readFile = bluebird.promisify(fs.readFile);

function provideTemplate(template, data, cb = null) {
  const promise = readFile(template, { encoding: 'utf8'})
    .then((templateString)=> preprocess(templateString, data));
  if (typeof cb === 'function') {
    return promise.asCallback(cb);
  } else {
    return promise;
  }
}

export default provideTemplate;
