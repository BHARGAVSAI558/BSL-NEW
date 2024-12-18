import { useState } from 'react';
	import axios from 'axios';

	const Register = () => {
  	const [name, setName] = useState('');
  	const [email, setEmail] = useState('');
  	const [password, setPassword] = useState('');
  	const [message, setMessage] = useState('');

  	const handleSubmit = async (e) => {
    	e.preventDefault();
    	try {
      	const res = await axios.post('http://localhost:9000/api/users/register', {
        name,
        email,
        password,
      	});
      	setMessage('User registered successfully');
    	} catch (error) {
      	setMessage('Error registering user: ' + error.response.data.message);
    	}
  	};

  	return (
    	<div>
      	<h2>Register</h2>
      	<form onSubmit={handleSubmit}>
       	 <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      	</form>
      	{message && <p>{message}</p>}
    	</div>
  		);
	};

	export default Register;
