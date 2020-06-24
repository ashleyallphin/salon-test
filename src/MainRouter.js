import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from "./components/pages/LogIn/LogIn";
import SignUp from "./components/pages/SignUp/SignUp";
import Upload from "./components/pages/Upload/Upload";

const MainRouter = () => (

    <div>
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/upload" component={Upload} />
        </Switch>
    </div>
)

export default MainRouter;