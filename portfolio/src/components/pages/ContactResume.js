import React from "react";
// import resume from "../../pdf/ResumeAutumnLegere.pdf";
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

      <section class="contactlinks">
        <p>
          <a
            href="mailto: autumnlegere@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            autumnlegere@gmail.com
          </a>
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/autumn-legere"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </section>
    </div>
  );
}
