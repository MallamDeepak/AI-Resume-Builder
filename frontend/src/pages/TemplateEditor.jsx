import { useState } from 'react'

function TemplateEditor({ template, onNavigateHome }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    summary: '',
    experience: [{ company: '', position: '', duration: '', description: '' }],
    education: [{ school: '', degree: '', field: '', year: '' }],
    skills: ''
  })

  const [currentTab, setCurrentTab] = useState('personal')

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...formData.experience]
    newExperience[index][field] = value
    setFormData(prev => ({ ...prev, experience: newExperience }))
  }

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...formData.education]
    newEducation[index][field] = value
    setFormData(prev => ({ ...prev, education: newEducation }))
  }

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', position: '', duration: '', description: '' }]
    }))
  }

  const addEducation = () => {
    setFormData(prev => ({
      ...prev,
      education: [...prev.education, { school: '', degree: '', field: '', year: '' }]
    }))
  }

  const handleDownload = () => {
    alert(`Resume created with ${template.name} template!\nThis is a demo. In production, this would generate a PDF.`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#0f1f3d] to-[#1a2e52] text-white">
      {/* HEADER */}
      <nav className="bg-[#0a1628]/95 backdrop-blur-md border-b border-white/5 sticky top-0 z-50 py-4">
        <div className="max-w-[1400px] mx-auto px-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={onNavigateHome}
              className="text-2xl font-extrabold tracking-wide font-['Space_Grotesk'] hover:opacity-80 transition-opacity"
            >
              UPTO<span className="text-[#00d9ff]">SKILLS</span>
            </button>
            <div className="hidden md:block h-8 w-px bg-white/20"></div>
            <span className="hidden md:inline text-gray-400">Editing: <span className="text-[#00d9ff] font-semibold">{template.name}</span> Template</span>
          </div>
          <button 
            onClick={onNavigateHome}
            className="flex items-center gap-2 px-6 py-3 border border-white/10 text-white rounded-lg font-semibold transition-all duration-300 hover:border-[#00d9ff] hover:text-[#00d9ff]"
          >
            <i className="fas fa-times"></i>
            Exit
          </button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* LEFT PANEL - FORM */}
        <div className="w-full lg:w-1/2 overflow-y-auto px-8 py-8 border-r border-white/10">
          <div className="max-w-2xl">
            {/* TAB NAVIGATION */}
            <div className="flex gap-4 mb-8 overflow-x-auto pb-4 border-b border-white/10">
              {['personal', 'experience', 'education', 'skills'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setCurrentTab(tab)}
                  className={`px-4 py-2 font-semibold whitespace-nowrap transition-all duration-300 ${
                    currentTab === tab
                      ? 'text-[#00d9ff] border-b-2 border-[#00d9ff]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* PERSONAL INFO TAB */}
            {currentTab === 'personal' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Personal Information</h3>
                
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Full Name</label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange('fullName', e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-gray-300">Phone</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="City, Country"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Professional Summary</label>
                  <textarea
                    value={formData.summary}
                    onChange={(e) => handleInputChange('summary', e.target.value)}
                    placeholder="Brief overview of your professional background..."
                    rows="5"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all resize-none"
                  />
                </div>
              </div>
            )}

            {/* EXPERIENCE TAB */}
            {currentTab === 'experience' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Work Experience</h3>
                  <button
                    onClick={addExperience}
                    className="px-4 py-2 bg-[#00d9ff]/10 text-[#00d9ff] rounded-lg border border-[#00d9ff]/20 hover:bg-[#00d9ff]/20 transition-all"
                  >
                    + Add Experience
                  </button>
                </div>

                {formData.experience.map((exp, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleExperienceChange(idx, 'company', e.target.value)}
                        placeholder="Company name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Position</label>
                        <input
                          type="text"
                          value={exp.position}
                          onChange={(e) => handleExperienceChange(idx, 'position', e.target.value)}
                          placeholder="Job title"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Duration</label>
                        <input
                          type="text"
                          value={exp.duration}
                          onChange={(e) => handleExperienceChange(idx, 'duration', e.target.value)}
                          placeholder="2020 - 2024"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Description</label>
                      <textarea
                        value={exp.description}
                        onChange={(e) => handleExperienceChange(idx, 'description', e.target.value)}
                        placeholder="Describe your responsibilities..."
                        rows="3"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all resize-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* EDUCATION TAB */}
            {currentTab === 'education' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Education</h3>
                  <button
                    onClick={addEducation}
                    className="px-4 py-2 bg-[#00d9ff]/10 text-[#00d9ff] rounded-lg border border-[#00d9ff]/20 hover:bg-[#00d9ff]/20 transition-all"
                  >
                    + Add Education
                  </button>
                </div>

                {formData.education.map((edu, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-lg border border-white/10 space-y-4">
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">School/University</label>
                      <input
                        type="text"
                        value={edu.school}
                        onChange={(e) => handleEducationChange(idx, 'school', e.target.value)}
                        placeholder="School name"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Degree</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => handleEducationChange(idx, 'degree', e.target.value)}
                          placeholder="Bachelor's"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold mb-2 text-gray-300">Year</label>
                        <input
                          type="text"
                          value={edu.year}
                          onChange={(e) => handleEducationChange(idx, 'year', e.target.value)}
                          placeholder="2024"
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2 text-gray-300">Field of Study</label>
                      <input
                        type="text"
                        value={edu.field}
                        onChange={(e) => handleEducationChange(idx, 'field', e.target.value)}
                        placeholder="e.g., Computer Science"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* SKILLS TAB */}
            {currentTab === 'skills' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-6">Skills</h3>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-300">Skills (comma separated)</label>
                  <textarea
                    value={formData.skills}
                    onChange={(e) => handleInputChange('skills', e.target.value)}
                    placeholder="JavaScript, React, Node.js, Python, SQL..."
                    rows="8"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:border-[#00d9ff] focus:outline-none transition-all resize-none"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL - PREVIEW */}
        <div className="hidden lg:flex lg:w-1/2 bg-white/5 border-l border-white/10 overflow-y-auto flex-col items-center justify-start pt-12 px-8">
          <div className="w-full max-w-2xl bg-white text-gray-900 p-12 rounded-lg shadow-2xl">
            {/* PREVIEW HEADER */}
            <div className="border-b-2 border-gray-300 pb-6 mb-6">
              <h1 className="text-4xl font-bold">{formData.fullName || 'Your Name'}</h1>
              <div className="flex gap-6 text-sm text-gray-600 mt-2">
                {formData.email && <span>{formData.email}</span>}
                {formData.phone && <span>{formData.phone}</span>}
                {formData.location && <span>{formData.location}</span>}
              </div>
            </div>

            {/* PREVIEW SUMMARY */}
            {formData.summary && (
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-2">Professional Summary</h2>
                <p className="text-sm text-gray-700">{formData.summary}</p>
              </div>
            )}

            {/* PREVIEW EXPERIENCE */}
            {formData.experience.some(e => e.company) && (
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3">Experience</h2>
                {formData.experience.map((exp, idx) => exp.company && (
                  <div key={idx} className="mb-4">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{exp.position}</h3>
                      <span className="text-sm text-gray-600">{exp.duration}</span>
                    </div>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                    {exp.description && <p className="text-sm mt-1">{exp.description}</p>}
                  </div>
                ))}
              </div>
            )}

            {/* PREVIEW EDUCATION */}
            {formData.education.some(e => e.school) && (
              <div className="mb-6">
                <h2 className="text-lg font-bold mb-3">Education</h2>
                {formData.education.map((edu, idx) => edu.school && (
                  <div key={idx} className="mb-4">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{edu.degree} in {edu.field}</h3>
                      <span className="text-sm text-gray-600">{edu.year}</span>
                    </div>
                    <p className="text-sm text-gray-600">{edu.school}</p>
                  </div>
                ))}
              </div>
            )}

            {/* PREVIEW SKILLS */}
            {formData.skills && (
              <div>
                <h2 className="text-lg font-bold mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {formData.skills.split(',').map((skill, idx) => (
                    <span key={idx} className="bg-gray-200 text-gray-800 text-xs px-3 py-1 rounded">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0a1628]/95 backdrop-blur-md border-t border-white/5 px-8 py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button 
            onClick={onNavigateHome}
            className="px-6 py-3 border border-white/10 text-white rounded-lg font-semibold hover:border-white/20 transition-all"
          >
            Save as Draft
          </button>
          <button 
            onClick={handleDownload}
            className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#ff6b3d] to-[#ff5722] text-white rounded-lg font-bold hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <i className="fas fa-download"></i>
            Download Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default TemplateEditor