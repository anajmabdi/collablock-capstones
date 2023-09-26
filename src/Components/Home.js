import { useNavigate } from 'react-router-dom';
import React from "react";


function Home(){
    const navigate = useNavigate();

    return (
        <>
            <button className = "button" onClick={() => { navigate('/canvas') }}>Start drawing</button>
        </>
    );
}

export default Home;