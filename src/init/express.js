'use strict';

/**
 * pratice Node.js project
 *
 * @author Max <zhoujun9633@gmail.com>
 */

 import path from 'path';
 import express from 'express';
 import serveStatic from 'serve-static';
 import bodyParser from 'body-parser';
 import multipart from 'connect-multiparty';


 module.exports = function (done) {

   const debug = $.createDebug('init:express');
   debug('initing Express...');

   const app = express();
   //$.express = app;

   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended: false}));

   const router = express.Router();
   $.router = router;

   app.use(router);
   app.use('/static', serveStatic(path.resolve(__dirname, '../../static')));
   //app.use('/build', serveStatic(path.resolve(__dirname, '../../frontend/build')));


   app.listen($.config.get('web.port'), (err) => {
     done(err);
   });

 };
