const { override, fixBabelImports, addLessLoader, addBabelPlugin } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    // modifyVars: { '@primary-color': '#25b864' },
  }),

  addBabelPlugin(
    ["babel-plugin-import-graphql", { nodePath: process.env.NODE_PATH }]
  )
);


