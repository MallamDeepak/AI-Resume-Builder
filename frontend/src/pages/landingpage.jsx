import { useState, useEffect } from 'react'
import './LandingPage.css'

function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedTemplate, setSelectedTemplate] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('students')

  // Scroll animation for How It Works section
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, observerOptions)

    const stepCards = document.querySelectorAll('.step-card')
    stepCards.forEach(card => observer.observe(card))

    return () => {
      stepCards.forEach(card => observer.unobserve(card))
    }
  }, [])

  const templates = [
    { name: "Chronological", desc: "Traditional timeline format", image: "chronological" },
    { name: "Functional", desc: "Skills-based layout", image: "functional" },
    { name: "Creative", desc: "Bold and unique design", image: "creative" },
    { name: "Modern", desc: "Contemporary professional", image: "modern" },
    { name: "Minimalist", desc: "Clean and simple", image: "minimalist" },
    { name: "Executive", desc: "Senior-level format", image: "executive" },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const companies = [
    { name: 'Netflix', color: '#E50914' },
    { name: 'Amazon', color: '#FF9900' },
    { name: 'Airbnb', color: '#FF5A5F' },
    { name: 'Spotify', color: '#1DB954' },
    { name: 'Tesla', color: '#CC0000' },
    { name: 'Bloomberg', color: '#000000' },
    { name: 'Microsoft', color: '#00A4EF' },
    { name: 'Adobe', color: '#FF0000' }
  ]

  const howItWorksSteps = [
    {
      icon: 'fa-file-alt',
      title: 'CREATE RESUME',
      heading: 'Easily create or import your resume',
      description: 'Start your resume from scratch with our templates, upload an existing one, or import your LinkedIn profile.',
      buttonText: 'CREATE MY RESUME',
      buttonColor: 'blue'
    },
    {
      icon: 'fa-clipboard-check',
      title: 'RESUME SCORE',
      heading: 'Check and analyze your resume score',
      description: 'Get your resume score along with feedback on strengths, weaknesses, and tips to enhance it!',
      buttonText: 'CHECK MY SCORE',
      buttonColor: 'green'
    },
    {
      icon: 'fa-cog',
      title: 'CUSTOMIZATION',
      heading: 'Quickly customize your resume with AI',
      description: 'Simply input your experience, and let our AI generate impactful bullet points that showcase your skill and experience.',
      buttonText: 'CUSTOMIZE MY RESUME',
      buttonColor: 'orange'
    },
    {
      icon: 'fa-magic',
      title: 'OPTIMIZER',
      heading: 'Improve your resume instantly in one click',
      description: 'Effortlessly optimize your resume for any job listing with just one click for instant results',
      buttonText: 'OPTIMIZE MY RESUME',
      buttonColor: 'pink'
    },
    {
      icon: 'fa-download',
      title: 'DOWNLOAD RESUME',
      heading: 'Your winning resume is ready!',
      description: 'Download your job-ready resume, or craft multiple tailored versions.',
      buttonText: 'DOWNLOAD MY RESUME',
      buttonColor: 'green'
    }
  ]

  const features = [
    {
      icon: 'fa-file-alt',
      title: 'Resume Checker',
      description: 'Analyze and optimize your resume for success'
    },
    {
      icon: 'fa-file',
      title: 'Resume Templates',
      description: 'Choose from professional, ATS-friendly designs'
    },
    {
      icon: 'fa-search',
      title: 'Resume Analysis',
      description: 'Get actionable feedback to improve your resume'
    },
    {
      icon: 'fa-chart-line',
      title: 'Resume Skill Gap Analyzer',
      description: 'Spot missing skills to match job requirements'
    },
    {
      icon: 'fa-edit',
      title: 'Resume Editor',
      description: 'Edit and enhance your resume with smart tools'
    },
    {
      icon: 'fa-palette',
      title: 'Customize Your Resume',
      description: 'Personalize your resume layout and branding'
    },
    {
      icon: 'fa-cogs',
      title: 'Resume Summary Generator',
      description: 'Create a strong resume summary in seconds'
    },
    {
      icon: 'fa-pen',
      title: 'AI Bulletpoint Writer',
      description: 'Generate tailored bullet points with AI help'
    },
    {
      icon: 'fa-linkedin',
      title: 'LinkedIn Resume Builder',
      description: 'Turn your LinkedIn profile into a resume fast'
    },
    {
      icon: 'fa-clock',
      title: 'Integrated With Job Tracker',
      description: 'Track job applications directly with your resume'
    },
    {
      icon: 'fa-chrome',
      title: 'Integrated With Chrome Extension',
      description: 'Edit resumes directly within your browser'
    },
    {
      icon: 'fa-envelope',
      title: 'Cover Letter Writer',
      description: 'Quickly craft tailored cover letters with ease'
    }
  ]

  return (
    <div className="landing-page">
      {/* NAVIGATION */}
      <nav className="nav">
        <div className="nav-container">
          {/* Logo */}
          <div className="logo">
            <div className="logo-icon">UPTO<span className="logo-skills">SKILLS</span></div>
            <div className="logo-subtitle">An Adobe Resume Experience</div>
          </div>

         

          {/* Auth Buttons */}
          <div className="auth-buttons">
            
            <button className="login-btn">
              <i className="fas fa-sign-in-alt"></i>
              Login
            </button>
            <button className="enterprise-btn">Sign up</button>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu show">
            <button>Learn & Earn</button>
            <button>Jobs</button>
            <button>Compete</button>
            <button>Discover</button>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="title-uptoSkills">UptoSkills AI</span>{' '}
              <span className="title-resume">Resume Builder:</span>
              <br />
              <span className="title-craft">Craft Your Perfect Resume in Minutes!</span>
            </h1>
            <h2 className="hero-subtitle">AI Resume Builder</h2>
            <p className="hero-description">
              AI-Powered Content, Professional Templates, ATS-Friendly.
            </p>
            
            <div className="hero-buttons">
              <button className="cta-button-primary">
                <i className="fas fa-graduation-cap"></i>
                Start Building for Free
              </button>
              <button className="cta-button-secondary">
                View Templates
              </button>
            </div>
          </div>

          <div className="hero-right">
            <div className="templates-preview-box">
              <div className="preview-header">
                <span className="preview-logo">UPTOSKILLS</span>
                <span className="preview-title">Top Resume Templates</span>
              </div>
              <div className="templates-grid-preview">
                {templates.slice(0, 6).map((template, index) => (
                  <div key={index} className="template-mini">
                    <div className="template-mini-header">
                      <div className="template-mini-photo"></div>
                      <div className="template-mini-name">{template.name}</div>
                    </div>
                    <div className="template-mini-lines">
                      <div className="mini-line"></div>
                      <div className="mini-line"></div>
                      <div className="mini-line"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Buttons */}
        <div className="category-buttons">
          <button 
            className={`category-btn ${selectedCategory === 'students' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('students')}
          >
            <i className="fas fa-graduation-cap"></i>
            For Students
          </button>
          <button 
            className={`category-btn ${selectedCategory === 'hr' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('hr')}
          >
            <i className="fas fa-users"></i>
            For HR Teams
          </button>
          <button 
            className={`category-btn ${selectedCategory === 'faculty' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('faculty')}
          >
            <i className="fas fa-chalkboard-teacher"></i>
            For Faculty
          </button>
        </div>
      </section>

      {/* Trusted Companies Section */}
      <section className="trusted-section">
        <div className="trusted-container">
          <h2>Trusted by job seekers who've landed at top companies</h2>
          <p className="trusted-subtitle">Our users have secured positions at industry-leading companies such as</p>
          <div className="companies-marquee">
            <div className="companies-track">
              {companies.map((company, index) => (
                <div key={index} className="company-logo" style={{ color: company.color }}>
                  {company.name}
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {companies.map((company, index) => (
                <div key={`dup-${index}`} className="company-logo" style={{ color: company.color }}>
                  {company.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="how-it-works-container">
          <h2>How <span className="highlight">It works</span></h2>
          <p className="how-it-works-subtitle">Quickly upload, customize, and download your resume tailored to any job description in no time</p>
          
          <div className="steps-container">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className={`step-card step-${index + 1}`}>
                <div className="step-content">
                  <div className="step-badge">
                    <i className={`fas ${step.icon}`}></i>
                    <span>{step.title}</span>
                  </div>
                  <h3>{step.heading.split(' ').map((word, i) => 
                    ['create', 'import', 'analyze', 'score', 'customize', 'Quickly', 'Improve', 'instantly', 'one', 'click', 'winning', 'ready!'].includes(word) ? 
                    <span key={i} className="highlight-word">{word} </span> : word + ' '
                  )}</h3>
                  <p>{step.description}</p>
                  <button className={`action-btn btn-${step.buttonColor}`}>
                    {step.buttonText}
                  </button>
                </div>
                <div className="step-visual"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Templates Section */}
      <section className="templates-showcase-section">
        <div className="templates-showcase-container">
          <h2>Access Free <span className="highlight">Resume Templates</span></h2>
          <p className="templates-showcase-subtitle">All the templates are ATS compliant and can be customized according to your style using our AI Resume Builder.</p>
          
          <div className="templates-preview">
            <button className="nav-arrow left-arrow">
              <i className="fas fa-chevron-left"></i>
            </button>
            <div className="templates-slider">
              <div className="template-preview">Template 1</div>
              <div className="template-preview">Template 2</div>
              <div className="template-preview">Template 3</div>
            </div>
            <button className="nav-arrow right-arrow">
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <h2>Explore <span className="highlight">AI Resume Builder Features</span></h2>
          <p className="features-subtitle">Dive into a powerful suite of career development tools and features designed to advance careers at all levels.</p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <i className={`fas ${feature.icon}`}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div>
            <div className="footer-logo">
              <span className="footer-logo-text">UPTO<span className="footer-logo-skills">SKILLS</span></span>
            </div>
            <p className="footer-desc">AI-powered resume builder for your dream job.</p>
          </div>

          <div>
            <h4>Product</h4>
            <ul className="footer-links">
              <li>Features</li>
              <li>Pricing</li>
              <li>Templates</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul className="footer-links">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div>
            <h4>Legal</h4>
            <ul className="footer-links">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} UptoSkills. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default LandingPage