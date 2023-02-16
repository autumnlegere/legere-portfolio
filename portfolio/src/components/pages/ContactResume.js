import React from "react";
import resume from "../../pdf/ResumeAutumnLegere.pdf";
export default function ContactMe() {
  return (
    <div>
      <h1>Contact Me</h1>
      <section>
        <p>
          Please feel free to reach out to me on any of the following platforms.
          <br />I look forward to hearing from you!
        </p>
      </section>

      <a href={resume} download>DOWNLOAD RESUME HERE</a>
      <section class="contactlinks">
        <a
          href="https://github.com/autumnlegere/PortfolioAndBeyond.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          href="mailto: autumnlegere@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          autumnlegere@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/autumn-legere"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </section>
      <form>
        <input placeholder="Name"></input>
        <input placeholder="Email"></input>
        <input placeholder="Message"></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
