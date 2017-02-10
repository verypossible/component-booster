import React from 'react'
import Button from './component'
import { shallow } from 'enzyme'

describe('(Button) component', () => {
  describe('without any props', () => {
    it('will break because children or text are not found', () => {
      expect(() => {
        shallow(<Button />)
      }).toThrowError('you need to supply either children or some text')
    })

    it('will not break when we pass some text', () => {
      const subject = shallow(<Button text="test test" />)
      expect(subject.find('a').text()).toEqual('test test')
    })

    it('will not break when we pass some children', () => {
      const subject = shallow(<Button><section /></Button>)
      expect(subject.find('section').length).toEqual(1)
    })

    it('will render chilren instead of text if we pass both', () => {
      const subject = shallow(<Button text="test test"><section /></Button>)
      expect(subject.find('section').length).toEqual(1)
      expect(subject.find('a').text()).toEqual('')
    })
  })

  describe('with a URL', () => {
    const props = {
      url: 'blank_url',
      text: 'hello'
    }

    const subject = shallow(<Button {...props} />)

    it('renders the anchor href URL', () => {
      const target = subject.find('a')

      expect(target.props().href).toEqual('blank_url')
    })
  })

  describe('with a URL and button is DISABLED', () => {
    const props = {
      url: 'blank_url',
      disabled: true,
      text: 'test case text'
    }

    const subject = shallow(<Button {...props} />)
    const targetProps = subject.find('a').props()
    it('overrides the URL to be a #', () => {
      expect(targetProps.href).toEqual('#')
    })

    it('creates a click handler', () => {
      expect(targetProps.onClick).toBeInstanceOf(Function)
    })
  })

  describe('with a URL and button is ENABLED', () => {
    const props = {
      url: 'blank_url',
      disabled: false,
      text: 'test case text'
    }

    const subject = shallow(<Button {...props} />)
    const targetProps = subject.find('a').props()

    it('sets the URL to what we pass in', () => {
      expect(targetProps.href).toEqual('blank_url')
    })

    it('assigns a click handler', () => {
      expect(targetProps.onClick).toEqual(Function)
    })
  })

  describe('with a URL and user supplied target', () => {
    const props = {
      url: 'blank_url',
      target: '_blank',
      text: 'text text'
    }

    const subject = shallow(<Button {...props} />)

    it('renders the link as external', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(1)
      expect(target.props().target).toEqual('_blank')
    })
  })

  describe('with a URL and internal target', () => {
    const props = {
      url: 'blank_url',
      text: 'text text'
    }

    const subject = shallow(<Button {...props} />)

    it('renders the link as internal', () => {
      const target = subject.find('a')

      expect(target.length).toEqual(1)
      expect(target.props().target).toEqual('_self')
    })
  })
})
