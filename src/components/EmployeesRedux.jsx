import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelected } from '../redux/features/employees.feature';

const EmployeesRedux = () => {

    let dispatch = useDispatch();
    
    // get data from Redux Store
    let employeeState = useSelector((store) => {
        return store['employees'];
    });

    let { employees } = employeeState;

    let handleUpdateSelected = (empId) => {
        // dispatch an action
        dispatch(updateSelected(empId));
    };

    console.log('RENDERING Employees');

    return (
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    <div className="col mt-3">
                        <p className="h3 text-primary">Employees</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga facilis eos ad quaerat aliquid officiis consectetur laborum, itaque, molestiae, velit dignissimos reprehenderit repellendus veritatis corporis accusantium ipsa asperiores iure!</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-group">
                            {
                                employees.length > 0 &&
                                employees.map(employee => {
                                    return (
                                        <li key={employee.id} className="list-group-item">
                                            <input checked={employee.isSelected} onChange={() => handleUpdateSelected(employee.id)} type="checkbox" className="form-check-input me-2" />
                                            {employee.name}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="col-md-6">
                        {
                            employees.length > 0 &&
                            employees.map(employee => {
                                return (
                                    <div key={employee.id}>
                                        {
                                            employee.isSelected &&
                                            <div className="card my-2">
                                                <div className="card-body">
                                                    <ul className="list-group">
                                                        <li className="list-group-item">
                                                            Name: <span className="fw-bold">{employee.name}</span>
                                                        </li>
                                                        <li className="list-group-item">
                                                            Email: <span className="fw-bold">{employee.email}</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div> 
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div> 
        </React.Fragment>
    );
};

export default EmployeesRedux;