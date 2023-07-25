import axios from 'axios';
import React, { useState } from 'react'

const AddEmployee = () => {
    const initialObj = {
        name:'',
        email:'',
        password:'',
        address:'',
        image: ''
    };
    const [data, setData] = useState(initialObj);

    function handleSubmit(e){
        e.preventDefault();

        // console.log("my image is  : ",data.image);
        // console.log("my image is  : ",e.target.files);
        const formdata = new FormData();
        formdata.append("name", data.name);
        formdata.append("email", data.email);
        formdata.append("password", data.password);
        formdata.append("address", data.address);
        formdata.append("myimage", data.image);

        

        axios.post('http://localhost:8080/create', formdata)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
 

  return (
    <>
        <div className='d-flex flex-column align-item-center pt-5'>
            <h2>Add Employee</h2>
            <form className='row g-3 w-50' onSubmit={handleSubmit}>
                
                <div htmlFor='inputName4' className='col-12'>
                    <label  className='form-label'>Name</label>
                    <input type="name" className='form-control' placeholder='Name' id='inputName4' onChange={e => setData({...data, name: e.target.value})}/>   
                </div>

                <div className='col-12'>
                    <label htmlFor="inputEmail4" className='form-label'>Email</label>
                    <input type="email" className='form-control' placeholder='Email' id='inputEmail4' onChange={e => setData({...data, email: e.target.value})}/>   
                </div>

                
                <div className='col-12'>
                    <label htmlFor="inputPassword4" className='form-label'>Password</label>
                    <input type="password" className='form-control' placeholder='Password' id='inputPassword4' onChange={e => setData({...data, password: e.target.value})}/>
                </div>

                <div className='col-12'>
                    <label htmlFor="inputAddress" className='form-label'>Address</label>
                    <textarea type='address'  className='form-control' placeholder='1234 Main St. ' id='inputAddress' onChange={e => setData({...data, address: e.target.value})}/>
                </div>
                <div className='col-12 mb-3'>
                    <label htmlFor="inputGroupFile01" className='form-label'>Select Image</label>
                    <input type="file" className='form-control' placeholder='Select Image'  onChange={e => setData({...data, image: e.target.files[0]})}/>
                </div>
                <div className="col-12">
                    <button type='submit' className='btn btn-primary'>Create</button>
                </div>
                

            </form>

        </div>
    </>
  )
}

export default AddEmployee 