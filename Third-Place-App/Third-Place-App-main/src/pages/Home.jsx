import { useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import tree from '../assets/tree.png'

function Home() {
  const { hash } = useLocation()

  // Client-side navigation doesn't jump to #anchors on its own,
  // so scroll to the About section when the URL is /#about.
  useEffect(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <h2>Find your third place.</h2>

          <p>
            Discover cafes, parks, libraries, gyms, and other places
            where you can relax, hang out, study, or meet people.
          </p>

          <Link className="explore-button" to="/explore">
            Explore
          </Link>
        </div>

        <div className="hero-image">
          <img src={tree} alt="Tree illustration" />
        </div>
      </section>

      <section id="about" className="about">
        <h2>What is Trees?</h2>

        <p>
          Trees helps people find places outside of home and work
          where they can spend time and connect with other people.
        </p>
      </section>
    </main>
  )
}

export default Home
