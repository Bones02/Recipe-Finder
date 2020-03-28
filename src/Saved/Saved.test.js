import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Saved from './Saved'

describe(`Saved component`, () => {
  it('renders a .saved by default', () => {
    const wrapper = shallow(<Saved />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})