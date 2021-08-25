// inject mocha globally to allow custom interface refer without direct import - bypass bundle issue
global._ = require('lodash');
global.mocha = require('mocha');
global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));
global.refreshGlobalMock = require("./unit/index");

// Override ts-node compiler options
process.env.TS_NODE_PROJECT = 'tsconfig.test.json'
// 先进行环境 mock
refreshGlobalMock()
// 然后在每次测试用例执行前重置 mock 环境
beforeEach(refreshGlobalMock)
