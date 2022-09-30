import { useDispatch, useSelector} from 'react-redux'
import { fetchUsers } from './users/usersSlice'
import '../App.css';

const UserList = () => {
    const allUsers = useSelector((state)=> state.users.entities)
    const dispatch = useDispatch()

    const doFetchUsers = () => {
        
        console.log(dispatch(fetchUsers()));
    }

    return(
        <div className='container'>
            <h1>User data</h1>
            <button className='btn' onClick={doFetchUsers}>GetUsers</button>
            <table id='table2' className='table table-striped table-bordered'>
                <thead className='table-dark'>
                    <tr>
                        <th>
                            Users
                        </th>
                        <th>
                            Username
                        </th>
                        <th>
                            Email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map((user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                            </tr>
                        )))
                    }
                </tbody>
            </table>
        </div>
    )

}

export default UserList