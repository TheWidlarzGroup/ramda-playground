export const pressBack = async () => {
  if (device.getPlatform() === 'android') {
    await device.pressBack() // Android only
  }
}

describe('Navigation', () => {
  it('should go to signup page', async () => {
    await expect(element(by.text('Go to Signup'))).toBeVisible()
    await element(by.text('Go to Signup')).tap()
    await expect(element(by.text('Go to Login'))).toBeVisible()
  })

  it('should go back to login page', async () => {
    await element(by.text('Go to Login')).tap()
    await expect(element(by.text('Go to Signup'))).toBeVisible()
  })

  it('should go to Home Screen', async () => {
    await element(by.text('Go to Home Screen')).tap()
    await expect(element(by.text('Ramda Playground'))).toBeVisible()
  })

  it('should go to Animation Screen', async () => {
    await element(by.text('Go to Animation')).tap()
    await expect(element(by.text('magic here'))).toBeVisible()
  })
})
