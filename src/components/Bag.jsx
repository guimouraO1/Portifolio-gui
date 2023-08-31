function Bag(props) {
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0",
        color: "tomato",
        fontSize: "40px"
     
    }
    return (
        <div style={bag}>
            {props.children}
        </div>
    )
}
export default Bag