import Block from './components/Block/Block'
import Cell, { type IDataStruct } from './components/Cell/Cell'
import Label from './components/Label/Label'
import Reducer from './components/Reducer/Reducer'
import Imperative from './components/Imperative/Parent'
import Event from './components/Event/Event'
import Style from './components/Style/Style'
import Template from './components/Template'
import './App.css'

function App() {
  return (
    <div className="App">
      <Block>
        <Cell<IDataStruct> field="name"></Cell>
      </Block>

      <Block>
        <Cell<IDataStruct> field="age"></Cell>
      </Block>

      <Block>
        <Label></Label>
      </Block>

      <Block>
        <Reducer></Reducer>
      </Block>

      <Block>
        <Imperative></Imperative>
      </Block>

      <Block>
        <Event></Event>
      </Block>

      <Block>
        <Style style={{ color: 'red' }}></Style>
      </Block>

      <Block>
        <Template />
      </Block>
    </div>
  )
}

export default App
