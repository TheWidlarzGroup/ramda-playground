describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
  })

  it('should have description text on welcome screen', async () => {
    await expect(element(by.text('Login'))).toBeVisible()
  })
})
