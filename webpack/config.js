const config = require('./config.json');

const host = (process.env.HOST || config.host) || 'localhost';
const port = (process.env.PORT || config.port).toString() || '3000';
const outputPath = config.outputPath || 'dist';
const clientServerUri = `http://${host}:${port}`;

const getEnv = () => process.env.NODE_ENV || '';

const isProd = () => getEnv().toString().trim() === 'production';

const isHmrEnabled = () => process.argv.join('').indexOf('hot') > -1;

module.exports = {
  getEnv,
  isProd,
  host,
  port,
  outputPath,
  appHtml: config.appHtml,
  jsOutput: config.jsOutput,
  cssOutput: config.cssOutput,
  fontsOutput: config.fontsOutput,
  imgOutput: config.imgOutput,
  isHmrEnabled,
  clientServerUri
}