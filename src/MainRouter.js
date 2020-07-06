import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Upload from "./pages/Upload";
import PageNotFound from './pages/PageNotFound';
import Studio from './pages/Studio';
import Artists from './pages/Artists';
import EditProfile from './pages/EditProfile';
import PrivateRoute from './components/PrivateRoute';
import TopNav from './components/TopNav';
import Footer from './components/Footer';

const MainRouter = () => (

    <div>
        <TopNav />
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/pagenotfound" component={PageNotFound} />
            <PrivateRoute exact path="/upload" component={Upload} />
            <PrivateRoute path="/artists" component={Artists} />
            <PrivateRoute exact path="/studio/:username" component={Studio} />
            <PrivateRoute path="/artist/edit/:username" component={EditProfile} />
            <Redirect to="/pagenotfound" />
        </Switch>
        <Footer />
    </div>

)

export default MainRouter;