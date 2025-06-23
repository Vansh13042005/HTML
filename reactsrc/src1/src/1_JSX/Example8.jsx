import React from 'react'

export default function Example8() {
    let isVisible = true
  return (
    <div>
        {isVisible && <h1>Visible</h1>}
    </div>
  )
}
