import { FaHeart } from 'react-icons/fa6'
import { profile } from '../data.js'
import Garland from './Garland.jsx'
import Wheel from './Wheel.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <Garland animated />
      <div className="wrap foot">
        <p className="copy">
          <Wheel size={20} /> &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="built">
          Built with <FaHeart className="heart" aria-label="love" /> by
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">
            <img src={profile.githubAvatar} alt="" width="26" height="26" />
            {profile.handle}
          </a>
        </p>
      </div>
    </footer>
  )
}

