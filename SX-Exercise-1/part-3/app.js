function App(){
    return (
        <div>
            <Person 
            name="Jack"
            age="42"
            hobbies={["Golf", "Swimming", "Eating"]}/>

            <Person 
            name="Danny"
            age="21"
            hobbies={["Lifting", "Bulking", "Running"]}/>

            <Person
            name="Little Joe"
            age="13"
            hobbies={["Video Games", "Playing", "Watch TV"]}/>
        </div>
    )
}