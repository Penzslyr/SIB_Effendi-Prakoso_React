import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(
        ()=> {
            fetch('https://jsonplaceholder.typicode.com/users')
            .then((res)=> res.json())
            .then((data)=> setUsers(data))
        }
    )
    return(
        <div>
            <Link
                to="/"
                className="btn btn-primary btn-lg"
                type="button"
                role="button"
                > Back to Home
                </Link>
            <div className="container-fluid py5">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=> (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    )
}

export default Users