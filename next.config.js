const withLess = require('@zeit/next-less');

module.exports = withLess({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.less$/,
      loader: 'less-loader',
      options: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    });
    return config;
  },
});
