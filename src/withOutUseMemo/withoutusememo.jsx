import { useState } from "react"

export const WithOutUseMemo=()=>{

    const [count, setCount] = useState(0)
    const [show,setShow] = useState(false)

    const handleCounter=()=>{

         setCount(count+1)
        
    }

    const counterNumber=(num)=>{
    console.log(`counter number function ${num} `)
    return num
    }    
   


    const CheckData=()=>{

        return counterNumber(count)
    }

        




 return(
    <div>
        <h1>With Out Use Memo Hook</h1>
    
         <h1>{<CheckData/>}</h1>
        <button style={{color:"white", backgroundColor:"black"}} onClick={handleCounter}>Increment</button> <br></br><br></br>

        <button style={{color:"white", backgroundColor:"black"}} onClick={(()=> setShow(!show))}>{show ? "You clicked me" : "click me plz!"}</button>
    </div>
 )

}