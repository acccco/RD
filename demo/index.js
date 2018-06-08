import createElement from './vNode/createElement'
import RD from '../src/index'
import vNode from './vNode/'
import HelloWorld from './component/HelloWorle'
import PropTest from './component/PropTest'
import './index.scss'

RD.use(vNode, RD)

/** @jsx createElement */

let rd = window.rd = new RD({
  render() {
    return <div>
      {this.text}
      <p style={{color: '#ff00ff'}}>{this.text}</p>
      <HelloWorld key='hd1'></HelloWorld>
      <PropTest key='pt' propText={this.propText} propObject={this.propObject}></PropTest>
      <input type="text" value={this.inputValue} oninput={(e) => {
        this.inputValue = e.target.value
      }}/>
      <HelloWorld key='hd2'></HelloWorld>
    </div>
  },
  data() {
    return {
      text: 'this is ReactiveData demo',
      propText: 'this is propText',
      propObject: {
        firstName: 'aco',
        lastName: 'yang'
      },
      inputValue: ''
    }
  },
  watch: {
    'inputValue'(newValue, oldValue) {
      console.log(`inputValue change: ${oldValue} => ${newValue}`)
    }
  },
  method: {
    handle() {
      alert('Oh You Click Me !')
    }
  }
})

HelloWorld.parent = rd
PropTest.parent = rd

rd.$mount(document.getElementById('app'))