function Tweet(props){
    return(
        <div class="tweet">
            <h1>Tweeted by @{props.username} aka {props.name}</h1>
            <p>{props.message}</p>
            <h5>Tweeted on {props.date}</h5>
        </div>
    )
}