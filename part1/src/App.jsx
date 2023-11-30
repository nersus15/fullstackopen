const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: "Fundamentals of React",
    excercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    excercises: 7
  };
  const part3 = {
    name: "State of a component",
    excercises: 14
  }
  return (
    <div>
      <Header course={course} />
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
      <Total parts={[part1, part2, part3]} />
    </div>
  )
}

const Part = (props) => {
  const name = props.part.name;
  const excercises = props.part.excercises;
  return (
    <p>{name} {excercises}</p>
  )
}
const Content = (props) => {
  const parts = props.parts;
  const elements = [];
  parts.forEach(part => {
      elements.push(<p>
          {part.name} {part.excercises}
      </p>);
  })
  return (
      <>
          {elements}
      </>
  );
}

const Total = (props) => {
  const parts = props.parts;
  let total = 0;
  parts.forEach(part => {
      total += part.excercises;
  });
  return <p>Number of exercises {total}</p>
}
const Header = (props) => {
  return (
      <h1>{props.course}</h1>        
  )
}

export default App