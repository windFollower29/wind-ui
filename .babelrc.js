module.exports = api => {
  api && api.cache(false);
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          "modules": false,
        }
      ],
      // [
      //   '@vue/babel-preset-jsx',
      //   {
      //     functional: false
      //   }
      // ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: false,
          helpers: true
        }
      ],
      "transform-vue-jsx",
      [
        'import',
        {
          'libraryName': 'wind-ui',
          libraryDirectory: 'lib/components',
          'style': true,
        },
        // 'wind-ui'
      ]
    ]
  }
}