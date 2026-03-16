import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/countries'
import Country from './components/Country/Country';

const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

function App() {
  return (
   
    <Suspense fallback={<p>Loading all countries...</p>}>
      <Countries countriesPromise={countriesPromise} />
    </Suspense>
  )
}

export default App
