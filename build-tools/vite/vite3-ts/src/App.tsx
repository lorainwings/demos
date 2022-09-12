import Cell, { type IDataStruct } from "./components/Cell/Cell";
import Label from "./components/Label/Label";
import Reducer from "./components/Reducer/Reducer";
import Imperative from "./components/Imperative/Parent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Cell<IDataStruct> field="name"></Cell>
      <Cell<IDataStruct> field="age"></Cell>
      <Label visible controller={() => {}}></Label>
      <Reducer></Reducer>
      <Imperative></Imperative>
    </div>
  );
}

export default App;
