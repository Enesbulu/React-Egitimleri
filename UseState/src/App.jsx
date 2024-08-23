import { useState } from 'react'
import './App.css'

function App() {
  // const [firstName, setFirstName] = useState('Enes');
  const [names] = useState(["Enes", "Adem", "Yakup", "Semih"]);
  // const handleChange = () => {
  //   setFirstName("Ethem")
  // }

  console.log(typeof names);


  return (
    <>
      <div>
        {/* {firstName}
        <div><button onClick={handleChange /*() => { handleChange setFirstName("İbrahim") }//}>İsmi Değiştir</button></div > */
        }
        {names.map((name, index) => (
          <div key={index}>  {name}</div>
        ))}
      </div >
    </>
  )
}

export default App
