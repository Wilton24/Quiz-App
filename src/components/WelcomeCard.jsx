import { useRef } from "react"
import Button from "./Button";


export default function WelcomeCard({playername,handleSubmitPlayerName, startGame}){
  const inputRef = useRef();


  
  return (
    <div className="flex items-center justify-center">
      <div className="bg-[#875e39] p-4 font-bold">
        <h1 className="text-3xl text-center">Hi there {playername}</h1>
        <h1 className="text-2xl text-center">Test your React knowledge</h1>
        <input
         type="text" 
         placeholder="Enter your name"
         ref={inputRef}
         className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-200 my-2 mx-3" />
        <Button onClick={()=>handleSubmitPlayerName(inputRef.current.value)}>
          Submit  
        </Button>          
          <div className="block mx-auto my-2 text-center">
        <Button onClick={startGame}>
          Start
        </Button>        
      </div>
      </div>
    </div>
  )
}