import {Redirect, Route} from 'react-router-dom';
import useAuth from '../auth/useAuth';

export default function PublicRoute(props) {

    //const user = {id: 1, role: 'regular'};

    const {user} = useAuth();

    if(user) return <Redirect to="/projects"/>

    return (
        <Route {...props} />
    )
}
