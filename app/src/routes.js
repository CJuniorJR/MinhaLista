import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './services/auth';

// import das paginas
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import MyList from './pages/MyList';

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
            <Route exact path="/" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/mylist" component={MyList} />
            <Route path="*" component={() => <h1>404 not found</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;