import axios from 'axios'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalContext from '../context/GlobalContext'
import FormContainer from './FormContainer'
import ParentDetail from './ParentDetail'
import SchoolDetails from './SchoolDetails'
import StudentDetail from './StudentDetail'

export default function Form({steps}) {
    const [step, setStep] = useState(0)
    const [data, setData] = useState({})
    const [topPanel, setTopPanel] = useState([])
    const formRef = useRef();
    const navigate = useNavigate();
    const {setStudent} = useContext(GlobalContext)
    useEffect(()=>{
        setTopPanel(state=>{
            var arr = [];
            for(var i = 0; i < steps; i++){
                arr.push(<div style={{left : `calc(${(100/(steps - 1))* i}% - 1rem)`}} className={`tw-absolute tw-w-8 tw-h-8 -tw-top-3 tw-rounded-full tw-bg-gray-300 tw-border-4 tw-border-gray-300`}></div>)
            }
            return arr;
        })
    }, [])
    useEffect(()=>{
        formRef.current.scrollLeft = step * formRef.current.offsetWidth;
    }, [step])

    const submitForm =async ()=>{
        //for saving data to db
        // await axios.post("http://localhost:8000/api/student", data);
        setStudent(data);
        navigate("/details")
    }

    const increase = ()=>setStep(step + 1);
    const decrease = ()=>setStep(step - 1);
    return (
        <div className="tw-w-screen tw-h-screen tw-bg-gray-50 tw-flex tw-justify-center tw-items-center">
        <div className='tw-w-1/2'>
            <div className='tw-my-8 tw-relative '>
                <div className='tw-w-full tw-h-2 tw-bg-gray-300 tw-rounded-full'>
                    <div className='tw-h-full tw-bg-sky-500 tw-duration-500 tw-rounded-full tw-transition-all' style={{width:(100/(steps - 1))*step+"%"}}></div>
                </div>
                {
                    topPanel
                }
                {
                    topPanel?.map((e, ind)=>{
                        if(ind > step) return null;
                        else{
                            return <div style={{left : `calc(${(100/(steps - 1))* ind}% - 1rem)`}} className={`tw-absolute tw-w-8 tw-h-8 -tw-top-3 tw-rounded-full tw-bg-sky-500`}></div>
                        }
                    })
                }
            </div>
            <div className='tw-flex tw-overflow-x-hidden tw-whitespace-nowrap tw-scroll-smooth' ref={formRef}>
                <div className='tw-flex'>
                    <FormContainer heading={"Student Details"} element={<StudentDetail onSubmit={increase} data={data} setData={setData}/>}/>
                    <FormContainer heading={"Parents Details"} element={<ParentDetail onSubmit={increase} onBack={decrease} data={data} setData={setData}/>}/>
                    <FormContainer heading={"School Details"} element={<SchoolDetails onBack={decrease} data={data} setData={setData} onSubmit={submitForm}/>}/>
                </div>
            </div>
        </div>
        </div>
    )
}
