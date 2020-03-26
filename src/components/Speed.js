import React, { Component } from 'react'
import { MuiThemeProvider, RadioGroup, CardContent, Card, AppBar,
        FormControlLabel, FormControl, Radio, TextField } from '@material-ui/core'
import NumberFormat from 'react-number-format'
import EntireLogo from '../images/sport_systems.png'
import '../LandingPage.css'
import { Spring } from 'react-spring/renderprops'
import { Alert, AlertTitle } from '@material-ui/lab'


export default class Speed extends Component {
    state = {
        isDisabled: false,
        alertDisplay: 'none',
        textShow: 'none',
        percentage: 25
    }

    continue = e => {
        e.preventDefault()
        const { values } = this.props
        if(values.speed === ''){
            this.setState({
                alertDisplay: ''
            })
        } else {
            this.props.nextStep()
        }
    }

    back = e =>{
        e.preventDefault()
        this.props.prevStep()
    }

    getStep = (x) => {
        let returnedStep = x - 1
        return returnedStep
    }

    progressStep = () => {
        if (this.state.percentage !== 100){
            this.setState({ percentage: 50 })
        }
    }

    // setText = e =>{
    //     e.preventDefault()
    //     this.progressStep()
    //     this.setState({
    //         textShow: ''
    //     })
    // }

    //  NumberFormatCustom1(props) {
    //     const { inputRef, onChange, ...other } = props;
    //     // const {isDiabled} = this.state
    //     return (
    //       <NumberFormat
    //         {...other}
    //         getInputRef={inputRef}
    //         onValueChange={values => {
    //           onChange({
    //             target: {
    //               value: values.value,
    //             },
    //           });
    //         }}
    //         thousandSeparator
    //         isNumericString
    //         prefix="$"
    //       />
    //     );
    // }

    // handleChar = () =>{
    //     const {handleChange} = this.props
    //     if(handleChange('speed').length > 0){
    //         this.setState({
    //             isDisabled: true
    //         })
    //     }
    // }
    
    render() {
        const { values, handleChange } = this.props 
        const {isDisabled} = this.state
        
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
                    to={{  opacity: 1}}
                    >
                    { props => (
                    <div style={props}>
                        <Card className='card'>
                            <CardContent>
                            <h4 className='step'>Step {this.getStep(values.step)} of 4</h4>
                                    
                            <ProgressBar percentage={this.state.percentage} />
                                    <br/>
                                    <br/>
                                <div style={{background: 'black', borderRadius: '5px', height: '10%'}}>
                                    <h3 style={{ color: 'white', padding: '8px', fontSize: '150%'}}>How Fast Do You Ski ?</h3>
                                </div>
                                    <br/>
                                
                                <FormControl >
                                    <RadioGroup onChange={handleChange('speed')} defaultValue={values.annualSales}>
                                        <FormControlLabel value="Fast" onClick={this.progressStep}  control={<Radio color="primary"/>} label={<p style={styles.form}>Fast</p>}/>
                                        <FormControlLabel value="Moderate" onClick={this.progressStep}  control={<Radio color="primary"/>} label={<p style={styles.form}>Moderate</p>}/>
                                        <FormControlLabel value="Slow" onClick={this.progressStep}  control={<Radio color="primary"/>} label={<p style={styles.form}>Slow</p>}/>
                                        {/* <FormControlLabel value="1750000" onClick={this.progressStep}  control={<Radio color="primary"/>} label={<p style={styles.form}>$1.5M - $2M</p>}/> */}
                                        {/* <FormControlLabel value="2500000" onClick={this.progressStep}  control={<Radio color="primary"/>} label={<p style={styles.form}>$2M - $3M</p>}/> */}
                                        {/* <FormControlLabel value="4000000" onClick={this.progressStep}  control={<Radio color="primary"/>} label={<p style={styles.form}>$3M - $5M</p>}/> */}
                                        {/* <FormControlLabel value="7500000" onClick={this.progressStep}  control={<Radio color="primary"/>} label={<p style={styles.form}>$5M - $10M</p>}/> */}
                                        {/* <FormControlLabel  onClick={this.setText} disabled={isDisabled} control={<Radio color="primary"/>} label={<p style={styles.form}>Other</p>}/> */}
                                    </RadioGroup>
                                </FormControl>
                                    <br/>
                                <div style={{ display: `${this.state.textShow}`}}>
                                {/* <TextField
                                    label="$ (Numbers Only)"
                                    className='other'
                                    onChange={handleChange('annualSales')}
                                    // id="formatted-numberformat-input"
                                    InputProps={{
                                        inputComponent: this.NumberFormatCustom1
                                    }}
                                /> */}
                                </div>
                                    <br/>
                                <button 
                                    className='previousButton'
                                    onClick={this.back}
                                >   previous
                                </button>
                                <button 
                                    className='continueButton'
                                    onClick={this.continue}
                                >   continue
                                </button>
                                <div style={{display: `${this.state.alertDisplay}`}}>
                                <Alert severity='error'><AlertTitle><p className='alert'>Please select an option</p></AlertTitle></Alert>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                        )}
                </Spring>
                </React.Fragment>
            </MuiThemeProvider>

            </div>
        )
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

  const styles= {
    form: {
        fontSize: '2.3vh',
        padding: '10px'
    }
}



