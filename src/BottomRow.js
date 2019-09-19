import React from "react";
import "./App.css";

const BottomRow = () => {

  const [qtr, nextQtr] = React.useState(1);
  const [dwn, nextDwn] = React.useState(1);
  const [yds, setYds] = React.useState(10);
  const [place, setPlace] = React.useState(25);

  return (
      <div className="bottomRow">
        <div className="down">
          <h3 className="down__title">Down</h3>
          <div className="down__value">{dwn}</div>
          <button className="dwnButton__button" onClick={
            () => {
              nextDwn(dwn + 1);
            }
          }>Down</button>
          <button className="reset" onClick = {
            ()=>{
              nextDwn(1);
            }
          }>Reset</button>
        </div>
        <div className="toGo">
          <h3 className="toGo__title">To Go</h3>
          <div className="toGo__value">{yds}</div>
          <button className="toGoButton__button" onClick = {
            ()=> {
             setYds(yds + 1);
            }
          }>+ Yds</button>
          <button className="toGoButton__button" onClick = {
            ()=> {
             setYds(yds - 1);
            }
          }>- Yds</button>
          <button className="reset" onClick = {
            ()=>{
              setYds(10);
            }
          }>Reset</button>
        </div>
        <div className="ballOn">
          <h3 className="ballOn__title">Ball on</h3>
          <div className="ballOn__value">{place}</div>
          
          <button className="toGoButton__button" onClick = {
            ()=> {
              setPlace(place + 1);
            }
          }>+ Yds</button>
          <button className="toGoButton__button" onClick = {
            ()=> {
              setPlace(place - 1);
            }
          }>- Yds</button>
          <button className="reset" onClick = {
            ()=>{
              setPlace(25);
            }
          }>Reset</button>
        </div>
        <div className="quarter">
          <h3 className="quarter__title">Quarter</h3>
          <div className="quarter__value">{qtr}</div>
          <button className="qtrButton__button" onClick={
            () => {
              nextQtr(qtr + 1);
            }
          }>Next Qtr</button>
          <button className="reset" onClick = {
            ()=>{
              nextQtr(1);
            }
          }>Reset</button>
        </div>
          
      </div>
  );
};

export default BottomRow;
