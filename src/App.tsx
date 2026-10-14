import { useState } from "react"
import Step3 from "./component/Step3";
import Step1 from "./component/Step1";
import Step2 from "./component/Step2";

export type Data = {
  firstName: string;
  secondName: string;
  email: string;
  city: string;
  country: string;
  zip: string;
}
function App() {
  const [stepNumber, setStepNumber] = useState(1)
  const [data, setData] = useState<Data>({ firstName: '', secondName: '', email: '', city: '', country: '', zip: '' })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target
    setData((prev) => ({ ...prev, [name]: value }))
  }
  const previosStep = () => {
    setStepNumber(stepNumber - 1)
  }
  const nextStep = () => {
    setStepNumber(stepNumber + 1)
  }
  const submitStep = () => {
    // Отправили
  }
  const isStepValid = (step: number): boolean => {
    if (step === 1) return Boolean(data.firstName && data.secondName && data.email)
    if (step === 2) return Boolean(data.city && data.country && data.zip)
    return true
  }
  return (
    <div>
      <h1>formReact</h1>
      <h3>Step {stepNumber}</h3>
      {stepNumber === 1 && <Step1 data={data} onChange={handleChange} />}
      {stepNumber === 2 && <Step2 data={data} onChange={handleChange} />}
      {stepNumber === 3 && <Step3 data={data} />}
      <div>
        {stepNumber > 1 && <button onClick={previosStep}>Назад</button>}
        {stepNumber < 3 && <button onClick={nextStep} disabled={!isStepValid(stepNumber)}>Шаг {stepNumber + 1}</button>}
        {stepNumber === 3 && <button onClick={submitStep}>Отправить</button>}
      </div>
    </div>
  )
}

export default App
