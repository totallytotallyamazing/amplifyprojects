import counterReducer from './features/counter.feature';
import employeesReducer from  './features/employees.feature';
import userListReducer from './features/user-list.features';
import rowColReducer from './features/row-col.features';
import carouselReducer from './features/carousel.feature';
import authReducer from './features/auth.features';

const rootReducer = {
    counter: counterReducer,
    employees: employeesReducer,
    myUsers: userListReducer,
    rowcol: rowColReducer,
    carousel: carouselReducer,
    authUser: authReducer
}

export default rootReducer;