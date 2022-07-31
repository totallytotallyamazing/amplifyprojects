import React, { useEffect, useState } from 'react'; // useRef, useState
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/features/user-list.features';
import { Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import Auth from '@aws-amplify/auth';

// import Boxs from './Boxs';
// import Carousel from './Carousel';
// import RowCol from './RowCol';
// import CounterTest from './CounterTest';
// import Example from './Example';

const UserListRedux = () => {

    const dispatch = useDispatch();

    // get data from Redux Store
    let userState = useSelector((store) => {
        return store['users'];
    });

    console.log('RENDERING UserList');
    // const user = Auth.currentAuthenticatedUser();
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    
    // const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), [dispatch]);

    useEffect(() => {
        // let fetchData = async () => {
            dispatch(getUsers());
        // }
        // if(users.length === 0) { // stops dispatch from reload on route button click
            // fetchData();
        // }
        // eslint-disable-next-line

    }, [dispatch]);

    useEffect(() => {
        
        
        if (!user) {
            // On component mount
            // If a session cookie exists
            // Then use it to reset auth state
            Auth.currentSession()
              .then((session) => {
                const {
                  idToken,
                  accessToken,
                } = session;
      
                // Define your user schema per your needs
                const user = {
                  email: idToken.payload.email,
                  username: idToken.payload.preferred_username,
                  userId: idToken.payload.sub,
                  accessToken: accessToken.jwtToken,
                };
                // setIsAuthenticated(true);
                setUser(user);
                console.log(user);
              })
              .catch((err) => {
                // handle it
                console.log('Error: ' + err);
              });
            
          }

    }, [user]);

    // const components = {
    //     SignUp: {
    //         Footer() {
    //         //   const { toSignIn } = Authenticator();
        
    //           return (
    //             <View textAlign="center">
    //               <Button
    //                 fontWeight="normal"
    //                 onClick={console.log('click')}
    //                 size="small"
    //                 variation="link"
    //               >
    //                 Back to Sign In
    //               </Button>
    //             </View>
    //           );
    //         },
    //       }
    // };

    // {
    //     !isAuthenticated && 
    //     <div className="container mt-5">
    //         <div className="row">
    //             <div className="col mt-3">
    //                 <p className="h3 text-primary">Login</p>
    //                 <p>To see User List</p>
    //             </div>
    //         </div>
    //     </div>
    // }

    
    let { loading, errorMessage, users } = userState;

    return (
        <React.Fragment>
            <div className="container mt-5">
             <div className="row">
                 <div className="col mt-3">
                     <p className="h3 text-primary">User List</p>
                 </div>
             </div>
         </div>
            <Authenticator>
                {({ signOut, user }) => ( 
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mt-3">
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
                                    !loading && users.length > 0 &&
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
                                                users.map(user => {
                                                    return (
                                                        <tr key={user.id}>
                                                            <td>{user.id}</td>
                                                            <td>{user.name}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.website}</td>
                                                            <td>{user.company.name}</td>
                                                            <td>{user.address.city}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                }
        
                                {/* <Boxs /> */}
        
                                {/* <Example /> */}
        
                                {/* <CounterTest /> */}
        
                            </div>
                        </div>
                    </div>
                )}
            </Authenticator>
        </React.Fragment>
    );
};

export default UserListRedux;