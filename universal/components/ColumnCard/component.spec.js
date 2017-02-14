import React from 'react'
import { shallow } from 'enzyme'
import ColumnCard from './component'

describe('(Component) ColumnCard', () => {
  it('should render without any props', () => {
    const subject = shallow(<ColumnCard />)
    const target = subject.find('div')

    expect(target.length).toEqual(1)
  })
})

describe('When we pass it props', () => {
  it('renders ColumnCard with props', () => {
    const subject = shallow(<ColumnCard title="foo" />)
    const target = subject.find('h2')

    expect(target.text()).toEqual('foo')
  })
})
