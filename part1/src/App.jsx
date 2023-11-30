import Content from "./components/Content"
import Header from "./components/Header"
import Total from "./components/Total"

const App = () => {
  const course = 'Half Stack application development'
  const excercises = [
    {
      part: "Fundamentals of React",
      count: 10
    },
    {
      part: "Using props to pass data",
      count: 7
    },
    {
      part: "State of a component",
      count: 14
    }
  ]
  return (
    <div>
      <Header course={course} />
      <Part excercise={excercises[0]} />
      <Part excercise={excercises[1]} />
      <Part excercise={excercises[2]} />
      <Total excercises={excercises} />
    </div>
  )
}

const Part = (props) => {
  const part = props.excercise.part;
  const count = props.excercise.count;
  return (
    <p>{part} {count}</p>
  )
}

export default App