function App(){
    return(
        <div>
            <Tweet 
            username="BigBob200"
            name="Robert"
            message="I like to play fetch with my dog"
            date="12/19/23"/>

            <Tweet 
            username="SkinnyMalone"
            name="Mr.Malone"
            message="Money Money Money"
            date="10/15/04"/>

            <Tweet 
            username="DeadMeat"
            name="James Janisse"
            message="Currectly watching Jason X"
            date="12/19/23"/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)