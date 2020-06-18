import { makeStyles } from '@material-ui/core/styles'
import React, { useState } from 'react'
import AppBar from '../components/AppBar'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Stepper from '@material-ui/core/Stepper'
import Palette from '../components/Palette'
import Secondary from '../components/Secondary'
import Theme from '../components/Theme'

const appBarHeight = 64

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: appBarHeight,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    overflowY: 'scroll',
    height: '100%',
  },
})

const steps =[
  {
    title: 'Primary',
    Content: Palette,
  },
  {
    title: 'Secondary',
    Content: Secondary,
  },
  {
    title: 'View Theme',
    Content: Theme,
  }
]

const Index = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const { Content } = steps[activeStep]

  return (
    <>
      <AppBar />
      <CssBaseline />
      <Container className={classes.root}>
        <Paper elevation={3}>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((step, idx) => (
              <Step key={step.title}>
                <StepButton onClick={() => setActiveStep(idx)} completed={false}>
                  {step.title}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Paper>
        <br />
        <Paper className={classes.contentContainer} elevation={3}>
          <Content />
        </Paper>
      </Container>
    </>
  )
}

export default Index
