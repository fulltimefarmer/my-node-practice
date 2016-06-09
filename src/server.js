'use strict'

/**
 * pratice Node.js project
 *
 * @author Max <zhoujun9633@gmail.com>
 */

import path from 'path';
import ProjectCore from 'project-core';

const $ = global.$ = new ProjectCore();


 // load config
 $.init.add((done) => {
   $.config.load(path.resolve(__dirname, 'config.js'));
   const env = process.env.NODE_ENV;
   if(env){
     $.config.load(path.resolve(__dirname, '../config', env + '.js'));
   }
   $.env = env;
   done();
 });

// init
$.init((err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  } else {
    console.log('inited [env=%s]', $.env);
  }
});
