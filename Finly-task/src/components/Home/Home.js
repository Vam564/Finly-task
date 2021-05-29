import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import {  Button } from 'react-bootstrap'

const Home = () => {
    const {
        state: {
            sample_type
        },
        handleSampleType
    } = useContext(Context)

    const handleClick = () =>{
        handleSampleType("Emerging Framework")
    }
    return (
        <div>
            <h1 class="text-center">Hello React App ..!!</h1>
            <p>React JS : {sample_type}</p>
            <Button onClick={handleClick}>Click here</Button>
        </div>
    )
}

export default Home
