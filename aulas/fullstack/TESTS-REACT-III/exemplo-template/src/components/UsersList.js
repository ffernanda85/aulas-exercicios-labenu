import { useState, useEffect } from "react";
import axios from "axios";

function UsersList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            setUsers(response.data)
        });
    }, []);

    return (
        <section>
            <h1>Users data</h1>
            {users.map((user) => (
                <article key={user.id}>
                    <h2>{user.name}</h2>
                    
                    <h3>Account details</h3>
                    <p>Email: {user.email}</p>
                    
                    <h3>Location</h3>
                    <p>{user.address.city}</p>

                    <h3>Company</h3>
                    <p>{user.company.name}</p>

                    <hr />
                </article>
            ))}
        </section>
    );
}

export default UsersList;