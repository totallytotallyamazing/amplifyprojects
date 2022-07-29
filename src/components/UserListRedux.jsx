import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../redux/features/user-list.features';
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

    useEffect(() => {
        // let fetchData = async () => {
            dispatch(getUsers());
        // }
        // if(users.length === 0) { // stops dispatch from reload on route button click
            // fetchData();
        // }
        // eslint-disable-next-line
    }, [dispatch]);
    
    let { loading, errorMessage, users } = userState;

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col mt-3">
                        <p className="h3 text-primary">User List</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit, dolores eius voluptates quos doloremque commodi excepturi reprehenderit cumque quia provident praesentium sequi magnam voluptatem aliquid aspernatur consectetur rem laboriosam numquam?</p>
                    </div>
                </div>
                <div className="row">
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

        </React.Fragment>
    );
};

export default UserListRedux;