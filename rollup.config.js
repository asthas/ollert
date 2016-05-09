const typescript = require('rollup-plugin-typescript')

module.exports = {
  entry: 'src/index.ts',
  sourceMap: true,
  format: 'umd',
  plugins: [
    typescript()
  ],
  dest: 'build/main.js'
}
