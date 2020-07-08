import React from 'react'
import useMeta from '../hooks/useMeta'
import ViewJson from './ViewJson'

const Meta = () => {
  const meta = useMeta()

  return (
    <ViewJson data={meta} />
  )
}

export default Meta
