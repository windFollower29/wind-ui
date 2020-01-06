module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        "modules": false,
      }
    ],
    "@vue/babel-preset-jsx"
    // [
    //   '@vue/babel-preset-jsx',
    //   {
    //     functional: false
    //   }
    // ],
  ],
  plugins: [
    // [
    //   '@babel/plugin-transform-runtime',
    //   {
    //     corejs: false,
    //     helpers: true
    //   }
    // ],
    // "transform-vue-jsx",
    [
      'import',
      {
        'libraryName': 'wind-ui-vue',
        libraryDirectory: 'lib/components',
        'style': true,
      },
      // 'wind-ui'
    ]
  ]
}