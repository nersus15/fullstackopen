const Total = (props) => {
    const excercises = props.excercises;
    let total = 0;
    excercises.forEach(excercise => {
        total += excercise.count;
    });
    return <p>Number of exercises {total}</p>
}
export default Total;