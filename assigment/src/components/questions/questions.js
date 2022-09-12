import React from 'react'
import './questions.css';
import User from '../../images/user.png'
import {useForm} from 'react-hook-form';
import axios from 'axios';

function Questions() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    function submit(e){
      console.log(e)
      axios.post('http://localhost:5000/api/insert',e)
      .then((response)=>{
        alert(response.data)
      })
    }
    return (
        <>
        <form onSubmit={handleSubmit(submit)}>
            <div className='question bg-light my-3 p-3 rounded rounded-5'>
                <p>Q1. Can you speak to prioritization, budget allocation broadly, and ROI for Posh Technologies? Please elaborate below</p>
                <input
                  type="radio"
                  value="yes"
                  {...register("q1", { required: true })}
                />
                <label htmlFor="yes">Yes</label><br/>
                <input
                  type="radio"
                  value="no"
                  {...register("q1", { required: true })}
                />
                <label htmlFor="no">No</label><br/>
            </div>
            <div className='question bg-light my-3 p-3 rounded rounded-5'>
                <p>Q2. Can you speak to prioritization, budget allocation broadly, and ROI for Posh Technologies? Please elaborate below</p>
                <input
                  type="radio"
                  value="yes"
                  {...register("q2", { required: true })}
                />
                <label htmlFor="yes">Yes</label><br/>
                <input
                  type="radio"
                  value="no"
                  {...register("q2", { required: true })}
                />
                <label htmlFor="no">No</label><br/>
            </div>
            <div className='question bg-light my-3 p-3 rounded rounded-5'>
                <p>Q3. Can you speak to prioritization, budget allocation broadly, and ROI for Posh Technologies? Please elaborate below</p>
                <textarea className='form-control' rows = "2" cols = "60" placeholder='Long answer text' {...register("q3",{required: true} )}></textarea><br/>
            </div>
            <div className='question bg-light my-3 p-3 rounded rounded-5'>
                <p>Q4. Can you speak to prioritization, budget allocation broadly, and ROI for Posh Technologies? Please elaborate below</p>
                <input
                  type="radio"
                  value="yes"
                  {...register("q4", { required: true })}
                />
                <label htmlFor="yes">Yes</label><br/>
                <input
                  type="radio"
                  value="no"
                  {...register("q4", { required: true })}
                />
                <label htmlFor="no">No</label><br/>
            </div>
            <div className='question bg-light my-3 p-3 rounded rounded-5'>
                <p>Q5. Can you speak to prioritization, budget allocation broadly, and ROI for Posh Technologies? Please elaborate below</p>
                <textarea className='form-control' rows = "2" cols = "60" placeholder='Long answer text' {...register("q5",{required: true} )}></textarea><br/>
            </div>
            <div className='question bg-light my-3 p-3 rounded rounded-5'>
                <p>Client Name</p>
                <div className='d-flex'>
                    <div className='my-auto'>
                        <img src={sessionStorage.getItem('src')} className='imgw rounded rounded-circle' />
                    </div>
                    <div className='px-5'>
                        <p className='name fw-bolder'>{sessionStorage.getItem('name')}</p>
                        <p className='designation'>{sessionStorage.getItem('designation')}</p>
                    </div>
                </div>
            </div>
            <div className='d-flex justify-content-evenly'>
                <button type="reset" value="Reset" className='btn border border-2 border-primary btnw'>Decline</button>
                <button type="submit" value="Submit" className='btn btn-primary btnw'>Accept</button>
            </div>
        </form>
        </>
    )
}

export default Questions