import React from 'react'
import { shallow } from 'enzyme'
import ColumnWrapper from './component'

describe('(Component) ColumnWrapper', () => {
  it('should render without any props', () => {
    const subject = shallow(<ColumnWrapper />)
    const target = subject.find('div')

    expect(target.length).toEqual(1)
  })
})

describe('When we pass it children', () => {
  it('renders ColumnWrapper with children', () => {
    const subject = shallow(
      <ColumnWrapper>
        <p>hello</p>
      </ColumnWrapper>
    )
    expect(subject.find('p').children().length).toEqual(1)
  })
})
