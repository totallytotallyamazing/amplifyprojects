import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UserList = () => {

    let [state, setState] = useState({
        loading: false,
        users: [],
        errorMessage: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState(prevState => ({
                    ...prevState,
                    loading: true
                }));
                let dataURL = 'https://jsonplaceholder.typicode.com/users';
                let response = await axios.get(dataURL);
                setState(prevState => ({
                    ...prevState,
                    users: response.data,
                    loading: false
                }));
            }
            catch(error) {
                setState(prevState => ({
                    ...prevState,
                    errorMessage: error,
                    loading: false
                }))
            }
        }
        fetchData();
    }, []);

    let { loading, errorMessage, users } = state;

    return (
        <React.Fragment>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
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
                            !loading && errorMessage.length > 0 && <h3 className="text-danger">{errorMessage}</h3>
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
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default UserList;