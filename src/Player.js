import React from "react";
import scissors from "../src/assets/scissors.png"
import paper from "../src/assets/paper.png";
import rock from "../src/assets/rock.jpg";

const Player = ({ weapon }) => (
  <>
    <div className="player">
      <img
        className="player-image"
        src={
          weapon === "rock" ? rock : weapon === "scissors" ? scissors : paper
        }
        alt="Rock Paper Scissors"
      />
    </div>
  </>
);

export default Player;

