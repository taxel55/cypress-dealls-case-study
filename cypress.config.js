const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://job-portal-user-dev-skx7zw44dq-et.a.run.app',
  },
})