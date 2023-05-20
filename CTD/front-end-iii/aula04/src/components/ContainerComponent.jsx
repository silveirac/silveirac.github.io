function ContainerComponent(props) {
    return (
        <div  style={{
            backgroundColor: "teal",
            padding: "20px"
        }}    
        >
            <h3>Este é um container</h3>
            {props.children}
        </div>
    )
}

export default ContainerComponent;