const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: "Fundamentals of React",
      excercises: 10
    },
    {
      name: "Using props to pass data",
      excercises: 7
    },
    {
      name: "State of a component",
      excercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
      <Total parts={parts} />
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