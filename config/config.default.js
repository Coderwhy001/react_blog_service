/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1588407358133_6249';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    client:{
      host:'39.106.223.137',
      port:'3306',
      user:'root',
      database:'react_blog',
      password:'123456',
    },
    app:true,
    agent:false
  }
  config.security = {
    csrf:{
      enable:false
    },
    domainWhiteList:['*']
  }
  config.cors = {
    origin:'admin.blogwuyue.com',
    credentials:true, // cook跨域
    allowMethods:'GET,HEAD,PUT,DELETE,PATCH,OPTIONS'
  }
  return {
    ...config,
    ...userConfig,
  };
};
