import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
function footer() {
    return (
        <section className="footer">
        <div className="copyright">Ⓒ Lexie Crawford 2021</div>
        <footer className="footer">
          <div className="icons">
            <a href="https://github.com/lexcraw4d">
                <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/alexiacrawford/">
                <FaLinkedin />
            </a>
          </div>
        </footer>
      </section>
    )
}

export default footer
