const App = () =>{
    return (
        <div>
        <FirstComponent/>
        <NamedComponent name="Jack"/>
        </div>
    )
    
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)