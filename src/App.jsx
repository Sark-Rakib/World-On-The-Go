
import { Suspense } from 'react'
import './App.css'
import Countrys from './component/Countrys/Countrys'

  const CountriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json())

function App() {

  return (
    <>   
     <Suspense fallback={<h2>Loading...</h2>}>
      <Countrys CountriesPromise={CountriesPromise}></Countrys>
     </Suspense>
    </>
  )
}

export default App
