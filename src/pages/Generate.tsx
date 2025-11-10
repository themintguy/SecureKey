import { useState } from 'react'

function Generate() {
  const [UpperCase, setUppercase] = useState(false)
  const [LowerCase, setLowercase] = useState(false)
  const [Numbers, setNumbers] = useState(false)
  const [Symbols, setSymbols] = useState(false)
  const [Password, setPassword] = useState("@dfTy89")
  const [Length, setLength] = useState(12)
  const [alert, setAlert] = useState("")


  const UpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
  const LowerCaseChars = "abcdefghijklmnopqrstuvwxyz".split("")
  const numbersChars = "123456789".split("")
  const SymbolsChars = ["#", "%", "&", "*", "@", "!", "<", ">", "$"]

  const getRandomChars = (array : string[], count = 8) => {
    const result = []
    for (let i = 0; i < count; i++) {
      const randomChar = array[Math.floor(Math.random() * array.length)]
      result.push(randomChar)
    }
    return result
  }

  const HandlePassword = () => {
    const allChars = []
    if (UpperCase) allChars.push(...getRandomChars(UpperCaseChars))
    if (LowerCase) allChars.push(...getRandomChars(LowerCaseChars))
    if (Numbers) allChars.push(...getRandomChars(numbersChars))
    if (Symbols) allChars.push(...getRandomChars(SymbolsChars))

    if (allChars.length === 0) {
      setAlert("Please select options to generate password")
      return
    }
    if(allChars.length !== 0){
      setAlert("")
    }

    let newPassword = ""
    for (let i = 0; i < Length; i++) {
      const randomChar = allChars[Math.floor(Math.random() * allChars.length)]
      newPassword += randomChar
    }
    setPassword(newPassword)
  }


  const copy = async ()=>{
    await navigator.clipboard.writeText(Password)
  }

  // useEffect(()=>{
  //   HandlePassword()
  // },[])

  return (
    <div className="text-[var(--color-leaf)] w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto mt-20 p-4">
      <h1 className="text-center font-bold text-3xl mb-6">Generate Password</h1>
      <div className="flex flex-col sm:flex-row gap-3 bg-[var(--color-room)] p-3 rounded-2xl">
        <input
          type="text"
          className="flex-1 w-full sm:w-auto bg-[var(--color-night)] rounded-2xl p-3"
          value={Password}
          placeholder="Password"
        />
        <button className="bg-[var(--color-ocean)] font-bold rounded-2xl p-2 sm:w-20 w-full"
        onClick={copy} 
        >
          Copy
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-2 bg-[var(--color-room)] mt-6 p-6 rounded">
        <label className="font-bold">Password Length</label>
        <input
          type="range"
          value={Length}
          max={20}
          min={4}
          className="w-full"
          onChange={(e) => setLength(Number(e.target.value))}
          onClick={HandlePassword}
        />
        <p className="text-[var(--color-ocean)] font-bold">{Length}</p>
      </div>

      <div className="flex flex-col gap-3 mt-4 bg-[var(--color-room)] p-6 rounded">
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" onClick={HandlePassword} onChange={() => setUppercase(!UpperCase)} />
          <p className="font-bold">Upper Case</p>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" onClick={HandlePassword} onChange={() => setLowercase(!LowerCase)} />
          <p className="font-bold">Lower Case</p>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" onClick={HandlePassword} onChange={() => setNumbers(!Numbers)} />
          <p className="font-bold">Number</p>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4" onClick={HandlePassword} onChange={() => setSymbols(!Symbols)} />
          <p className="font-bold">Symbols</p>
        </div>

        {alert && <p className="text-[var(--color-red-400)] font-extrabold text-center">{alert}</p>}

        <button
          className="bg-[var(--color-ocean)] font-bold rounded-full p-3 mt-4 w-full sm:w-36 mx-auto"
          onClick={HandlePassword}
        >
          GENERATE
        </button>
      </div>
    </div>
  )
}

export default Generate
