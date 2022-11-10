import { useState } from "react"

export const UseMemoSunejha=()=>{

    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo , setcounterTwo] = useState(0)


    const handleCounterIst=()=>{
        setcounterOne(counterOne +1)
        
    }

    const handleCounterIInd=()=>{

        setcounterTwo(counterTwo + 2)
        
    }

    const checkEven=()=>{

        console.log(`relation only counter one fun ${counterOne}  `) 
      return counterOne % 2 == 0
     

    }

     return(
        <div>
            <h2>Use Memo With Technical Sunejha</h2>
            <span >{checkEven() ? "Even" : "Odd"}</span>
            <button style={{color:"white", backgroundColor:"black"}} onClick={handleCounterIst}>Counter Ist  - {counterOne}</button> <br></br>  <br></br>


            <button style={{color:"white" , backgroundColor:"black"}} onClick={handleCounterIInd}>Counter IInd  - {counterTwo}</button>
        </div>
     )


}