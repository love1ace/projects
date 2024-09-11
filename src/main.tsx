import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header'
import Project from './components/Project.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Project />
  </StrictMode>,
)