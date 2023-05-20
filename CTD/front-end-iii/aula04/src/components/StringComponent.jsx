function StringComponent(props) {
    return (
        <>
            <h1 style={{
                backgroundColor: "black"
            }}
            >Hello {props.name}!</h1>
        </>
    )
}

export default StringComponent;