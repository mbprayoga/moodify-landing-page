import React from "react";

import "./HomePage.css";

import MoodifyFeatures from "../assets/MoodifyFeatures.gif";
import MoodifyHome from "../assets/MoodifyHome.png";
import MoodifyJournal from "../assets/MoodifyJournal.png";
import MoodifyCoping from "../assets/MoodifyCoping.gif";

function HomePage() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="Home-header-desc">
          <h1>Mental Health Tracking and Assistance</h1>
          <p>
            Moodify helps you keep track of your mood and offers guidance to
            maintain your mental health through recommended coping tools,
            including step-by-step instructions, music, and podcasts.
          </p>
        </div>
        <div className="Service-img-container">
          <img src={MoodifyFeatures} alt="features" className="Service-img" />
        </div>
      </header>
      <main className="Home-main">
        <section className="About-Moodify">
          <p>
            Moodify is a <strong>user-friendly</strong> tool designed to{" "}
            <strong>track your daily mood</strong> offering tailored guidance
            informed by your input. Powered by cutting-edge natural language
            processing, Moodify delivers <strong>coping tools</strong> as
            step-by-step instructions, curated music playlists, and insightful
            podcasts to support your mental health.
          </p>
        </section>
        <section className="Services">
          <h2 className="Section-title">Services</h2>
          <div className="Service-left">
            <div className="Service-desc">
              <h3>User-Friendly</h3>
              <p>
                Moodify stands out with its user-friendly design, making it
                accessible and easy to navigate for everyone. The intuitive
                interface ensures that users can quickly log their moods, access
                personalized guidance, and explore various coping tools without
                any hassle.
              </p>
            </div>
            <div className="Service-img-container">
              <img src={MoodifyHome} alt="user-friendly" className="Service-img" />
            </div>
          </div>
          <div className="Service-right">
            <div className="Service-img-container">
              <img src={MoodifyJournal} alt="journal" className="Service-img" />
            </div>
            <div className="Service-desc">
              <h3>Mood Tracking</h3>
              <p>
                Tracking your mood with Moodify is both simple and insightful.
                By writing a daily journal, you can record your emotions and
                experiences, capturing the nuances of your mood throughout the
                day. Based on these entries, Moodify analyzes the data to
                provide a comprehensive output of your overall mood.
              </p>
            </div>
          </div>
          <div className="Service-left">
            <div className="Service-desc">
              <h3>Coping Tools</h3>
              <p>
                Moodify's coping tools are designed to support your mental
                health in a variety of effective ways. These tools include
                personalized strategies that help you manage stress, anxiety,
                and other mental health challenges. 
              </p>
            </div>
            <div className="Service-img-container">
              <img src={MoodifyCoping} alt="coping" className="Service-img" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
