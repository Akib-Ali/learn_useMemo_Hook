import { useMemo, useState } from "react"

export const LearnUseMemo=()=>{

    const [counterOne, setcounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const handleCounterIst=()=>{
        setcounterOne(counterOne +1)
    }

    const handleCounterIInd=()=>{
        setCounterTwo(counterTwo+1)
    }


    const IsEven= useMemo(()=>{

        console.log(`Only Relation handleCounterIst Function ${counterOne}`)
        return counterOne % 2 == 0
    },[counterOne])

 return(
    <div>
        <h1> Learn Use Memo Best Example</h1>

        <span>{IsEven ? "Even" : "Odd"}</span> <br></br>
        <button  style={{color:"white", backgroundColor:"black"}} onClick={handleCounterIst}>Counter Ist =  {counterOne} </button>   <br></br> <br></br>
        <button style={{color:"white", backgroundColor:"black"}} onClick={handleCounterIInd}>Counter IInd  = {counterTwo} </button>
    </div>
 )


}