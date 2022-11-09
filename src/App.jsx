import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
 import { CounterAppWithUseMemo } from './withUseMemo/usememo'
//  import { WithOutUseMemo } from './withOutUseMemo/withoutusememo'

function App() {

  
  

  return (
    <div className="App">
     {/* <WithOutUseMemo/>  */}
     <CounterAppWithUseMemo/> 
    </div>
  )
}

export default App
