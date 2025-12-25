import { useState } from 'react'
import LandingPage from './pages/Home'
import TemplatesPage from './pages/TemplatesPage'
import TemplateEditor from './pages/TemplateEditor'

/* Parent routing example (as requested):
   const [page, setPage] = useState('home')

   {page === 'home' && (
     <LandingPage onNavigateToTemplates={() => setPage('templates')} />
   )}

   {page === 'templates' && (
     <TemplatesPage
       onNavigateHome={() => setPage('home')}
       onSelectTemplate={(template) => console.log(template)}
     />
   )}
*/

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  const navigateToTemplates = () => {
    setCurrentPage('templates')
  }

  const navigateToEditor = (template) => {
    setSelectedTemplate(template)
    setCurrentPage('editor')
  }

  const navigateToHome = () => {
    setCurrentPage('home')
    setSelectedTemplate(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* HOME PAGE */}
      {currentPage === 'home' && <LandingPage onNavigateToTemplates={navigateToTemplates} />}

      {/* TEMPLATES PAGE */}
      {currentPage === 'templates' && (
        <TemplatesPage onSelectTemplate={navigateToEditor} onNavigateHome={navigateToHome} />
      )}

      {/* TEMPLATE EDITOR PAGE */}
      {currentPage === 'editor' && (
        <TemplateEditor template={selectedTemplate} onNavigateHome={navigateToHome} />
      )}
    </div>
  )
}

export default App