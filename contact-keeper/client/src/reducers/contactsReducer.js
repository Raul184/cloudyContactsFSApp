import {
  ADD_CONTACT ,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../actions/types';

const initState = {
  contactsList: [
    { id: 1 , name: 'Stuart' , surname: 'CaraOso' },
    { id: 2 , name: 'Tomate' , surname: 'CaraOso' },
    { id: 3 , name: 'Caliente' , surname: 'CaraOso' }
  ] ,
  current: null ,
  filtered: null ,
  alert: false
}

export default ( state=initState , action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state ,
        contactsList: [ ...state.contactsList , action.payload ]
      }
    case DELETE_CONTACT:
      return {
        ...state ,
        contactsList: state.contactsList.filter(el => el.id !== action.payload)
      }
    case SET_CONTACT:
      return {
        ...state ,
        current: action.payload
      }
    case CLEAR_CONTACT:
      return {
        ...state ,
        current: null
      }
    case UPDATE_CONTACT:
      return {
        ...state ,
        contactsList: state.contactsList.map(el => {
          if(el.id === action.payload.id){
            return action.payload
          }else{
            return el;
          }
        })
      }
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contactsList.filter(el => {
          const regExp = new RegExp(`${action.payload}` , 'gi');
          return el.name.match(regExp); //|| el.email.match(regExp);
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    //SERVER BACKEND
    default:
      return state;
  }
}

