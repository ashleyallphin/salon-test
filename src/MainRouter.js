import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Upload from "./pages/Upload";
import PageNotFound from './pages/PageNotFound';

const MainRouter = () => (

    <div>
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/upload" component={Upload} />
            <Route path="/404" component={PageNotFound} />
            <Redirect to="/404" />
        </Switch>
    </div>
)

export default MainRouter;