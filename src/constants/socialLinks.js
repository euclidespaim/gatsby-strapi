import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaRedhat,
  FaReddit,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://github.com/euclidespaim",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/euclidespaim/",
  },
  {
    id: 3,
    icon: <FaRedhat className="social-icon"></FaRedhat>,
    url: "https://euclidespaim.com",
  },
  {
    id: 4,
    icon: <FaReddit className="social-icon"></FaReddit>,
    url: "https://www.twitter.com",
  },
  {
    id: 5,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com/euclidespaim",
  },
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a href={link.url} className="social-link" target="_blank">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
