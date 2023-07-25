import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';


const Login = () => {
    let [values, setValues] = useState({
        email:'',
        password:''
    });

    function handleChange(e){
        e.preventDefault();

        let {name, value} = e.target;

        setValues({...values, [name]:value});
        console.log(values);



    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("http://localhost:8080/login", values)
        .then(res => console.log(res))
        .catch(err => console.log(err));

    }

    
  return (
    <>
    <div className='d-flex justify-content-center align-item-center vh-60  loginPage'>
        <div className='bg-white p-3 rounded w-25 border'>
            <h3> LOGIN </h3>
            <form>
                <div className='mb-3'>
                    <label htmlFor='email'> <strong>Email</strong></label>
                    <input type="email" placeholder='Enter Email' name='email' value={values.email}
                    className='form-control rounded-0' autoComplete='off' onChange={handleChange}/>

                </div>
                <div className='mb-3'>
                    <label htmlFor='password'> <strong>Password</strong></label>
                    <input type="password" placeholder='Enter Password' name='password' value={values.password}
                    className='form-control rounded-0' onChange={handleChange}/>
                    
                </div>
                
                
                <button type='submit' className='btn btn-success w-100 rounded-0 ' onClick={handleSubmit}>
                    Log In
                </button>
                <p>You agree the terms and conditions of this</p>
                <button className='btn btn-default border w-100 bg-light rounded-0'>
                    Create account
                </button>
            </form>


        </div>
    </div>
    </>
  )
}

export default Login