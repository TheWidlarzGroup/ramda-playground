import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import Reanimated2Test from './Reanimated2Test'

const magicButtonText = 'magic here'
const animatedElementID = 'test-reanimated2-comp'
const initialSize = 100
const animatedSize = 300

describe('<Reanimated2Test />', () => {
  it('increases box dimensions correctly', () => {
    const { getByText, getByTestId } = render(<Reanimated2Test />)

    const animatedElement = getByTestId(animatedElementID)
    const button = getByText(magicButtonText)

    const { width, height } = animatedElement.props.style()
    expect(width).toBe(initialSize)
    expect(height).toBe(initialSize)

    fireEvent.press(button)

    const { width: animatedWidth, height: animatedHeight } = animatedElement.props.style()
    expect(animatedWidth).toBe(animatedSize)
    expect(animatedHeight).toBe(animatedSize)
  })
})
