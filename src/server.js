'use strict'

/**
 * pratice Node.js project
 *
 * @author Max <zhoujun9633@gmail.com>
 */

import path from 'path';
import ProjectCore from 'project-core';
import createDebug from 'debug';

const $ = global.$ = new ProjectCore();

// 创建Debug函数
$.createDebug = function (name) {
  return createDebug('my:' + name);
};
const debug = $.createDebug('server');

 // load config
 $.init.add((done) => {
   $.config.load(path.resolve(__dirname, 'config.js'));
   const env = process.env.NODE_ENV || null;
   if(env){
     debug('load env: %s', env);
     $.config.load(path.resolve(__dirname, '../config', env + '.js'));
   }
   $.env = env;
   done();
 });

// init mongoDB
//$.init.load(path.resolve(__dirname, 'init', 'mongodb.js'));
// load Models
$.init.load(path.resolve(__dirname, 'models'));

// init Express
$.init.load(path.resolve(__dirname, 'init', 'express.js'));
// init Router
$.init.load(path.resolve(__dirname, 'routes'));

// init
$.init((err) => {
  if (err) {
    console.error(err);
    process.exit(-1);
  } else {
    console.log('inited [env=%s]', $.env);
  }

  /* DB Test
  const item = new $.model.User({
    name: `User${$.utils.date('Ymd')}`,
    password: '123456',
    nickname: 'Test User',
  });
  item.save(console.log);
  */
});
