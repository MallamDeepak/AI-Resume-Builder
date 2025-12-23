import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const showPage = (pageId) => {
    setCurrentPage(pageId)
  }

  return (
    <div className="app">
      {/* HOME PAGE */}
      {currentPage === 'home' && <LandingPage />}

      {/* TEMPLATES PAGE */}
      {currentPage === 'templates' && (
        <div className="page active">
          <section className="templates-section">
            <div className="templates-container">
              <h1>Resume Templates</h1>
              <p>Templates page coming soon...</p>
            </div>
          </section>
        </div>
      )}

      {/* ABOUT PAGE */}
      {currentPage === 'about' && (
        <div className="page active">
          <section className="about-section">
            <div className="about-container">
              <div className="about-header">
                <h1>About UptoSkills</h1>
                <p>UptoSkills helps professionals build resumes that recruiters love using AI-driven optimization.</p>
              </div>

              <div className="about-grid">
                <div className="about-card">
                  <h3>
                    <i className="fas fa-bullseye"></i>
                    Our Mission
                  </h3>
                  <p>Empower job seekers with intelligent resume tools.</p>
                </div>
                <div className="about-card">
                  <h3>
                    <i className="fas fa-sparkles"></i>
                    Our Vision
                  </h3>
                  <p>Make career growth accessible to everyone.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}

export default App