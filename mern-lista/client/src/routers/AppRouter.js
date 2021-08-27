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

export default function AppRouter() {
    return (
        <Router>
            <Layout>
                <Switch>
                    <PublicRoute exact path="/" component={HomePage}/>
                    <PublicRoute exact path="/login" component={LoginPage}/>
                    <PublicRoute exact path="/register" component={RegisterPage}/>
                    <PrivateRoute exact path="/account" component={AccountPage}/>
                    <PrivateRoute exact path="/projects" component={ProjectsPage}/>
                    <PrivateRoute exact path="/project/:projectId" component={ProjectPage}/>
                    <PrivateRoute hasRole={roles.admin} exact path="/admin/users" component={UsersPage}/>
                    
                    <Route path="*" component={NotFoundPage}/>
                </Switch>
            </Layout>
        </Router>
    )
}
