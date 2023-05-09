import "./Question.css";
import { useState } from "react";
import styled, { keyframes } from "styled-components";

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);
  const [changeName, setChangeName] = useState("Otevřít");
  const scaleAnimationIn = keyframes`
  0% {
    transform: scale(0, 1);
    animation-timing-function: ease-out;
    opacity:0;
  }
  100% {
    transform: scale(1, 1);
    opacity:1;
  }
`;

  const QuestionHeaderPausedText = styled.p`
    animation: ${scaleAnimationIn} .3s;
    animation-delay: s;
    animation-fill-mode: both;
  `;

  const changeName1 = () => {
    if (changeName === "Otevřít") {
      setChangeName("Zavřít");
    } else {
      setChangeName("Otevřít");
    }
  };

  return (
    <div className="one-question">
      <section>
        <h2>{title}</h2>
        <button
          onClick={() => {setShow(!show); changeName1()}}>
          {changeName}
        </button>
      </section>
      {show && <QuestionHeaderPausedText>{info}</QuestionHeaderPausedText>}
    </div>
  );
};

export default Question;
