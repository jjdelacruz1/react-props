// Render the rectangle using React!
const App = (props) => {
    let { rectangle } = props;
    console.log(props)
    const style = {
        height: rectangle.height,
        background: rectangle.color,
        width: rectangle.width
    }
    return (
        <div style={style}></div>
    )
}
