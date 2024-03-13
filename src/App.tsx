import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [currentColor, setCurrentColor] = useState('');
  const inputRef = useRef<HTMLInputElement>(null)

  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgba(${r},${g},${b})`;
  };

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.focus()
    }
  })
  

  return (
    <>
      <div style={{background: currentColor}} className="container">
        <h2>Background Color : {currentColor}</h2>
        <button onClick={() => {
          const randomColor = getRandomColor();
          setCurrentColor(randomColor)
        }}>CLICK ME</button>

        <input ref={inputRef} type="text" />
      </div>
    </>
  );
}

export default App;

