import { useState, useEffect } from 'react';

const UserLoginPage = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [users, setUsers] = useState('');

    const fetchUsers = async () => {
        try {
            const response =  fetch(`${API_URL}/users`);
            if (response.ok) {
                const usersData = await response.json();
                setUsers((previousUsers) => ([usersData, ...previousUsers])) //latest users on top
            }
        }
        catch {
            console.log(error);
        }
      }

    const handleSubmit = (event) => {
        event.preventDefault();

        useEffect(() => {
            fetchUsers();
          }, []);
    
        const user = users.find(
          (aUser) => aUser.username === username && aUser.password === password
        );
    
        if (user) {
          user.role === 'Admin' ? '/admin' : '/';
        } else {
          alert('Invalid credentials');
        }
      };



    return ( 
    <div className='form'>
     <h1> Here add form to login as admin or customer</h1>
     <form onSubmit={handleSubmit}>
      <div>
        <label>Username:
            <input
            name = 'email'
            type="email"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required />
        </label>
      </div>
      <div>
        <label>Password:
            <input
            name = 'password'
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
    </div> 
    
);
}

export default UserLoginPage;