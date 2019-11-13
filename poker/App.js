// Render the cards using React!
const App = (props) => {
    let { cards } = props;
    console.log("App component props:", props)
    let renderCard = props.cards.map(Card)
    return (
        renderCard
    )
}



// CHALLENGE: Write a separate Card component for use in the App component
// TIP: Use props to pass the suit and number to each Card component
const Card = (props) => {
    let cardValue = "cards/"+props.value+props.suit+".png"
    console.log(props, "From the card component")
    const style = {
        width: '75px',
        height: '100px',
    }
    return (
        <div><img style = {style} src={cardValue}></img></div>
    )
};  