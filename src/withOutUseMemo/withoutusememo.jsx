import { useState } from "react"

export const WithOutUseMemo=()=>{

    const [count, setCount] = useState(0)
    const [show,setShow] = useState(false)

    const handleCounter=()=>{

         setCount(count+1)
        

    
        }
        console.log(`here is count value ${count}`)


        // const counterNumber=(num)=>{
        //     console.log(`counter Number function ${num} Time`)
        //     return num

        // }

    // const CheckData=()=>{
    //     console.log(`check function run ${count}`)
    //     return count
    // }




 return(
    <div>
        <h1>With Out Use Memo Hook</h1>
         {/* <h1>{<CheckData/>}</h1> */}
         <h1>{count}</h1>
        <button style={{color:"white", backgroundColor:"black"}} onClick={handleCounter}>Increment</button> <br></br><br></br>

        <button style={{color:"white", backgroundColor:"black"}} onClick={(()=> setShow(!show))}>{show ? "You clicked me" : "click me plz!"}</button>
    </div>
 )

}