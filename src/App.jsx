import { useEffect, useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import { moneyItems, data } from "./components/Data";
import Timer from "./components/Timer";
import Menu from "./components/Menu";

function App() {

  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyItems.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber]);

  return (
    <div className="app">
      {!username ? (
        <Menu setUsername={setUsername} setStop={setStop} />
      ) : (
        <>
          <div className="main">
              {stop ? (<h1 className="endScreen">You Earned: {earned}</h1>) : (
                <>
                  <div className="top">
                    <div className="timer">
                      <Timer setStop={setStop} questionNumber={questionNumber} answered={answered} />
                    </div>
                  </div>
                  <div className="bottom">
                    <Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} setAnswered={setAnswered} />
                  </div>
                </>
              )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              <div className="userInfo">
                <span className="usernameDisplay">Contestant Name: {username}</span>
                <span className="earnedDisplay">Total Earned: {earned}</span>
              </div>
              {moneyItems.map(m => (
                <li key={m.id} className={questionNumber === m.id ? "moneyItem active" : "moneyItem"}>
                  <span className="moneyQuestionNumber">{m.id}</span>
                  <span className="moneyAmount">{m.amount}</span>
                </li>
              ))}
              <span className="optionButtons">
                <button className="quitButton" onClick={() => setStop(true)}>Forefit</button>
                <button className="exitButton" onClick={() => {
                  setUsername(null);
                  setQuestionNumber(1);
                  setEarned("$ 0");
                  setStop(false);
                  setAnswered(false);
                }}>Main Menu</button>
              </span>
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
