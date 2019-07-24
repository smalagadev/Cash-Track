const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
}),
addLessLoader({
    javascriptEnabled: true,
    madifyVars: {'@primary-color': '#1Da57A'},
 }),
);