import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CounterAppWithUseMemo } from './withUseMemo/usememo'
import { LearnUseMemo } from './useMemo_with_TechnicalSunejha/useMemoWithSuneja'
// import { UseMemoSunejha } from './useMemo_with_TechnicalSunejha/withoutuseMemo_sunejha'
//  import { CounterAppWithUseMemo } from './withUseMemo/usememo'
//  import { WithOutUseMemo } from './withOutUseMemo/withoutusememo'

function App() {

  
  

  return (
    <div className="App">
     {/* <WithOutUseMemo/>  */}
     {/* <CounterAppWithUseMemo/>  */}
     {/* <UseMemoSunejha/> */}
     {/* <CounterAppWithUseMemo/> */}
     <LearnUseMemo/>
    </div>
  )
}

export default App
