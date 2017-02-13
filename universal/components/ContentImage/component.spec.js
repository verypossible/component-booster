import React from 'react'
import ContentImage from './component'
import { shallow } from 'enzyme'

describe('(ContentImage) component', () => {
  describe('without any props', () => {
    it('will throw an error because there is no image URL', () => {
      expect(() => {
        shallow(<ContentImage />)
      }).toThrowError('you need to supply the URL for the image')
    })
  })

  describe('with an image URL', () => {
    const props = {
      image: 'image_url'
    }

    it('renders the image', () => {
      const subject = shallow(<ContentImage {...props} />)
      expect(subject.find('img').props().src).toEqual('image_url')
    })

    it('will render the image ALT if we provide one', () => {
      const subject = shallow(<ContentImage {...props} altText="image_alt" />)
      expect(subject.find('img').props().alt).toEqual('image_alt')
    })

    it('will render the image TITLE if we provide one', () => {
      const subject = shallow(<ContentImage {...props} title="image_title" />)
      expect(subject.find('img').props().title).toEqual('image_title')
    })
  })
})
