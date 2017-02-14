import React from 'react'
import ContentList from './component'
import { shallow } from 'enzyme'

describe('(ContentList) component', () => {
  describe('without any props', () => {
    it('will break because there are no items provided', () => {
      expect(() => {
        shallow(<ContentList />)
      }).toThrowError('you need to supply items for the list')
    })

    it('will not break if we provide at least one item', () => {
      const props = {
        items: ['List Item']
      }

      const subject = shallow(<ContentList {...props} />)
      expect(subject.find('li').text()).toEqual('List Item')
    })
  })

  describe('with one item', () => {
    const props = {
      items: ['List Item']
    }

    it('will render the title if we pass it', () => {
      const subject = shallow(<ContentList {...props} title="title_text" />)
      expect(subject.find('h3').text()).toEqual('title_text')
    })

    it('will not render a title if none is provided', () => {
      const subject = shallow(<ContentList {...props} />)
      expect(subject.find('h3').length).toEqual(0)
    })

    it('renders an UL', () => {
      const subject = shallow(<ContentList {...props} />)
      expect(subject.find('ul').length).toEqual(1)
    })
  })
})
