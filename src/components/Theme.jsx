import React from 'react'
import useTheme from '../hooks/useTheme'
import ViewJson from './ViewJson'

const Theme = () => {
  const theme = useTheme()

  return (
    <ViewJson data={theme} />
  )
}

export default Theme
