import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Contact from './Contact'

describe(`Contact component`, () => {
  it('renders a .contact by default', () => {
    const wrapper = shallow(<Contact />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})