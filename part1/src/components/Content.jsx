const Content = (props) => {
    const excercises = props.excercises;
    const elements = [];
    excercises.forEach(excercise => {
        elements.push(<p>
            {excercise.part} {excercise.count}
        </p>);
    })
    return (
        <>
            {elements}
        </>
    );
}

export default Content;