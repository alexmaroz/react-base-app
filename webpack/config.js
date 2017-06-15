const config = require('./config.json');

const host = (process.env.HOST || config.host) || 'localhost';
const port = (process.env.PORT || config.port).toString() || '3000';
const outputPath = config.outputPath || 'dist';

const getEnv = () => {
  return process.env.NODE_ENV || '';
}

const isProd = () => {
  const env = getEnv();
  return env.toString().trim() === 'production';
}

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
  imgOutput: config.imgOutput
}