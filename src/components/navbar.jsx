import React from 'react';

export default class Navbar extends React.Component{
    render(){
        return(
            <header>
                <div className="logo">
                    <h2 className="firsttext">Irshad's<span className="lasttext">Portfolio</span></h2>
                </div>
                <div className="nav-links">
                    <nav>
                        <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Resume</a></li>
                        <li><a href="/">Portfolio</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}