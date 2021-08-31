import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import AccountPage from '../pages/AccountPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectPage from '../pages/ProjectPage';
import UsersPage from '../pages/admin/UsersPage';
import NotFoundPage from '../pages/NotFoundPage';
import Layout from '../components/layouts/Layout';

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from '../helpers/routes';

export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <PublicRoute exact path = {routes.home} component={HomePage}/>
                    <PublicRoute exact path = {routes.login} component={LoginPage}/>
                    <PublicRoute exact path = {routes.register} component={RegisterPage}/>
                    <PrivateRoute exact path = {routes.account} component={AccountPage}/>
                    <PrivateRoute exact path = {routes.projects} component={ProjectsPage}/>
                    <PrivateRoute exact path = {routes.project()} component={ProjectPage}/>
                    <PrivateRoute hasRole={roles.admin} exact path = {routes.admin.users} component={UsersPage}/>
                    
                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </Layout>
        </Router>
    )
}
