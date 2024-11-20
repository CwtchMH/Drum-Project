import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { displayNames } from "./actions/Actions";
import { useEffect } from "react";

function Keyboard() {
  const power = useSelector((state) => state.power);
  const bank = useSelector((state) => state.bank);
  const volume = useSelector((state) => state.volume);
  const dispatch = useDispatch();
  const playDrum = (x) => {
    let audioDrum = "";
    let button;
    switch (x) {
      case "Q":
        button = document.getElementById("Q");
        if (power) {
          audioDrum = document.getElementsByClassName("clip")[0];
          dispatch(displayNames(bank ? "Chord 1" : "Heater 1"));
        } else {
          button.classList.add("active1");
          setTimeout(() => {
            button.classList.remove("active1");
            button.blur();
          }, 100);
          dispatch(displayNames(""));
        }
        break;
      case "W":
        button = document.getElementById("W");
        if (power) {
          audioDrum = document.getElementsByClassName("clip")[1];
          dispatch(displayNames(bank ? "Chord 2" : "Heater 2"));
        } else {
          button.classList.add("active1");
          setTimeout(() => {
            button.classList.remove("active1");
            button.blur();
          }, 100);
          dispatch(displayNames(""));
        }
        break;
      case "E":
        button = document.getElementById("E");
        if (power) {
          audioDrum = document.getElementsByClassName("clip")[2];
          dispatch(displayNames(bank ? "Chord 3" : "Heater 3"));
        } else {
          button.classList.add("active1");
          setTimeout(() => {
            button.classList.remove("active1");
            button.blur();
          }, 100);
          dispatch(displayNames(""));
        }
        break;
      case "A":
        button = document.getElementById("A");
        if (power) {
          audioDrum = document.getElementsByClassName("clip")[3];
          dispatch(displayNames(bank ? "Shaker" : "Heater 4"));
        } else {
          button.classList.add("active1");
          setTimeout(() => {
            button.classList.remove("active1");
            button.blur();
          }, 100);
          dispatch(displayNames(""));
        }
        break;
      case "S":
        button = document.getElementById("S");
        if (power) {
          audioDrum = document.getElementsByClassName("clip")[4];
          dispatch(displayNames(bank ? "Open HH" : "Clap"));
        } else {
          button.classList.add("active1");
          setTimeout(() => {
            button.classList.remove("active1");
            button.blur();
          } ,100);
          dispatch(displayNames(""));
        }
        break;
      case "D":
        button = document.getElementById("D");
        if (power) {
          audioDrum = document.getElementsByClassName("clip")[5];
          dispatch(displayNames(bank ? "Closed HH" : "Open HH"));
        } else {
          button.classList.add("active1");
          setTimeout(() => {
            button.classList.remove("active1");
            button.blur();
          } ,100);
          dispatch(displayNames(""));
        }
        break;
      case "Z":
        button = document.getElementById("Z");
        if (power) {
          audioDrum = document.getElementsByClassName("clip")[6];
          dispatch(displayNames(bank ? "Punchy Kick" : "Kick n Hat"));
        } else {
          button.classList.add("active1");
          setTimeout(() => {
            button.classList.remove("active1");
            button.blur();
          } ,100);
          dispatch(displayNames(""));
        }
        break;
      case "X":
        button = document.getElementById("X");
        if (power) {
          audioDrum = document.getElementsByClassName("clip")[7];
          dispatch(displayNames(bank ? "Side Stick" : "Kick"));
        } else {
          button.classList.add("active1");
          setTimeout(() => {
            button.classList.remove("active1");
            button.blur();
          } ,100);
          dispatch(displayNames(""));
        }
        break;
      case "C":
        button = document.getElementById("C");
        if (power) {
          audioDrum = document.getElementsByClassName("clip")[8];
          dispatch(displayNames(bank ? "Snare" : "Closed HH"));
        }
        else {
          button.classList.add("active1");
          setTimeout(() => {
            button.classList.remove("active1");
            button.blur();
          } ,100);
          dispatch(displayNames(""));
        }
        break;
      default:
        break;
    }
    if (audioDrum) {
      audioDrum.volume = volume;
      audioDrum.play();
      button.classList.add("active");
      setTimeout(() => {
        button.classList.remove("active");
        button.blur();
      }, 100);
    }
  };
  const playAudio = (event) => {
    const x = event.target.id;
    playDrum(x);
  };

  useEffect(() => {
    console.log("hello");
    const handleKeyDown = (event) => {
      const keyName = event.key.toUpperCase();
      playDrum(keyName);
    }
  
    document.addEventListener('keydown', handleKeyDown);
  
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [power]);

  return (
    <div
      className="container-fluid bg-transparent d-flex justify-content-center align-items-center flex-wrap column-gap-2"
      style={{ height: "295px" }}
    >
      <button
        className="btn btn-secondary custom-shadow text-dark fw-bolder"
        style={{
          height: "90px",
          width: "100px",
        }}
        id="Q"
        onClick={playAudio}
      >
        <audio
          className="clip"
          id="Q"
          src={bank ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}
        ></audio>
        Q
      </button>
      <button
        className="btn btn-secondary custom-shadow text-dark fw-bolder"
        style={{
          height: "90px",
          width: "100px",
        }}
        id="W"
        onClick={playAudio}
      >
        <audio
          className="clip"
          id="W"
          src={bank ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}
        ></audio>
        W
      </button>
      <button
        className="btn btn-secondary custom-shadow text-dark fw-bolder"
        style={{
          height: "90px",
          width: "100px",
        }}
        id="E"
        onClick={playAudio}
      >
        <audio
          className="clip"
          id="E"
          src={bank ? "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}
        ></audio>
        E
      </button>
      <button
        className="btn btn-secondary custom-shadow text-dark fw-bolder"
        style={{
          height: "90px",
          width: "100px",
        }}
        id="A"
        onClick={playAudio}
      >
        <audio
          className="clip"
          id="A"
          src={bank ? "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"}
        ></audio>
        A
      </button>
      <button
        className="btn btn-secondary custom-shadow text-dark fw-bolder"
        style={{
          height: "90px",
          width: "100px",
        }}
        id="S"
        onClick={playAudio}
      >
        <audio
          className="clip"
          id="S"
          src={bank ? "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"}
        ></audio>
        S
      </button>
      <button
        className="btn btn-secondary custom-shadow text-dark fw-bolder"
        style={{
          height: "90px",
          width: "100px",
        }}
        id="D"
        onClick={playAudio}
      >
        <audio
          className="clip"
          id="D"
          src={bank ? "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}
        ></audio>
        D
      </button>
      <button
        className="btn btn-secondary custom-shadow text-dark fw-bolder"
        style={{
          height: "90px",
          width: "100px",
        }}
        id="Z"
        onClick={playAudio}
      >
        <audio
          className="clip"
          id="Z"
          src={bank ? "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}
        ></audio>
        Z
      </button>
      <button
        className="btn btn-secondary custom-shadow text-dark fw-bolder"
        style={{
          height: "90px",
          width: "100px",
        }}
        id="X"
        onClick={playAudio}
      >
        <audio
          className="clip"
          id="X"
          src={bank ? "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}
        ></audio>
        X
      </button>
      <button
        className="btn btn-secondary custom-shadow text-dark fw-bolder"
        style={{
          height: "90px",
          width: "100px",
        }}
        id="C"
        onClick={playAudio}
      >
        <audio
          className="clip"
          id="C"
          src={bank ? "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}
        ></audio>
        C
      </button>
    </div>
  );
}

export default Keyboard;
