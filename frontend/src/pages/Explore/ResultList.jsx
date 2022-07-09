const ResultList = (props) => {
    const { instructors } = props;

    return (
        <div>
            {console.log('THIS IS A LIST')};
            {console.log(instructors)};
            {JSON.stringify(instructors)}
        </div>
    )

}

export default ResultList;