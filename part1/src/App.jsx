/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react"

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const feedbackTypes = [
    'good', 'neutral', 'bad'
  ];

  const handleButton = (feedbackType) => {
    const newFeedback = { ...feedback };
    newFeedback[feedbackType] = feedback[feedbackType] + 1;
    setFeedback(newFeedback);
  }
  console.log("Feedback State", feedback);

  return (
    <div>
      <h1>Give feedback</h1>
      <div>
        {feedbackTypes.map((type, i) => <Button key={i} text={type} onSmash={() => handleButton(type)} />)}
      </div>
      <h2>Statistics</h2>
      <Statistics feedbackTypes={feedbackTypes} feedbacks={feedback} />
    </div>
  )
};

const Statistics = ({ feedbacks, feedbackTypes }) => {
  const { good, neutral, bad } = feedbacks;

  const sumFeedback = () => bad + good + neutral;
  const average = () => {
    const total = (good * 1) + (bad * -1);
    const sum = sumFeedback();
    return sum == 0 ? '0' : (total / sum)
  }
  const percentagePositive = () => {
    const total = good;
    const sum = sumFeedback();
    return (sum == 0 || total == 0 ? 0 : ((total / sum) * 100).toFixed(2)) + '%'
  }

  console.log(feedbackTypes);

  if ((good + neutral + bad) == 0) {
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <div>
      <table>
        <tbody>
          {feedbackTypes.map((type, i) => <Display key={i} text={type} counter={feedbacks[type]} />)}
          <Display text="All" counter={sumFeedback()} />
          <Display text="Average" counter={average()} />
          <Display text="Positive" counter={percentagePositive()} />
        </tbody>
      </table>
    </div>
  )
}

const Display = ({ text, counter }) => (<tr><td>{text}</td><td>{counter}</td></tr>)
const Button = ({ onSmash, text }) => (<button onClick={onSmash}>{text}</button>)
export default App;