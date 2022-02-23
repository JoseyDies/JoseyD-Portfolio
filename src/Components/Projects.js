import React from "react";
import { Accordion, Card } from "react-bootstrap";
import image5 from "../Images/MoodMuse.JPG";
import image6 from "../Images/NASAapi.JPG";
import image7 from "../Images/JokeGenerator.JPG";
import image8 from "../Images/LincLani.JPG";
import image9 from "../Images/cornbackground.jpg";

export const Projects = () => {
  return (
    <div
      style={{
        paddingTop: "6%",
        paddingBottom: "11%",
        backgroundImage: `url(${image9})`,
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
        My Projects
      </h1>
      <Accordion
        style={{ paddingTop: "3%", paddingLeft: "22%", paddingRight: "22%" }}
      >
        <Accordion.Item eventKey="0">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-center">
                <img
                  src={image5}
                  className="img-fluid"
                  alt="Responsive"
                  style={{
                    width: "50%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                  }}
                />
              </div>
            </Card.Header>
            <Card.Body
              style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.3rem" }}
            >
              The purpose of this app is to help users track their mood and
              mental health goals. It's made with PostgreSQL, Express, React,
              and Node.js. Use of user authentication and authorization. Create,
              Read, Update, and Delete capabilities. Deployed with Heroku.{" "}
              <a
                href="https://jld-mood-client.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                Take a look!
              </a>
            </Card.Body>
          </Card>
        </Accordion.Item>

        <br />
        <Accordion.Item eventKey="1">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-center">
                <img
                  src={image6}
                  className="img-fluid"
                  alt="Responsive"
                  style={{
                    width: "55%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                  }}
                />
              </div>
            </Card.Header>
            <Card.Body
              style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.3rem" }}
            >
              An app using a NASA API. Users can input a date all the way back
              to 1995 to view the Astronomy Picture of the Day. Deployed using
              Firebase.{" "}
              <a
                href="https://jld-api-2.web.app/"
                target="_blank"
                rel="noreferrer"
              >
                Take a look!
              </a>
            </Card.Body>
          </Card>
        </Accordion.Item>
        <br />
        <Accordion.Item eventKey="3">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-center">
                <img
                  src={image8}
                  className="img-fluid"
                  alt="Responsive"
                  style={{
                    width: "60%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                  }}
                />
              </div>
            </Card.Header>
            <Card.Body
              style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.3rem" }}
            >
              A static recreation of an artist's web page. Click on the logo to
              see the original webpage it is modeled after. Deployed using
              GitHub.{" "}
              <a
                href="https://joseydies.github.io/staticLayout/"
                target="_blank"
                rel="noreferrer"
              >
                Take a look!
              </a>
            </Card.Body>
          </Card>
        </Accordion.Item>
        <br />
        <Accordion.Item eventKey="4">
          <Card>
            <Card.Header>
              <div className="d-flex justify-content-center">
                <img
                  src={image7}
                  className="img-fluid"
                  alt="Responsive"
                  style={{
                    width: "50%",
                    paddingTop: "1%",
                    paddingBottom: "1%",
                  }}
                />
              </div>
            </Card.Header>
            <Card.Body
              style={{ fontFamily: "Oswald, sans-serif", fontSize: "1.3rem" }}
            >
              A simple app fetching an API to create a nerdy joke generator.{" "}
              <a
                href="https://joseydies.github.io/programmingJokeGenerator/"
                target="_blank"
                rel="noreferrer"
              >
                Take a look!
              </a>
            </Card.Body>
          </Card>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};
export default Projects;
