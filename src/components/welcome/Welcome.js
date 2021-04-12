import React, {useState} from 'react'
import {Button} from '../button/Button'
import logo from "../../img/welcome.png";
import './Welcome.css'

function Welcome() {
    const [button, setButton] = useState(true)


    return (
        <div className="welcome-container">
            <img src={logo} className="welcome-img" alt="logo" />
            <div className='description'>
                <h1>Louise Loisel</h1>
                <p>Welcome to my personal portfolio, here I want to display my
personal projects.</p> <p>Work in progress ;)</p>
                {button && <Button buttonStyle='btn--primary'>CONTACT ME</Button>}
            </div>
        </div>
    )
}

export default Welcome
