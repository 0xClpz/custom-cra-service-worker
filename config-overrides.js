const isPrecachePlugin = plugin => plugin.options && plugin.options.filename === 'service-worker.js';

module.exports = function override(config, env){

  let precachePlugin = config.plugins.find(isPrecachePlugin);
  precachePlugin.options.minify = true;

  return config;
}
