import RD from '../src/index'
import './index.scss'
import {h} from './virtual-dom'
import vNode from './vNode/'
import {HelloWorld} from './component/HelloWorle'

RD.use(vNode, RD)

/** @jsx h */

window.rd = new RD({
  render() {
    return <div>
      <HelloWorld></HelloWorld>
    </div>
  },
  data() {
    return {
      msg: 'world',
      firstName: 'aco',
      lastName: 'yang'
    }
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    }
  },
  method: {
    handle() {
      alert('Oh You Click Me !')
    }
  }
})

rd.$mount(document.getElementById('app'))