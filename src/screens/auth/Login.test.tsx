import * as React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Login from './Login'

const signupButtonText = 'Go to Signup'
const mockedPush = jest.fn()

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    push: mockedPush,
  }),
}))

describe('Testing react navigation', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('has signup button', () => {
    const { getByText } = render(<Login />)

    const goToSignupButton = getByText(signupButtonText)
    expect(goToSignupButton).toBeTruthy()
  })
  it('redirects to Signup correctly', () => {
    const { getByText } = render(<Login />)

    fireEvent.press(getByText(signupButtonText))
    expect(mockedPush).toHaveBeenCalledTimes(1)
    expect(mockedPush).toHaveBeenCalledWith('Signup')
  })
})
