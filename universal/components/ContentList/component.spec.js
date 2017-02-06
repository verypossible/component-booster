import React from 'react'
import ContentList from './component'
import { shallow } from 'enzyme'

describe('(ContentList) component', () => {
  it('renders ok only with a title and items', () => {
    const props = {
      hasTitle: true,
      items: [
        'List Item',
        'List Item',
        'List Item'
      ]
    }
    const subject = shallow(<ContentList {...props} />)
    const target = subject.find('div')

    expect(target.length).toEqual(1)
  })

  it('renders ok without any props except items', () => {
    const props = {
      items: [
        'List Item',
        'List Item',
        'List Item'
      ]
    }
    const subject = shallow(<ContentList {...props} />)
    const target = subject.find('div')

    expect(target.length).toEqual(1)
  })

  it('should not render a title if it does not have one', () => {
    const props = {
      hasTitle: false,
      items: [
        'List Item',
        'List Item',
        'List Item'
      ]
    }
    const subject = shallow(<ContentList {...props} />)
    const target = subject.find('header')

    expect(target.length).toEqual(0)
  })

  it('renders an unordered list, with items', () => {
    const props = {
      items: [
        'List Item',
        'List Item',
        'List Item'
      ],
      bulletList: true
    }
    const subject = shallow(<ContentList {...props} />)
    const target = subject.find('ul')

    expect(target.length).toEqual(1)
  })

  it('renders an ordered list, with items', () => {
    const props = {
      items: [
        'List Item',
        'List Item',
        'List Item'
      ],
      bulletList: false
    }
    const subject = shallow(<ContentList {...props} />)
    const target = subject.find('ol')

    expect(target.length).toEqual(1)
  })
})
