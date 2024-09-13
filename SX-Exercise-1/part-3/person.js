function Person({name, age, hobbies}){
    let addition;
    let newName;
    if(name.length > 8) newName = name.slice(0, 6); 
    else newName = name;
    if(age >= 18) addition = <h3>please go vote?</h3>
    else addition = <h3>you must be 18</h3>

    return(
        <div>
            <h1>{newName}</h1>
            <p>Learn some informaion about this person</p>
            {addition}
            <ul>
                {hobbies.map(hobbie => <li>{hobbie}</li>)}
            </ul>
        </div>
    )
}