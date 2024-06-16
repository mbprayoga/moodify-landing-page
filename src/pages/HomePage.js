import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="Home">
      <header className="Home-header">
        <h1>Mental Health Tracking and Assistance</h1>
        <p>
          Moodify helps you keep track of your mood and offers guidance to
          maintain your mental health through recommended coping tools,
          including step-by-step instructions, music, and podcasts.
        </p>
      </header>
      <main className="Home-main">
        <section className="About-Moodify">
          <h2 className="Section-title">Moodify</h2>
          <p>
            Moodify is a <strong>user-friendly</strong> tool designed to{" "}
            <strong>track your daily mood</strong> offering tailored guidance
            informed by your input. Powered by cutting-edge natural language
            processing, Moodify delivers <strong>coping tools</strong> as
            step-by-step instructions, curated music playlists, and insightful
            podcasts to support your mental health. It simplifies mood tracking
            and assists you in your efforts towards better mental well-being.
          </p>
        </section>
        <section className="Services">
          <h2 className="Section-title">Services</h2>
          <div className="Service">
            <h3>User-Friendly</h3>
            <p>
              Moodify stands out with its user-friendly design, making it
              accessible and easy to navigate for everyone. The intuitive
              interface ensures that users can quickly log their moods, access
              personalized guidance, and explore various coping tools without
              any hassle. Whether you're tracking your mood daily or seeking
              specific mental health resources, Moodify's user-friendly approach
              ensures a smooth and supportive experience every step of the way.
            </p>
          </div>
          <div className="Service">
            <h3>Mood Tracking</h3>
            <p>
              Tracking your mood with Moodify is both simple and insightful. By
              writing a daily journal, you can record your emotions and
              experiences, capturing the nuances of your mood throughout the
              day. Based on these entries, Moodify analyzes the data to provide
              a comprehensive output of your overall mood. By consistently
              writing in your journal, you gain valuable insights and access
              practical resources to support your well-being.
            </p>
          </div>
          <div className="Service">
            <h3>Coping Tools</h3>
            <p>
              Moodify's coping tools are designed to support your mental health
              in a variety of effective ways. These tools include personalized
              strategies that help you manage stress, anxiety, and other mental
              health challenges. The tool provides step-by-step instructions for
              mindfulness exercises and relaxation techniques, curated music
              playlists to elevate your mood or help you relax, and insightful
              podcasts offering expert advice and relatable stories.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
