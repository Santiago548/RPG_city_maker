import React from 'react'
import { NavLink } from 'react-router-dom';

const link = {
    width: '100%',
    padding: '10px',
    background: 'white',
    textDecoration: 'none',
    color: 'black'
}

export const Navigation = () => {
    return (
        <div className='navLink'>
            <NavLink
                to='/'
                exact
                style={link}
                activeStyle={{
                    background: "#191d32",
                    color: 'white'
                }}>Home</NavLink>

                <NavLink
                    to='/'
                    exact
                    style={link}
                    activeStyle={{
                        background: "#191d32",
                        color: 'white'
                    }}>About</NavLink>

            
        </div>
    )
}
