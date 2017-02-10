import React from 'react'
import SectionFullWidth from './component'
import { shallow } from 'enzyme'

describe('(SectionFullWidth) component', () => {
  it('should render ok without any props, no defaults set', () => {
    const subject = shallow(<SectionFullWidth />)
    const target = subject.find('section')

    expect(target.length).toEqual(1)
  })
})
