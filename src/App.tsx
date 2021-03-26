import React, { useState } from 'react'
import './App.css'
import 'antd/dist/antd.css';
// import FormikForm from './pages/FormikForm';
import ReactHookForm from './pages/ReactHookForm';

function App() {
  return (
    <div className="App">
      {/* <FormikForm /> */}
      <ReactHookForm />
    </div>
  )
}

export default App
