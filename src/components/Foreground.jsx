import { useStoreState } from 'easy-peasy'
import React, { useMemo } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Forward from '@material-ui/icons/Forward'
import PickColor from '../components/PickColor'
import ViewColor from '../components/ViewColor'
import parseTokenColors from '../helpers/parseTokenColors'
import reduceGeneratedTheme from '../helpers/reduceGeneratedTheme'
import semanticTokens from '../helpers/semanticTokens'

const useStyles = makeStyles({
  colorContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
})

const Foreground = () => {
  const classes = useStyles()
  const { payload, replacements } = useStoreState(state => state.upload)
  const parsed = useMemo(
    () => parseTokenColors(payload),
    [payload],
  )

  return (
    <div>
      {
        parsed.map(color =>
          <div key={color.hex} className={classes.colorContainer}>
            <ViewColor {...color} />
            <Forward style={{ color: 'lightgrey' }} />
            <PickColor color={color} />
          </div>
        )
      }
    </div>
  )
}

export default Foreground
