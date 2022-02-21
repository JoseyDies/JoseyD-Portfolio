import React from "react";
import { Card } from "react-bootstrap";
import image from "../Images/Cabo.jpg";
import image2 from "../Images/aboutbackground2.JPG";

function About() {
  return (
    <div
      className="d-flex justify-content-center"
      style={{
        paddingTop: "11%",
        paddingBottom: "11%",
        backgroundImage: `url(${image2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backdropFilter: "20px",
      }}
    >
      <Card
        className="bg-dark text-light"
        style={{
          width: "30rem",
          fontFamily: "Oswald, sans-serif",
          fontSize: "3.0vh",
          zIndex: 1,
        }}
      >
        <Card.Img
          variant="top"
          src={image}
          style={{
            borderRadius: "50%",
            paddingTop: "5%",
            maxWidth: "50%",
            display: "flex",
            alignSelf: "center",
          }}
        />

        <Card.Body>
          <Card.Title style={{ fontSize: "4.0vh" }}>
            Let me introduce myself &#8608;
          </Card.Title>
          <br />
          <Card.Text>
            My name is Josey Dies, and I graduated from the Eleven Fifty Academy
            web development boot camp in December 2021. My path leading to this
            point has been diverse. I have a passion for the human mind, and I
            started my career practicing psychotherapy. Over the years, I became
            enlivened by the idea of using technology to solve challenges and
            bring new ideas to life.
            <br />
            <br />
            I'm so excited to continue learning, practicing, and creating in the
            realm of technology to improve human experience and produce quality
            results.
            <br />
            <br />
            When I'm not spending hours breaking code, I love listening to
            podcasts, going to social dances, and exploring the quirks and
            history of Indiana.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;
