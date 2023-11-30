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
      <Content excercises={excercises} />
      <Total excercises={excercises} />
    </div>
  )
}

export default App