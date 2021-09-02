import {Redirect, Route} from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from '../helpers/routes';

export default function PrivateRoute({hasRole: role, ...props}) {

    //const user = {id: 1, role: 'regular'};

    const {hasRole, isLogged} = useAuth();

    if(role && !hasRole(role)) return <Redirect to={routes.home}/>

    if(!isLogged()) return <Redirect to={routes.login}/>

    return (
        <Route {...props} />
    )
}
