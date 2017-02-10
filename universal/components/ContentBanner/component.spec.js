import React from 'react'
import ContentBanner from './component'
import { shallow } from 'enzyme'

describe('(ContentBanner) component', () => {
  describe('without any props', () => {
    it('will break because children or text are not found', () => {
      expect(() => {
        shallow(<ContentBanner />)
      }).toThrowError('you need to supply either children or some text')
    })
  })
})
