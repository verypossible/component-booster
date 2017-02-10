import React from 'react'
import ContentImage from './component'
import { shallow } from 'enzyme'

describe('(ContentImage) component', () => {
  describe('without any props', () => {
    const subject = shallow(<ContentImage />)

    it('renders the ContentImage', () => {
      const target = subject.find('img')

      expect(target.length).toEqual(1)
    })
  })

  describe('with an image URL', () => {
    const props = {
      image: 'blank_image'
    }
    const subject = shallow(<ContentImage {...props} />)

    it('renders the image without ALT or TITLE provided', () => {
      const target = subject.find('img')

      expect(target.props().src).toEqual('blank_image')
    })

    it('renders no ALT value for the image', () => {
      const target = subject.find('img')

      expect(target.props().alt).toEqual(undefined)
    })

    it('renders no TITLE value for the image', () => {
      const target = subject.find('img')

      expect(target.props().title).toEqual(undefined)
    })
  })

  describe('with an image URL and ALT, no TITLE', () => {
    const props = {
      image: 'blank_image',
      altText: 'alt_text'
    }
    const subject = shallow(<ContentImage {...props} />)

    it('renders the image and ALT', () => {
      const target = subject.find('img')

      expect(target.props().src).toEqual('blank_image')
      expect(target.props().alt).toEqual('alt_text')
    })

    it('renders no TITLE value for the image', () => {
      const target = subject.find('img')

      expect(target.props().title).toEqual(undefined)
    })
  })

  describe('with an imageURL , ALT, and TITLE', () => {
    const props = {
      image: 'blank_image',
      altText: 'alt_text',
      title: 'title_text'
    }
    const subject = shallow(<ContentImage {...props} />)

    it('renders the image URL, ALT and the TITLE provided', () => {
      const target = subject.find('img')

      expect(target.props().src).toEqual('blank_image')
      expect(target.props().alt).toEqual('alt_text')
      expect(target.props().title).toEqual('title_text')
    })
  })
})
