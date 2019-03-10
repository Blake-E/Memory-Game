import React from 'react';

const Navbar = props=> {
    return(<div>
        <h1>Football Memory Game</h1>
        <ul className='right'>
            <li style={{paddingRight: "25px"}}>Current Score: {props.currentScore}</li>
		    <li style={{paddingLeft: "25px"}}>Top Score: {props.topScore}</li>
        </ul>
    </div>)
}

export default Navbar;