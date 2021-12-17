
import React from "react";
import { Route ,useNavigate ,Navigate} from "react-router-dom";

import Cookies from "universal-cookie";
const cookies = new Cookies();


const ProtectedRoute = ( {component: Component, ...rest }) => {

    const navigate = useNavigate()

    return (
        <Route
        {...rest}
        render={(props)=>{

              const token = cookies.get('TOKEN')

              if(token){
                  return <Component {...props}/>
              }else{
                <Navigate
                to={{
                  pathname: "/",
                  state: {
                    // sets the location a user was about to assess before being redirected to login
                    from: props.location,
                  },
                }}
              />
           
                  
              }
        }}>
            
        </Route>
    )
}

export default ProtectedRoute
