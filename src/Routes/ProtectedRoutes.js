import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'

const ProtectedRoutes = ({component:Component, ...rest}) => {

    const {isAuthenticated} = useSelector(state => state.login)
    return (
        <Fragment>
            <Route 
                {...rest}
                render={(props=>{
                    if(isAuthenticated === false){
                        return <Redirect to="/" />
                    }
                    return <Component {...props} />;
                })}
            />
        </Fragment>
    )
}

export default ProtectedRoutes
