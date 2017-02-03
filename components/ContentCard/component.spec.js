import React from 'react'
import { shallow } from 'enzyme'

import ContentCard from './component'

describe('(Component) ContentCard', () => {
  describe('Without any props', () => {
    const subject = shallow(<ContentCard />)

    it('should render the ContentCard', () => {
      const target = subject.find('div')

      expect(target.length).toEqual(3)
    })
  })

  describe('With an image', () => {
    const subject = shallow(<ContentCard image="blank_image" />)

    it('should render a div with an image background', () => {
      const target = subject.find('#backgroundImage')

      expect(target.props().style).toEqual({'backgroundImage': 'url(blank_image)'})
    })
  })

  describe('With a link & no image', () => {
    const subject = shallow(<ContentCard link="test_link" />)

    it('should render an <a> tag around the title', () => {
      const target = subject.find('a')
      const imageTarget = subject.find('#backgroundImage')
      expect(target.length).toEqual(1)
      expect(imageTarget.length).toEqual(0)
    })
  })

  describe('With a link & image', () => {
    const subject = shallow(<ContentCard image="blank_image" link="test_link" />)

    it('should render an <a> tag around the title and the image', () => {
      const target = subject.find('a')
      const imageTarget = subject.find('#backgroundImage')
      expect(target.length).toEqual(2)
      expect(imageTarget.length).toEqual(1)
    })
  })

  describe('Without a title', () => {
    const subject = shallow(<ContentCard title="" />)

    it('should not render an <h2> tag containing the title', () => {
      const target = subject.find('h2')
      expect(target.length).toEqual(0)
    })
  })

  describe('With a title', () => {
    const subject = shallow(<ContentCard title="test title" />)

    it('should render an <h2> tag containing the title', () => {
      const target = subject.find('h2')
      // console.log(target.html())
      expect(target.html()).toEqual('<h2>test title</h2>')
    })
  })
})
