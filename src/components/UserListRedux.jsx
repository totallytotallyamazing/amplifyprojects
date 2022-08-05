import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/features/user-list.features';
import { getAuthUser, removeAuthUser } from '../redux/features/auth.features';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const UserListRedux = () => {

    const dispatch = useDispatch();

    // get data from Redux Store
    let usersState = useSelector((store) => {
        return store['myUsers'];
    });
    let { loading, errorMessage, myUsers } = usersState;

    // set & get auth to localStorage in Redux Store
    let authUserState = useSelector((store) => {
        return store['authUser'];
    });
    let { user, local } = authUserState;

    const { route } = useAuthenticator(context => [context.route]);
    // const { user } = useAuthenticator(context => [context.user]);

    console.log('RENDERING UserList, user: ' + user + ', route: ' + route);
    // console.log('user: ' + user);
    
    useEffect(() => {
        if ( user === null && route === 'authenticated' && !local ) {
            dispatch(getUsers());
            // console.log('useEffect - getUsers()');
        } 
        
        if( user === null && route === 'authenticated') {
            dispatch(getAuthUser());
            // console.log('useEffect - getAuthUser(), user: ' + user);
        } else if (user !== null && route === 'signIn') {
            dispatch(removeAuthUser());
            // console.log('useEffect - removeAuthUser() -- user: ' + user);
        }
    }, [dispatch, route, user, local]);

    return (
        <React.Fragment>
            <div className="container mt-5">
            {
                route !== 'authenticated' &&
                <div className="row">
                    <div className="col mt-3">
                        <p className="h3 text-primary">User List</p>
                        <p>Please Login to Authenticate</p>
                    </div>
                </div>
            }
                <Authenticator>
                    {({ signOut, user }) => ( 
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col mt-3">
                                    <p className="h3 text-primary">User List</p>
                                    <p>Welcome {user?.attributes?.email}, you are authenticated!</p>
                                </div>
                                <div className="col-md-6 mt-3 d-flex flex-row-reverse">
                                    <button className="btn btn-primary" onClick={signOut}>Sign Out</button>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col">
                                    {
                                        loading && <h2 className="fw-bold">...Loading</h2>
                                    }
                                    {
                                        !loading && errorMessage !== null && <h3 className="text-danger">{errorMessage}</h3>
                                    }
                                    {
                                        !loading && myUsers.length > 0 &&
                                        <table className="table table-hover text-center table-striped">
                                            <thead className="bg-primary text-white">
                                                <tr>
                                                    <th>SNO</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Website</th>
                                                    <th>Company</th>
                                                    <th>Location</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    myUsers.map(myUser => {
                                                        return (
                                                            <tr key={myUser.id}>
                                                                <td>{myUser.id}</td>
                                                                <td>{myUser.name}</td>
                                                                <td>{myUser.email}</td>
                                                                <td>{myUser.website}</td>
                                                                <td>{myUser.company.name}</td>
                                                                <td>{myUser.address.city}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    }
                                </div>
                            </div>
                        </div>
                    )}
                </Authenticator>
            </div>
        </React.Fragment>
    );
};

export default UserListRedux;