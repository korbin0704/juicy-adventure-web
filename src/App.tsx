import { useEffect, useRef, useState } from 'react'
import './App.scss'
import Loading from './component/Loading'
import Header from './component/Header';

function App() {

  const headerRef = useRef<any>(null);

  useEffect(() => {

  }, [])

  return (
    <div>
      <Loading />
      <Header ref={headerRef} />
    </div>
  )
}

export default App
