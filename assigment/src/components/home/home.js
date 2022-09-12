import React, { useEffect } from 'react'
import './home.css'
import {useForm} from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    let navigate=useNavigate();
    function login(e){
        axios.post('http://localhost:5000/api2/getuser',e)
        .then((response)=>{
            try{
                sessionStorage.setItem('name',e.username);
                sessionStorage.setItem('designation',response.data.dataValues.designation);
                sessionStorage.setItem('src',response.data.dataValues.src);
                navigate('quiz')
            }
            catch{
                alert("Invalid username or password")
            }
        })
      }
    return (
        <div className='mw'>
            <form className='container' onSubmit={handleSubmit(login)}>
                <div className=' my-3 p-3 rounded rounded-5'>
                    <label className='label'>Username</label>
                    <input className='form-control' type="text" {...register("username", { required: true })}/><br/>
                </div>
                <div className='my-3 p-3 rounded rounded-5'>
                    <label className='label'>Password</label>
                    <input className='form-control' type="text" {...register("password", { required: true })}/><br/>
                </div>
                <button className='d-block mx-auto btn btn-primary' type='submit'>Log in</button>
            </form>
        </div>
      )
}

export default Home