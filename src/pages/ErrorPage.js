import React from 'react'
import { Button } from 'react-bootstrap'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError()
  return (
    <div>
        <h1>
            Opps! An error occured!</h1>
            {error && <p>{error.data}</p>}
           <NavLink to="/">
         <Button >Go Home</Button>
             {/* <button>Go Home</button> */}
             
           </NavLink>
    </div>
  )
}

export default ErrorPage