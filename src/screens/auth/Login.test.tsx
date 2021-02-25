import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Login from './Login'
import { mockedNavigation } from '../../../setupJest'

const signupButtonText = 'Go to Signup'

describe('<Login/>', () => {
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
    expect(mockedNavigation).toHaveBeenCalledTimes(1)
    expect(mockedNavigation).toHaveBeenCalledWith('Signup')
  })
})
