
import React, { useEffect, Fragment } from 'react'
//redux
import { fetchAllUsers} from '../store/slices/users';
import { useDispatch, useSelector } from 'react-redux';

const UserList = () => { 
  const {list: users} = useSelector(state => state.users)
  const dispatch = useDispatch();

 useEffect(() => {
  dispatch(fetchAllUsers());
 }, [dispatch])

  return (
 <Fragment>
     <div className='container'>
         <div className='row'>
           { // por comodidad arriba 'list' lo renombré 'users'
               users.map((user, index) => {
                  return <div key={index} className='col-md-3 md-4'>
                 <div className='card'>
                    <img src={user.avatar} alt='avatar'></img>
                    <div className='card-body'>
                      <h5 className='card-title'>{`${user.first_name} ${user.last_name}`}</h5>
                     <p className='card-text'>{user.email}</p>
                    </div>
                    </div>
                   </div>
               })
           }
         </div>
     </div>
 </Fragment>
      )
}

export default UserList