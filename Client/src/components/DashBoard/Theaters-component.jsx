
import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import theaterService from '../../Services/TheaterService';
import React, { useEffect, useRef, useState } from 'react'
import Movies_pic from "../../../public/Theater.jpg"

const Theaters= () => {
  const navigate = useNavigate();
  const [disable, setDisable] = useState(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
     Name:"",
     City:"",
     Adress:"",
     Capacity:""
    }
  });
  const submitHandler = async (data) => {
    setDisable(true);
    try {
      let response = await theaterService.addTheater(data);
      setDisable(false);
      if (!response.data) {
        console.log("Error in addTheater ! : ", response);
        const { data: { message } } = response.response;
        toast.error(message);
        return;
      }
      toast.success('User Signed up!');
      navigate('/AddTheater');
      return;
    } catch (error) {
      setDisable(false);
      console.log("Error :", error)
      const { data: { message } } = error.response;
      toast.error(message);
    }
  }


  return (
    <div className='flex relative justify-center items-center h-full  w-full' >
    
      <img src={Movies_pic} className='h-screen w-screen -z-10'/>
      <div className='border-2 absolute border-white backdrop-blur-2xl py-10 px-5 justify-center items-center flex flex-col gap-5 rounded-md z-10'>
      <h2 className='text-3xl text-white'> Theater Details:</h2>
      <form action="" className='flex flex-col gap-5 p-5 justify-center items-center'
       onSubmit={handleSubmit(submitHandler)}
      >
   
   

    <input type="text"  placeholder="Theater Name"
     {...register("Name", {
      required: {
        value: true,
        message: "Enter Name To Continue!"
      },
    })}
    
    className="p-3 bg-slate-600 text-white outline-none 
    md:text-xl text-sm rounded-md cursor-pointer border-2 border-slate-600 focus:border-white
    md:w-80 sm:w-52 w-36
    "/>

    <input type="text"    placeholder="city" className="p-3 bg-slate-600 text-white outline-none 
            md:text-xl text-sm rounded-md cursor-pointer border-2 border-slate-600 focus:border-white
            md:w-80 sm:w-52 w-36
            "
            {...register("City", {
              required: {
                value: true,
                message: "Enter City To Continue!"
              },
            })}
            />
             <input type="text"  placeholder="Theater Adress"
     {...register("Adress", {
      required: {
        value: true,
        message: "Enter Adress To Continue!"
      },
    })}
    
    className="p-3 bg-slate-600 text-white outline-none 
    md:text-xl text-sm rounded-md cursor-pointer border-2 border-slate-600 focus:border-white
    md:w-80 sm:w-52 w-36
    "/>
 <div className="flex gap-x-3">
 <input type="text"   placeholder="Capacity Row"
    
     
    className="p-3 bg-slate-600 text-white outline-none 
    md:text-xl text-sm rounded-md cursor-pointer border-2 border-slate-600 focus:border-white
    md:w-40 sm:w-52 w-9
    "
    {...register("row", {
      required: {
        value: true,
        message: "Enter Row To Continue!"
      },
    })}
    />
    <input type="text"   placeholder="Column"
    
     
    className="p-3 bg-slate-600 text-white outline-none 
    md:text-xl text-sm rounded-md cursor-pointer border-2 border-slate-600 focus:border-white
    md:w-40 sm:w-52 w-9
    "
    {...register("col", {
      required: {
        value: true,
        message: "Enter Column To Continue!"
      },
    })}
    />
 </div>
 
     <button
            type="submit"
            disabled={disable}
            className="bg-gradient-to-r text-white from-pink-500 to-blue-900 p-2 rounded-md font-bold text-xl  transition-colors w-[200px] disabled:cursor-not-allowed"      
          >
           Add Theater
          </button>
    
      </form>
      </div>
    </div>
  )
}

export default Theaters

