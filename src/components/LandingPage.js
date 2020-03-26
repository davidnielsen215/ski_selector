import React, { Component } from 'react'
// import { Button } from '@material-ui/core'
import '../LandingPage.css'
import Logo from '../images/sport_systems.png'
import EntireLogo from '../images/sport_systems.png'
import { Spring } from 'react-spring/renderprops'

export default class LandingPage extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        
        return (
                    <div className='maincont'>
                        {/* <div className='container1'>
                        <Spring 
                        from={{ opacity: 0}}
                        to={{ opacity: 1}}
                        config={{ duration: 1500}}
                        >
                        { props => (
                        <div style={props}> */}
                            {/* <div className='logo-container'> */}

                            {/* <img className='logo' src={Logo} alt=""/> */}
                            {/* </div> */}
                            {/* <img className='landinglogo' src={EntireLogo} alt=""/>
                            </div>
                            )}
                        </Spring>
                        </div> */}
                        <div className="container">

                        <Spring 
                        from={{ opacity: 0}}
                        to={{ opacity: 1}}
                        config={{ duration: 1700}}
                        >
                        { props => (
                        <div style={props}>
                            <h1 className='title'>SKI SELECTOR</h1>
                            
                            <h3 className='statement'><i>A Personalized Assesment To Find You The Best Equipment</i></h3>

                            <button onClick={this.continue}
                            className='button'>B E G I N</button>

                            </div>
                            )}
                        </Spring>
                        </div>
                    </div>
                
            
        )
    }
}


