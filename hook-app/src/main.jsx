import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import MainApp from './10-useContext/MainApp'
// import { Padre } from './08-tarea-memo/Padre'
// import { CallbackHook } from './07-useCallback/CallbackHook'
// import { MemoHook } from './06-memos/MemoHook'
// import Memorize from './06-memos/Memorize'
// import Layout from './05-useLayoutEffect/Layout'
// import FocusScreen from './04-useRef/FocusScreen'
// import MultipleCustomHooks from './03-examples/MultipleCustomHooks'
// import CustomHookForm from './02-useEffect/CustomHookForm'
// import SimpleForm from './02-useEffect/SimpleForm'
// import CounterCustomHook from './01-useState/CounterCustomHook'
// import CounterApp from './01-useState/CounterApp'
// import App from './App'
// import './09-useReducer/intro-reducer'
// import { TodoApp } from './09-useReducer/TodoApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  </React.StrictMode>
)
