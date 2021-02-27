const detox = require('detox')
const adapter = require('detox/runners/jest/adapter')

// Set the default timeout
jest.setTimeout(120000)
jasmine.getEnv().addReporter(adapter)

beforeAll(async () => {
  await detox.init(undefined, { launchApp: false })
  await device.launchApp({
    newInstance: true,
    launchArgs: { DTXEnableVerboseSyncSystem: 'YES', DTXEnableVerboseSyncResources: 'YES' },
  })
})

beforeEach(async () => {
  await adapter.beforeEach()
})

afterAll(async () => {
  await adapter.afterAll()
  await detox.cleanup()
})
