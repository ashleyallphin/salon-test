import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import TopNav from './components/TopNav';
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Gallery from "./pages/Gallery";
import Studio from './pages/Studio';
import Upload from "./pages/Upload";
import EditProfile from './pages/EditProfile';
import Artists from './pages/Artists';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';

const MainRouter = () => (

    <div>
        <TopNav />
        <Switch>
            <Route exact path="/" component={LogIn} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route path="/pagenotfound" component={PageNotFound} />
            <PrivateRoute path="/artists" component={Artists} />
            <PrivateRoute path="/gallery" component={Gallery} />
            <PrivateRoute exact path="/artist/studio/:username" component={Studio} />
            <PrivateRoute path="/artist/edit/:username" component={EditProfile} />
            <PrivateRoute path="/artist/upload/:username" component={Upload} />
            <Redirect to="/pagenotfound" />
        </Switch>
        <Footer />
    </div>

)

export default MainRouter;