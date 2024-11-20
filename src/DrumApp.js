import React from "react";
import Keyboard from "./Keyboard";
import Controller from "./Controller";
import { useSelector } from "react-redux";

function DrumApp() {
  return (
    <div className="container-fluid vh-100 bg-secondary d-flex justify-content-center align-items-center">
      <div
        className="container border border-warning border-5"
        style={{
          backgroundColor: "#9BA5A5",
          width: "680px",
          height: "350px",
        }}
      >
        <div className="row d-flex justify-content-end align-items-center">
          <div className="col-3 d-flex flex-wrap align-items-center gap-2">
            <p className="text-dark fw-bolder fst-italic p-0 m-0">
              DRUM PLAYER
            </p>
            <i class="fa-brands fa-free-code-camp mt-1"></i>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly align-items-center">
          <div className="col-7">
            <Keyboard />
          </div>
          <div className="col-5">
            <Controller/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrumApp;
