import "./App.css";
import OperationInput from "./components/operation-input/OperationInput";
import OperationsList from "./components/operations-list/OperationsList";

function App() {
  return (
    <div className='App'>
      <div className='input-container'>
        <OperationInput />
      </div>
      <div className='operations-container'>
        <OperationsList />
      </div>
    </div>
  );
}

export default App;
