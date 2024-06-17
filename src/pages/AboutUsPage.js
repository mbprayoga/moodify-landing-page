import React from "react";
import "./AboutUsPage.css";

import TeamCard from "../components/TeamCard.js";

import placeholder from "../assets/placeholder.jpg";
import Asnawi from "../assets/Asnawi.jpeg";
import Sultan from "../assets/Sultan.jpeg";
import Fachry from "../assets/Fachry.jpeg";
import Arya from "../assets/Arya.jpeg";
import Bintang from "../assets/Bintang.jpg";
import Jauza from "../assets/Jauza.jpeg"

function AboutUsPage() {
  const team = [
    {
      img: Asnawi,
      link: "https://www.linkedin.com/in/asnawialamsyah/",
      name: "Asnawi Alamsyah",
      path: "Machine Learning Engineer",
    },
    {
      img: Sultan,
      link: "https://www.linkedin.com/in/sultanfahdmby/",
      name: "Sultan Fahd Muhammad Bahruddin Yusuf",
      path: "Machine Learning Engineer",
    },
    {
      img: Fachry,
      link: "https://www.linkedin.com/in/fachrysyifaananda/",
      name: "Fachry Syifa Ananda",
      path: "Machine Learning Engineer",
    },
    {
      img: Arya,
      link: "https://www.linkedin.com/in/fitriawanaryanugraha/",
      name: "Fitriawan Arya Nugraha",
      path: "Backend & Cloud Engineer",
    },
    {
      img: Bintang,
      link: "https://www.linkedin.com/in/m-bintang-prayoga-utama-65738523a/",
      name: "M. Bintang Prayoga Utama",
      path: "Backend & Cloud Engineer",
    },
    {
      img: Jauza,
      link: "https://www.linkedin.com/in/jauza-aryazuhdi-alaudin1403/",
      name: "Jauza Aryazuhdi Alaudin",
      path: "Mobile App Developer",
    },
    {
      img: placeholder,
      link: "https://www.linkedin.com/in/m-javier-rasyadi-a95371300/",
      name: "M Javier Rasyadi",
      path: "Mobile App Developer",
    },
  ];
  return (
    <div className="About">
      <header className="About-header">
        <h1>About Us</h1>
        <p>
          Our mission is to promote mental well-being through accessible
          technology in daily life. 
        </p>
      </header>
      <body>
        <div className="team-title">
          <h2>Our Team</h2>
          <div className="team-cards">
            {team.map((member, index) => (
              <TeamCard
                key={index}
                img={member.img}
                link={member.link}
                name={member.name}
                path={member.path}
              />
            ))}
          </div>
        </div>
      </body>
    </div>
  );
}

export default AboutUsPage;
