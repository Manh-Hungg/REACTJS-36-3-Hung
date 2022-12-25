import { combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { countReducer } from "./reducers/countReducer";
import { phoneReducer } from "./reducers/phoneReducer";
import { vocabularyReducer } from "./reducers/vocabularyReducer";

const rootReducer = combineReducers({
  countReducer,
  phoneReducer,
  vocabularyReducer,
  userReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// SHALLOW COMPARE ( === ) ( so sánh địa chỉ vùng nhớ )
// oldState và newState => oldState === newState

// var object = {
//   a: {
//     b: {
//       c: {
//         d: 1
//       }
//     }
//   }
// }

// SHALLOW COMPARE vs DEEP COMPARE ( so sanh địa chỉ vùng nhớ và so sánh lun giá trị bên trog địa chỉ vùng nhớ )
