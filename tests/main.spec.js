import { expect} from 'chai'
import { sum, sub, mult, div } from '../src/main'

describe('Calc', () => {

  describe('Smoke test', () => {

    it('exist the method sum', () => {
      expect(sum).to.exist;
    })

    it('exist the method sub', () => {
      expect(sub).to.exist;
    })

    it('exist the method mult', () => {
      expect(mult).to.exist;
    })

    it('exist the method div', () => {
      expect(div).to.exist;
    })
  })

  describe('Sum', () => {
    it('return 4 when sum(2, 2)', () => {
      expect(sum(2, 2)).to.be.equal(4)
    })
  })

  describe('Sub', () => {
    it('return 4 when sub(2, 2)', () => {
      expect(sub(6, 2)).to.be.equal(4)
    })

    it('return -4 when sub(6, 10)', () => {
      expect(sub(6, 10)).to.be.equal(-4)
    })
  })

  describe('Mult', () => {
    it('return 4 when mult(2, 2)', () => {
      expect(mult(2, 2)).to.be.equal(4)
    })
  })

  describe('Div', () => {
    it('return 4 when div(2, 2)', () => {
      expect(div(4, 2)).to.be.equal(2)
    })

    it('return `não é possivel divisão por zero` division by zero', () => {
      expect(div(4, 0)).to.be.equal('não é possivel divisão por zero')
    })
  })


})
