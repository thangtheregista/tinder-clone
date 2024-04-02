import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer";

function Dashboard() {
  const characters = [
    {
      name: "Richard Hendricks",
      url: "https://images.pexels.com/photos/4123018/pexels-photo-4123018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Erlich Bachman",
      url: "https://images.pexels.com/photos/4123018/pexels-photo-4123018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Monica Hall",
      url: "https://images.pexels.com/photos/4123018/pexels-photo-4123018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Jared Dunn",
      url: "https://images.pexels.com/photos/4123018/pexels-photo-4123018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://images.pexels.com/photos/4123018/pexels-photo-4123018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  console.log(lastDirection);
  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}
          <div className="swipe-info">
            {lastDirection ? <p>You swipe {lastDirection}</p> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
