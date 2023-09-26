import {useState, useEffect } from "react";

const URL = `https://random-word-form.repl.co/random/noun`;

const RandomWord = () => {
    const [noun, setNoun] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL);
                const data = await response.json();
                console.log(data);
                setNoun(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

return(
    <h1>
        {noun}
    </h1>
)
}

export default RandomWord