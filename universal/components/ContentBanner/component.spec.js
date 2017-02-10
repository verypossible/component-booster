import React from 'react'
import ContentBanner from './component'
import { shallow } from 'enzyme'

describe('(Component) ContentBanner', () => {
  describe('should render ok without any props', () => {
    const subject = shallow(<ContentBanner />)

    it('has an background image', () => {
      const target = subject.find('.bgImage')

      expect(target.length).toEqual(1)
    })

    it('has a default title', () => {
      const target = subject.find('h1')

      expect(target.text()).toEqual('Title')
    })

    it('has a default button', () => {
      const target = subject.find('Button')

      expect(target.length).toEqual(1)
    })

    it('has a default content image', () => {
      const target = subject.find('#contentImage')

      expect(target.length).toEqual(1)
    })

    it('has a default content image text', () => {
      const target = subject.find('i')

      expect(target.length).toEqual(1)
    })
  })
  describe('hasButton false', () => {
    const subject = shallow(<ContentBanner hasButton={false} />)

    it('has no button', () => {
      const target = subject.find('Button')

      expect(target.length).toEqual(0)
    })
  })
  describe('hasContentImage false', () => {
    const subject = shallow(<ContentBanner hasContentImage={false} />)

    it('has no content image', () => {
      const target = subject.find('#contentImage')

      expect(target.length).toEqual(0)
    })
  })
  describe('hasContentImageText false', () => {
    const subject = shallow(<ContentBanner hasContentImageText={false} />)

    it('has no content image text', () => {
      const target = subject.find('i')

      expect(target.length).toEqual(0)
    })
  })
})
