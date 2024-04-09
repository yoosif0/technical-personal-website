import React from 'react'
import { Link } from 'gatsby'
import email from '../../c/thumbnails/email.svg'
import github from '../../c/thumbnails/github.svg'
import stackoverflow from '../../c/thumbnails/stackoverflow.svg'
import linkedin from '../../c/thumbnails/linkedin.svg'

export default function Footer() {
  return (
    <footer className="footer flex">
      <section className="container">
        <nav className="footer-links">
          <Link to="/blog">Articles</Link>
          <a
            href="https://yoosif.substack.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
          >
            Newsletter
          </a>
          <Link to="/rss.xml">RSS</Link>
        </nav>
        <nav className="flex justify-center">
          <a
            href="mailto:me@yoosif.com"
            title="me@yoosif.com"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={email} className="footer-img" alt="email" />
          </a>
          <a
            href="https://github.com/yoosif0"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={github} className="footer-img" alt="email" />
          </a>
          <a
            href="https://www.linkedin.com/in/yoosif"
            title="Linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={linkedin} className="footer-img" alt="email" />
          </a>
          <a
            href="https://stackoverflow.com/users/8065736"
            title="Stackoverflow"
            target="_blank"
            rel="noopener noreferrer"
            className="img"
          >
            <img src={stackoverflow} className="footer-img" alt="email" />
          </a>
        </nav>
      </section>
    </footer>
  )
}
