// Render the circles using React!
const App = (props) => {
    // let { circles } = props;
    // console.log('App component props:', props)

    const AllCircles = props.circles.map(Circle)

    return (
        <span>{AllCircles}</span>
    )
}

const Circle = (props) => {
    console.log("Circle component props:", props)

    const style = {
        margin: 'auto',
        background: props.color, 
        borderRadius: '100%',
        width: (props.radius * 2) + 'px', 
        height: (props.radius * 2) + 'px'
    }

    return (
      <div style={style}></div>
    )
}