// Render the tweets using React!
const App = ({tweets}) => {
    const Tweets = tweets.map(Tweet)
    return (
        <span>{Tweets}</span>
    )
}

const Tweet = (props) => {
    let { text } = props
    return <div>
            <h2><User handle={props.user.handle} username={props.user.username} pic={props.user.profilePic}/></h2>
            <h4>{text}</h4>
            <h6>
                <Metrics 
                    likes={props.likes}
                    retweets={props.retweets}
                    replies={props.replies} 
                />
            </h6>
            </div>
};  // CHALLENGE: Write a separate Tweet component for use in the App component

const User = ({handle, username, pic}) => {
    // console.log("From the user component:", user)
    // let handle = user.handle
    // let userName = user.username
    // let pic = user.profilePic

    return <div>
            <h5>{handle}</h5>
            <h5>{username}</h5>
            <img style={{width:"20px"}}src={pic}/>
            </div>
};  // CHALLENGE: Write a separate User component for use in the Tweet component

const Metrics = ({likes, retweets, replies}) => {
    return <div>
            <h6>{likes}</h6>
            <h6>{retweets}</h6>
            <h6>{replies}</h6>
           </div>
};  // CHALLENGE: Write a separate Metrics component for use in the Tweet component (likes, retweets, replies)

// BONUS CHALLENGE - Delete your Tweet component code and rewrite the App component so that it uses User and Metrics directly