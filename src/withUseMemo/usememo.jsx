import { useMemo, useState } from "react"

export const CounterAppWithUseMemo=()=>{

    const [count,setCount] = useState(0)
    const [show,setShow] = useState(false)

    

    const handleCounter=()=>{
     setCount(count+1)
     
    }
    


    const counterNumber=(num)=>{
        console.log(`Run CounterNumber Function  ${num} Times`)
        return num

    }

    const CheckData= useMemo(()=>{
        return counterNumber(count)


    },[count])
    

return(
    <div>
         <h1>Counter :{CheckData} </h1>
        <button style={{color:"white", backgroundColor:"black"}} onClick={handleCounter} >Increment</button> <br></br><br></br>
        <button style={{color:"white", backgroundColor:"black"}} onClick={(()=> setShow(!show))}>{show ? "You clicked button" : "plz click the button"}</button>
    </div>
)


}