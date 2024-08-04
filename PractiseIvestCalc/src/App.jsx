import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"
import { useState } from "react"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1500,
    expectedReturn: 8,
    duration: 12
  })

  const inputIsValid = userInput.duration >= 1

  function handleUserInputChange(inputIdentidier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentidier]: +newValue,
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} handleChange={handleUserInputChange} />
      {!inputIsValid && <p className="center"> Please enter the Duration value greater than zero.</p>}
      {inputIsValid && <Result input={userInput} />}
    </>
  )
}

export default App
