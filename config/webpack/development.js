process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()

Object.defineProperty(RegExp.prototype, 'toJSON', {
  value: RegExp.prototype.toString,
})
const fs = require('fs')
fs.writeFileSync('./resultToWebpackConfig.txt', JSON.stringify(environment.toWebpackConfig()))
