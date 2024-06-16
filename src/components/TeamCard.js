import "./TeamCard.css";

export default function TeamCard(props) {
    return (
      <div className="team-card">
        <img src={props.img} alt="" />
        <div className="team-info">
          <div>
            <p>{props.name}</p>
            <p>{props.path}</p>
          </div>
          <a href={props.link} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    );
  }
