import "./styles.css"

export default function App() {
  return (
    <>
    <form className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input type="text" id="item" />
      </div>

      <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>

    <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
          Item 2
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
    </>
  )
}


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App



