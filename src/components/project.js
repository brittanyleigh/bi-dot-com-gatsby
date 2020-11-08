import React from "react"
import PropTypes from "prop-types"
import Image from "./image"

import { FaCode, FaExternalLinkAlt, FaLock } from "react-icons/fa"

const Project = props => (
  <div className="project grid">
    <div className="project__img project--bottom-auto">
      <Image filename={props.image.replace("/", "")} alt={props.alt} />
    </div>
    <div className="project--bottom-auto">
      <h3 className="project__heading">{props.title}</h3>
      <p className="project__description flex">{props.description}</p>
    </div>
    <div className="project__buttons">
      {props.private ? (
        <div className="button disabled">
          <FaLock /> Private
        </div>
      ) : (
        <a
          className="button"
          href={props.code}
          target="_blank"
          rel="noopener noreferrer"
          disabled={props.private}
        >
          <FaCode /> View Code
        </a>
      )}

      <a
        className="button"
        href={props.live}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaExternalLinkAlt /> View Live
      </a>
    </div>
  </div>
)

Project.propTypes = {
  filename: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  live: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  private: PropTypes.bool,
}

export default Project
