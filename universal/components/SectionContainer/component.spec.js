import React from 'react'
import SectionContainer from './component'
import { shallow } from 'enzyme'

describe('(SectionContainer) component', () => {
  it('should render ok without any props, no defaults set', () => {
    const subject = shallow(<SectionContainer />)
    const target = subject.find('div')

    expect(target.length).toEqual(1)
  })
})
