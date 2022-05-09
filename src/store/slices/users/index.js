import { createSlice} from '@reduxjs/toolkit';
// axios
import axios from 'axios';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
    },
    reducers: {
      setUserList: (state, action) =>{
          state.list = action.payload;
      }
    }
});
export const { setUserList } = userSlice.actions;
export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {  //<--  si el 'return' es vacío se puede utilizar doble 'arrow function'
      axios.get("https://reqres.in/api/users?per_page=12")
      .then((response) => {   // operación asincrona
      dispatch(setUserList(response.data.data));
    }).catch((error) => console.log(error)); 
    }
    








