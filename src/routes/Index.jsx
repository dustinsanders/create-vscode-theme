import { useStoreState } from 'easy-peasy'
import React, { useMemo } from 'react'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import { makeStyles } from '@material-ui/core/styles'
import Forward from '@material-ui/icons/Forward'
import PickColor from '../components/PickColor'
import ViewColor from '../components/ViewColor'
import reduceGeneratedTheme from '../helpers/reduceGeneratedTheme'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  colorContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
})

const Index = () => {
  const classes = useStyles()
  const upload = useStoreState(state => state.upload)
  const theme = useMemo(
    () => reduceGeneratedTheme(upload.payload),
    [upload.payload],
  )

  return (
    <Container className={classes.root}>
      <Paper elevation={3}>
        {
          theme.map(color =>
            <div key={color.hex} className={classes.colorContainer}>
              <ViewColor {...color} />
              <Forward style={{ color: 'lightgrey' }} />
              <PickColor {...color} />
            </div>,
          )
        }
      </Paper>
    </Container>
  )
}

export default Index
