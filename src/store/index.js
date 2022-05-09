import { configureStore } from '@reduxjs/toolkit';
// reducer
import users from './slices/users' // importar carpeta, no archivo

export default configureStore({
    reducer: {
   users
    }
});





