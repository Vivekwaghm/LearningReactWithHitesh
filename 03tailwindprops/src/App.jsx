
import './App.css'
import Card from './components/card'

function App() {
  let myObj = {
    name: 'vivek',
    age: 23,
    city: 'delhi'
  }

  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="code kro" price="10"/>
      <Card username="code mat kro" />
    </>
  )
}

export default App
