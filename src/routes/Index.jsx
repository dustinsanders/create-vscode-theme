import { useStoreState } from 'easy-peasy'
import { makeStyles } from '@material-ui/core/styles'
import { copyToClipboard as oldCopyToClipboard } from '../old/createTheme'
import { copyToClipboard } from '../helpers/createTheme'
import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Step from '@material-ui/core/Step'
import StepButton from '@material-ui/core/StepButton'
import Stepper from '@material-ui/core/Stepper'
import Palette from '../components/Palette'
import Secondary from '../components/Secondary'
import ToolBar from '../components/Toolbar'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentContainer: {
    padding: 24,
  },
  toolbarContainer: {
    padding: 24,
    marginBottom: 16,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

const steps =[
  {
    title: 'Palette',
    component: Palette,
  },
  {
    title: 'Secondary',
    component: Secondary,
  },
  {
    title: 'Terminal',
    component: () => "Terminal",
  }
]

const Index = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(0)
  const palette = useStoreState(state => state.palette)
  const Content = steps[activeStep].component

  return (
    <Container className={classes.root}>
      <Paper elevation={3} className={classes.toolbarContainer}>
        <ToolBar />
        <Button color="primary" onClick={() => oldCopyToClipboard()}>
          Copy Theme
        </Button>
        <Button color="primary" onClick={() => copyToClipboard(palette)}>
          Copy Theme 2
        </Button>
      </Paper>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step, idx) => (
          <Step key={step.title}>
            <StepButton onClick={() => setActiveStep(idx)} completed={false}>
              {step.title}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <Paper className={classes.contentContainer} elevation={3}>
        <Content />
      </Paper>
    </Container>
  )
}

export default Index
