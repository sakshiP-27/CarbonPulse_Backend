import './App.css'
import './index.css'
import { Hero } from './components/Hero'
import { Topbar } from './components/Topbar'
import { MainContent } from './components/MainContent'

function App() {
  return (
    <div className='h-full'>
      <Topbar />
      <Hero />
      <MainContent />
    </div>
  )
}

export default App
