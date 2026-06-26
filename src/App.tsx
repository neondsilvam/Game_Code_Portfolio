import { useState } from 'react'
import { LangProvider } from './context/LangContext'
import { Navbar } from './components/Navbar'
import { Perfil } from './pages/Perfil'
import { GameExp } from './pages/GameExp'
import { UiExp } from './pages/UiExp'
import { Contacto } from './pages/Contacto'
import type {Page} from './types'
import { Footer } from './components/Footer'
import './App.css'

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>('perfil')

  const renderPage = () => {
    switch (currentPage) {
      case 'perfil':
        return <Perfil />
      case 'gameExp':
        return <GameExp />
      case 'uiExp':
        return <UiExp />
      case 'contacto':
        return <Contacto />
    }
  }

  return (
    <div className="app">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
          <main className="main">{renderPage()}</main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  )
}
