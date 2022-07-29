import counterReducer from './features/counter.feature';
import employeesReducer from  './features/employees.feature';
import userListReducer from './features/user-list.features';
import rowColReducer from './features/row-col.features';
import carouselReducer from './features/carousel.feature';

const rootReducer = {
    counter: counterReducer,
    employees: employeesReducer,
    users: userListReducer,
    rowcol: rowColReducer,
    carousel: carouselReducer
}

export default rootReducer;