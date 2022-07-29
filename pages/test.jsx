import React from 'react'

export default function test() {
  return (
    <div>{ process.env.TEST_ENV_VARIABLE_NAME }</div>
  )
}
