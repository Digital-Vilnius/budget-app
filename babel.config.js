module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@assets': './assets',
            '@api': './src/api',
            '@common': './src/common',
            '@core': './src/core',
            '@features': './src/features',
            '@navigation': './src/navigation',
            '@store': './src/store',
            '@styles': './src/styles',
          },
        },
      ],
    ],
  };
};
