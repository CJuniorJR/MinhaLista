import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route  
            {...rest}

            render={props => isAuthenticated() ? (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/", state: { from: props.location} }}/>
            )
        }
    />
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>SignIn</h1>} />
            <Route path="/signup" component={() => <h1>SignUp</h1>} />
            <PrivateRoute path="/app" component={() => <h1>Private Route</h1>} />
            <Route path="*" component={() => <h1>404 not found</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;