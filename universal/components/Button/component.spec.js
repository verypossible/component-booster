import React from 'react'
import Button from './component'
import { shallow } from 'enzyme'

describe('(Button) component', () => {
  describe('without any props', () => {
    const subject = shallow(<Button />)

    it('renders the Button', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(1)
    })
  })

  describe('with a URL', () => {
    const props = {
      url: 'blank_url'
    }

    const subject = shallow(<Button {...props} />)

    it('renders the Button', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(1)
    })

    it('renders the anchor href URL', () => {
      const target = subject.find('a')

      expect(target.props().href).toEqual('blank_url')
    })
  })

  describe('with a URL and button is DISABLED', () => {
    const props = {
      url: 'blank_url',
      disabled: true
    }

    const subject = shallow(<Button {...props} />)

    it('renders the Button', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(1)
    })

    it('renders the Button as DISABLED', () => {
      const target = subject.find('a')
      const statusTarget = subject.find({prop: 'disabled'})

      expect(target.length).toEqual(1)
      expect(statusTarget).toBeTruthy()
    })
  })

  describe('with a URL and button is ENABLED', () => {
    const props = {
      url: 'blank_url',
      disabled: false
    }

    const subject = shallow(<Button {...props} />)

    it('renders the Button', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(1)
    })

    it('renders the Button as ENABLED', () => {
      const target = subject.find('a')
      const statusTarget = subject.props().disabled

      expect(target.length).toEqual(1)
      expect(statusTarget).toBeFalsy()
    })
  })

  describe('with a URL and external target', () => {
    const props = {
      url: 'blank_url',
      external: true
    }

    const subject = shallow(<Button {...props} />)

    it('renders the link as external', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(1)
      expect(target.props().target).toMatch('blank')
    })
  })

  describe('with a URL and internal target', () => {
    const props = {
      url: 'blank_url',
      external: false
    }

    const subject = shallow(<Button {...props} />)

    it('renders the link as internal', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(1)
      expect(target.props().target).toMatch('self')
    })
  })

  describe('with a URL and COLOR', () => {
    const props = {
      url: 'blank_url',
      color: 'dark'
    }

    const subject = shallow(<Button {...props} />)

    it('renders the Button', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(1)
    })

    it('renders the Button with COLOR', () => {
      const target = subject.find('a')
      const colorTarget = subject.instance().props.color

      expect(target.length).toEqual(1)
      expect(colorTarget).toEqual('dark')
    })
  })
})
