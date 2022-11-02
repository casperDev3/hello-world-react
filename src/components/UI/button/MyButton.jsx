import React from 'react'
// eslint-disable-next-line 
import classes from './MyButton.module.css'

export default function MyButton({children, ...props}) {
  return (
    <button {...props} className="btn btn-success">
        {children}
    </button>
  )
}
