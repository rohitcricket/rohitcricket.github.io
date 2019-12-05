import React, { Fragment } from "react"
import { Styled } from "theme-ui"
import Container from "../components/container"

export default () => (
  <Fragment>
    <div style={{textAlign: "center"}}>
      <h1>My Portfolio</h1>
    </div>
    <Container>
      <p>
      <h2>Classify Fashion Items</h2>
      <img src="https://source.unsplash.com/500x400?fashion" alt="fashion" />
      <br />
      <a href="https://github.com/rohitcricket/TensorFlow2.0-FashionClassification">link</a>
      </p>
      <br />
      <br />
      <p>
      <h2>Detect Traffic Signs</h2>
      <img src="https://source.unsplash.com/500x400?trafficsigns" alt="fashion" />
      <br />
      <a href="https://github.com/rohitcricket/TensorFlow2.0-DetectTrafficSigns">link</a>
      </p>
      <br />
      <p>
      <h2>Art with AI</h2>
      <img src="https://source.unsplash.com/500x400?art" alt="Art" />
      <br />
      <a href="https://github.com/rohitcricket/TensorFlow2.0-DreamDeepArtWithAI">link</a>
      </p>
      <br />
      <p>
      <h2>Detect Diabetes with AI</h2>
      <img src="https://source.unsplash.com/500x400?diabetes" alt="diabetes" />
      <br />
      <a href="https://github.com/rohitcricket/TensorFlow2.0-DetectDiabetes">link</a>
      </p>
      <br />
      <p>
      <h2>Detect Traffic Signs using TensorFlow 2.0</h2>
      <img src="https://source.unsplash.com/500x400?trafficsigns" alt="fashion" />
      <br />
      <a href="https://github.com/rohitcricket/TensorFlow2.0-DetectTrafficSigns">link</a>
      </p>
    </Container>
  </Fragment>
)