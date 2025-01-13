import './App.css'
import './index.css'
import { Hero } from './components/Hero'
import { Topbar } from './components/Topbar'

function App() {
  return (
    <div className='w-full h-full'>
      <Topbar />
      <Hero />
    </div>
  )
}

export default App
