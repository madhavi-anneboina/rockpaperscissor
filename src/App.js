import userEvent from '@testing-library/user-event';
import React,{useReducer, useState} from 'react';
import './App.css';

const App = () => {
  const computerChoices = ["rock","paper","scisssor"]
  const [computervalue,setComputerValue] = useState('')
  const [userchoice,setUserChoice] = useState('')
  const [userpoints,setUserPoints] = useState(0)
  const [computerpoints,setComputerPoints] = useState(0)
  const clickHandler = () =>{
  const index = Math.floor(Math.random() * computerChoices.length)
   const randomComputerValue = computerChoices[index]
   setComputerValue(randomComputerValue)

   if((userchoice ==="rock" && randomComputerValue === "paper") || (userchoice ==="paper" && randomComputerValue === "scisssor") || (userchoice ==="scisssor" && randomComputerValue === "rock")){
    setComputerPoints(computerpoints +1) 

   } else if((randomComputerValue ==="rock" && userchoice === "paper")||(randomComputerValue ==="paper" && userchoice === "scisssor") || (randomComputerValue ==="scisssor" && userchoice === "rock")){
    setUserPoints(userpoints +1)
    } else {
      setUserPoints(userpoints)
      setComputerPoints(computerpoints)
    }
   
  
   }
   
    
  
  
  return (
    <div className='app'>
      <h2>Computer choice :{computervalue} </h2>
      <h2>User choice : {userchoice}</h2>
      <h2>Result:  {userpoints >= computerpoints ? <div> user won </div> : "computer won"}</h2>
      
      <img  onClick = {() =>setUserChoice('rock')} src="https://media.istockphoto.com/id/959289744/photo/nature-concept-close-up-of-stack-of-stone-on-wooden-table-for-background-or-wallpaper.jpg?s=612x612&w=0&k=20&c=Jix69SszAn-Rj1nn5gQ54afh13Ir3lacfhhJFYd3HDo="/> &nbsp;&nbsp;
      <img  onClick = {() =>setUserChoice('paper')}  src ="https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFwZXJ8ZW58MHx8MHx8&w=1000&q=80" /> &nbsp;&nbsp;
      <img  onClick = {() =>setUserChoice('scissor')} src ="https://media.istockphoto.com/id/175601846/photo/isolated-shot-of-opened-black-handle-scissors-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=7f-PmukIgyQAI-88EE8CUEaKpDaBpMvMTQEudWJfqD0=" />
      <br/>
      <button onClick={clickHandler}>Play</button> <br/>
       <h2> User points :{userpoints} </h2>
       <h2>Computer Points : {computerpoints} </h2>

     
      </div>
  )

}

export default App
