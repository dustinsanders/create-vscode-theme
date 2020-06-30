import { makeStyles } from '@material-ui/core/styles'
import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect, useState } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import DownloadZip from '../components/DownloadZip'
import Meta from '../components/Meta'
import Primary from '../components/Primary'
import Secondary from '../components/Secondary'
import Theme from '../components/Theme'

const appBarHeight = 64

const useStyles = makeStyles({
  root: {
    display: 'flex',
    position: 'absolute',
    top: appBarHeight,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
  },
  tabsContainer: {
    marginRight: 8,
  },
  tab: {
    padding: '16px 32px',
  },
  contentContainer: {
    flex: 1,
    padding: 36,
    overflowY: 'scroll',
    height: '100%',
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 64,
  },
})

const tabs =[
  {
    title: 'Edit Primary Colors',
    Content: Primary,
  },
  {
    title: 'Edit Secondary Colors',
    Content: Secondary,
  },
  {
    title: 'View Theme JSON',
    Content: Theme,
  },
  {
    title: 'View Meta JSON',
    Content: Meta,
  },
  {
    title: 'Download Project Zip',
    Content: DownloadZip,
  }
]

const Index = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(3)
  const { isInitialized } = useStoreState(state => state.palette)
  const { fetchTheme } = useStoreActions(store => store.palette)

  useEffect(() => {
    fetchTheme()
  }, [])

  if (!isInitialized) {
    return (
      <div className={classes.loaderContainer}>
        <CircularProgress />
      </div>
    )
  }

  const { Content } = tabs[activeStep]

  return (
    <Container className={classes.root}>
      <Paper elevation={3} className={classes.tabsContainer}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={activeStep}
        >
          {
            tabs.map((entry, idx) => (
              <Tab
                key={entry.title}
                className={classes.tab}
                label={entry.title}
                onClick={() => setActiveStep(idx)}
              />
            ))
          }
        </Tabs>
      </Paper>
      <Paper className={classes.contentContainer} elevation={3}>
        <Content />
      </Paper>
    </Container>
  )
}

export default Index
