import React, { useReducer } from 'react';

import './App.css';

import reducer, { initialState } from '../reducers/index';
import { applyNumber, changeOperation, memorySet, memoryReset, applyMemory } from '../actions/index';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  // event handlers
  // const handleOne = (e) => {
  //   e.preventDefault();
  //   dispatch(addOne());
  // }

  const handleNumber = (num) => {
    dispatch(applyNumber(num));
  }

  const handleChangeOperation = operation => {
    dispatch(changeOperation(operation));
  }

  const handleMemorySet = () => {
    dispatch(memorySet());
  }

  const handleApplyMemory = () => {
    dispatch(applyMemory());
  }

  const handleMemoryReset = () => {
    dispatch(memoryReset());
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton onClick={handleMemorySet} value={"M+"}/>
              <CalcButton onClick={handleApplyMemory} value={"MR"}/>
              <CalcButton onClick={handleMemoryReset} value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleNumber(1)} value={1}/>
              <CalcButton value={2}/>
              <CalcButton value={3}/>
            </div>

            <div className="row">
              <CalcButton value={4}/>
              <CalcButton value={5}/>
              <CalcButton value={6}/>
            </div>

            <div className="row">
              <CalcButton value={7}/>
              <CalcButton value={8}/>
              <CalcButton value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleChangeOperation('+')} value={"+"}/>
              <CalcButton onClick={() => handleChangeOperation('*')} value={"*"}/>
              <CalcButton onClick={() => handleChangeOperation('-')} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
