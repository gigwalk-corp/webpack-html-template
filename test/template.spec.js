/* global describe, it, before */

'use strict';
import assert from 'assert';
import path from 'path';
import bluebird from 'bluebird';
import fs from 'fs';
import provideTemplate from '../src';

const readFile = bluebird.promisify(fs.readFile);

describe('Building Template', ()=> {
  let expectedResult;
  let inputTemplate = path.join(__dirname, './support/_index.html');
  let data = {
    title: 'Gigwalk'
  };
  before((done)=> {
    readFile(path.join(__dirname, './support/index.html'), {encoding: 'utf8'})
      .then((expected)=> {
        expectedResult = expected;
        assert(expectedResult.length);
        done();
      })
      .catch(done);
  });
  it('should take a template and preprocess the file', (done)=> {
      provideTemplate({
        template: inputTemplate,
        data: data
      })
        .then((result)=> {
          assert.strictEqual(result, expectedResult);
          done();
        })
        .catch(done);
  });

  it('should be able to take a callback as well', (done)=> {
    provideTemplate({
      template: inputTemplate,
      data: data
    }, (err, result)=> {
      if (err) {
        return done(err);
      }
      assert.strictEqual(result, expectedResult);
      done();
    });
  });
});
