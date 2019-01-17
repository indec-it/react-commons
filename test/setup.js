process.env.NODE_ENV = 'test';

require('should');
require('@babel/register')();
