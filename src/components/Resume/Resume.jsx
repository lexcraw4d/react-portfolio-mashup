import React from 'react'

const Resume = () => {
    return (
        
        <div className="resume">
        <div className="info">
          <h1 className="resumeMargin">Resume</h1>
          <a
            id="download"
            href={require(`../../Assets/resume2021.pdf`).default}
            download="portfolio.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download My Resume
          </a>
          </div>
          </div>
       
    )
}

export default Resume
