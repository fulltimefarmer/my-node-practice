'use strict';

/**
 * pratice Node.js project
 *
 * @author Max <zhoujun9633@gmail.com>
 */

import path from 'path';

module.exports = function (done) {

  $.router.get('/', function (req, res, next) {
    res.end('${new Date()}');
  });

  done();

};
