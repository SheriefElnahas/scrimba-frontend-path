function Section(props) {
    return (
        <div style={{padding: '5px 0'}}>
                <h2>{props.title}</h2>
                <p>{props.text}</p>
        </div>
    )
}

export default Section;