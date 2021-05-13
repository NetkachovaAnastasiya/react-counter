import React, { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0)

    const increment = ()=> {
        setCount(count + 1)
    }
    const decrement = ()=> {
        setCount(count - 1)
    }
    const reset = ()=> {
        setCount(0)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>This is Hooks</h1>
        <div>
          <p style={{ textAlign: 'center', fontSize: 40 }}>{count}</p>
          <button onClick={increment} style={{ fontSize: 20, marginRight: 10 }}>Increment</button>
          <button onClick={decrement}  style={{ fontSize: 20, marginRight: 10 }}>Decrement</button>
          <button onClick={reset}  style={{ fontSize: 20, marginRight: 10 }}>Reset</button>
        </div>
      </div>
    )
}

export default App;