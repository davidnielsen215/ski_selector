import React, { Component } from 'react'
import {    MuiThemeProvider, RadioGroup, CardContent, 
            AppBar, Radio, FormControlLabel, FormControl, 
            Card } from '@material-ui/core'
import EntireLogo from '../images/sport_systems.png'
import '../LandingPage.css'
import { Spring } from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'

export default class SkillLevel extends Component {
    state = {
        alertDisplay: 'none',
        percentage: 0
    }

    continue = e => {
        e.preventDefault()
        const { values } = this.props
        if(values.skillLevel === ''){
            this.setState({
                alertDisplay: ''
            })
        } 
        else {
            this.props.nextStep()
            // this.props.internetLoss()
        }
    }

    getStep = (x) => {
        let returnedStep = x - 1
        return returnedStep
    }

    progressStep = () => {
        if (this.state.percentage !== 100){
            this.setState({ percentage: 25 })
        }
    }

    render() {
        const { values, handleChange } = this.props 
        return (
            
            <div className="background">
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar position='static' style={{backgroundColor: 'black' }}>
                            <div>
                            <img className='entirelogo' src={EntireLogo} alt=""/>
                            </div>
                        </AppBar>
                        <br/>
                        <br/>
                        <Spring 
                            from={{  opacity: 0}}
                            to={{  opacity: 1}}>
                            { props => (
                        <div style={props}>
                            <Card className='card'>
                                <CardContent>
                                <h4 className='step'>Step {this.getStep(values.step)} of 4</h4>
                                    
                                <ProgressBar percentage={this.state.percentage} />
                                        <br/>
                                        <br/>
                                    <div style={{background: 'black', borderRadius: '10px', height: '10%'}}>
                                        <h3 style={{ color: 'white', padding: '8px', fontSize: '150%'}}>Select Skill Level</h3>
                                        </div>
                                        <br/>
                                    <FormControl margin="dense">
                                        <RadioGroup onChange={handleChange('skillLevel')} defaultValue={values.storeType}>
                                            <FormControlLabel  onClick={this.progressStep} value="Beginner" control={<Radio color="primary" />} label={<p style={styles.form}>Beginner</p>}/>
                                            <FormControlLabel onClick={this.progressStep} value="Intermediate" control={<Radio color="primary"/>} label={<p style={styles.form}>Intermediate</p>} />
                                            <FormControlLabel onClick={this.progressStep} value="Advanced" control={<Radio color="primary"/>} label={<p style={styles.form}>Advanced</p>}/>
                                            <FormControlLabel onClick={this.progressStep} value="Expert" control={<Radio color="primary"/>} label={<p style={styles.form}>Expert</p>}/>
                                        </RadioGroup>
                                    </FormControl>
                                    <br/>
                                <button 
                                    className='continueButton'
                                    onClick={this.continue}>continue
                                </button>
                                <div style={{display: `${this.state.alertDisplay}`}}>
                                <Alert severity='error'><AlertTitle><p className='alert'>Please select an option</p></AlertTitle></Alert>
                                </div>
                                </CardContent>
                            </Card>
                            <br/>
                            
                        </div>
                        )}
                        </Spring>
                        

                    </React.Fragment>
                </MuiThemeProvider>
                <br/>
                
            </div>
        )
    }
}
const styles= {
    form: {
        fontSize: '2.3vh',
        padding: '10px'
    }
}

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
          <Filler percentage={props.percentage} />
        </div>
      )
  }
  
  const Filler = (props) => {
    return <div className="filler" style={{ width: `${props.percentage}%` }} />
  }





