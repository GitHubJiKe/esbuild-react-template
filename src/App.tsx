import React from 'react'
import './App.scss'

function App() {
    const onTitleClick = () => {
        alert("Hello esbuild")
    }
    return <div className="app"><h1 className="app-title" onClick={onTitleClick}>esbuild react demo</h1></div>
}

export default App;