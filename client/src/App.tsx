import { useState, useEffect } from "react";

export const App = () => {
    const [data, setData] = useState([{}])
    useEffect(() => {
        fetch("/test")
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    },[])
    return (
        <div className="App">
        <header className="App-header">
                <h1>
                    Teste
                </h1>
                {/* {(!data) ? (
                    <p>Loading...</p>
                ) : (
                    data.teste.map((test, i) => (
                        <p key={i}>{test}</p>
                    ))
                )} */}
        </header>
        </div>
    );
}
