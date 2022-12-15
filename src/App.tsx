import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AuthContext } from './contexts/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const {login, setLogin, name, setName} = useContext(AuthContext)
  


  return (
    <div className="App">
      { login ? (<div>
          <p>Bem vindo {name}!</p>
          <p>Contador: {count}</p>
          <div id='buttons'>
            <button id='button' onClick={()=>{setCount(count+1)}}>Contar</button>
            <button id='button' onClick={() => {setLogin(false)}}>Sair</button>
          </div>
          
      </div>) : (<div>
          <p>Logo-se para usar o contador!</p>
          <div id='main'>
            <input type="text" id='name' placeholder='Seu nome' onChange={(e) => setName(e.target.value)}/>
            <button id='button' onClick={() => {
              setLogin(true); setName(name)}}>Logar</button>
          </div>
          
      </div>) }
    </div>
  )
}

export default App
