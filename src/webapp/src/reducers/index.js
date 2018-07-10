import { combineReducers } from 'redux'

import incomeReducer from './incomeReducer'
import investmentsReducer from './investmentsReducer'
import bankAccountReducer from './bankAccountReducer'
import { reducer as ReduxFormReducer } from 'redux-form'
import { reducer as notificationsReducer } from 'reapop';

const defaultNotification = {
  position: 'bl',
  dismissible: true,
  dismissAfter: 5000,
  allowHTML: false,
  closeButton: false
};

export default combineReducers({
  incomeReducer,
  investmentsReducer,
  bankAccountReducer,
  'form': ReduxFormReducer,
  notifications: notificationsReducer(defaultNotification)
})
