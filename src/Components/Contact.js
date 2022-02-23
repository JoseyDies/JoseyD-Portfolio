import React, { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import image10 from "../Images/kitty.jpg";
import { Link } from "react-router-dom";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/785c9860-94d2-11ec-bdf8-dd9c99f898ec";

const user = {
  linkedin: "www.linkedin.com/in/josey-dies-599b99154",
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <Container
      fluid
      className="flex-center flex-column"
      style={{
        paddingTop: "6%",
        paddingBottom: "11%",
        backgroundImage: `url(${image10})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "20px",
      }}
    >
      <h1
        style={{
          fontFamily: "'Lobster Two', cursive",
          textAlign: "center",
          color: "#FF3E41",
          fontSize: "8vh",
        }}
      >
        Connect With Me
      </h1>
      <br />
      <form
        action={FORM_ENDPOINT}
        onSubmit={handleSubmit}
        method="POST"
        target="_blank"
        style={{ paddingRight: "5%" }}
      >
        <div>
          <input
            type="text"
            placeholder="What's your name?"
            name="name"
            required
            style={{ width: "150%", fontFamily: "Oswald, sans-serif" }}
          />
        </div>
        <br />
        <div>
          <input
            type="email"
            placeholder="what's your email?"
            name="email"
            required
            style={{ width: "150%", fontFamily: "Oswald, sans-serif" }}
          />
        </div>
        <br />
        <div>
          <textarea
            placeholder="Say hello!"
            name="message"
            required
            style={{ width: "150%", fontFamily: "Oswald, sans-serif" }}
          />
        </div>
        <br />
        <div>
          <button
            type="submit"
            className="btn btn-info"
            style={{
              width: "100%",
              fontFamily: "Oswald, sans-serif",
              fontWeight: "bold",
            }}
          >
            {" "}
            Send a message{" "}
          </button>
        </div>
      </form>
      <Stack
        direction="horizontal"
        gap={5}
        className="flex-center"
        style={{ backgroundColor: "transparent" }}
      >
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          style={{textDecoration: "none"}}
        >
          <i
            className="devicon-github-original skillfont"
            style={{ color: "whitesmoke" }}
          ></i>
        </a>
        <a
          href="https://www.linkedin.com/in/josey-dies-599b99154"
          target="_blank"
          rel="noreferrer"
          style={{textDecoration: "none"}}
        >
          <i
            className="devicon-linkedin-plain colored skillfont"
            style={{ color: "#1266f1" }}
          ></i>
        </a>
      </Stack>
    </Container>
  );
};

export default Contact;
