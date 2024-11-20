import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  togglePower,
  toggleBank,
  displayNames,
  adjustVolume,
} from "./actions/Actions";

function Controller() {
  const power = useSelector((state) => state.power);
  const name = useSelector((state) => state.name);
  const bank = useSelector((state) => state.bank);
  const volume = useSelector((state) => state.volume);
  const dispatch = useDispatch();
  const toggleButtonPower = (event) => {
    dispatch(togglePower());
    dispatch(displayNames(""));
    event.target.blur();
  };
  const toggleButtonBank = (event) => {
    if (power === true) {
      dispatch(toggleBank());
      event.target.blur();
    }
  };
  const displayVolume = (event) => {
    dispatch(adjustVolume(event.target.value));
    const volume = Math.round(event.target.value * 100);
    dispatch(displayNames(`Volume: ${volume}%`));
  };
  useEffect(() => {
    dispatch(displayNames(bank ? "Smooth Piano Kit" : "Heater Kit"));
  }, [bank]);
  return (
    <div className="container" style={{ height: "295px" }}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-4 text-center">
          <p className="mb-0 mt-4 p-0 fw-bolder">Power</p>
          <div
            className={`bg-dark border border-dark m-auto mb-4 border-4 d-flex align-items-center justify-content-${
              power ? "end" : "start"
            }`}
            style={{ height: "25px", width: "50px" }}
          >
            <button
              className="container bg-primary p-0 m-0"
              style={{ height: "19px", width: "23px" }}
              onClick={toggleButtonPower}
            ></button>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          className="d-flex fw-bolder fs-5 justify-content-center m-auto mb-4 align-items-center bg-secondary"
          style={{ height: "50px", width: "220px" }}
        >
          {name}
        </div>
      </div>
      <div className="row d-flex justify-content-evenly align-items-center">
        <div className="col-1 p-0 d-flex justify-content-end">
          <i class="bi bi-volume-down-fill"></i>
        </div>
        <div className="col-9 p-0 d-flex align-items-center">
          <input
            type="range"
            class="form-range"
            id="customRange1"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={displayVolume}
            disabled={!power}
          ></input>
        </div>
        <div className="col-1 p-0 d-flex justify-content-center">
          <i class="bi bi-volume-up-fill"></i>
        </div>
      </div>
      <div className="row">
        <div className="col-4 m-auto mt-3">
          <p className="text-center mb-0 fw-bolder">Bank</p>
          <div
            className={`bg-dark border border-dark m-auto border-4 d-flex align-items-center justify-content-${
              bank ? "end" : "start"
            }`}
            style={{ height: "25px", width: "50px" }}
          >
            <button
              className="container bg-primary p-0 m-0"
              style={{ height: "19px", width: "23px" }}
              onClick={toggleButtonBank}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Controller;
