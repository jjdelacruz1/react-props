// Render the name tags using React!
const App = (props) => {
    // let { nameTags } = props;
    console.log('App component props:', props.nameTags)

    const AllNameTags = props.nameTags.map(NameTag)
    return (
        <span>{AllNameTags}</span>
    )
}

const NameTag = (props) => {
    console.log("Name tag props:", props)

    return <div className="text-center mt-5 wholeTag">
                <div className="nameTagTop">Hello, my name is:</div>
                <div className="nameTagBottom">{props}</div>  
           </div>
}
// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
// const NameTag = null;  