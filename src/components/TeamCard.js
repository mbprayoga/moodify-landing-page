import "./TeamCard.css";

import linkedin from "../assets/linkedin.png";

export default function TeamCard(props) {
  return (
    <div className="team-card">
      <div className="image-container">
        <img src={props.img} alt="profile" className="profile-img" />
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-link"
        >
          <img src={linkedin} alt="LinkedIn" className="linkedin-icon" />
        </a>
      </div>
      <div className="team-info">
        <div>
          <p>
            <strong>{props.name}</strong>
          </p>
          <p>
            <span>{props.path}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
