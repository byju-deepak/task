import React, { useEffect } from 'react'

export default function SchoolDetails({onSubmit, onBack, data, setData}) {
    const checkValid = ()=>{
        console.log(data);
        if(data.school_name?.trim().length > 3);
        else return "Enter Valid School name";
        if(!data.standard) return "Enter Valid Standard";
        if(data.school_address?.trim().length >= 3);
        else return "Enter valid School Address";
        if(data.school_pin?.trim().length >= 6);
        else return "Enter valid School Pin code";
        return false;
    }
    useEffect(()=>{
        console.log(data);
    }, [data])
    return (
        <div className='tw-h-full tw-flex tw-justify-center tw-flex-col tw-items-center'>
            <div className='tw-w-full'>
                <div className='tw-flex tw-flex-col tw-items-center tw-w-full'>
                    <input type="text" name="school_name" value={data.school_name} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='School Name*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-4/5 tw-my-2'/>
                    <input type="number" name="standard" value={data.standard} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='Standard*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-4/5 tw-my-2'/>
                    <div className='tw-w-4/5 tw-flex tw-justify-between'><input type="text" name="school_address" value={data.school_address} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='School Address*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-[80%] tw-my-2'/><input type="text" name="school_pin" value={data.school_pin} onChange={(e)=>setData({...data, [e.target.name] : e.target.value})} placeholder='PinCode*' className='tw-border-gray-300 tw-border-2 tw-px-4 tw-py-2 focus:tw-outline-none tw-rounded-sm tw-w-[18%] tw-my-2'/></div>
                </div>
            </div>
            <div className='tw-flex tw-justify-evenly tw-w-full'>
                <input type="button" value="Back" className='tw-w-44 tw-bg-sky-500 tw-py-2 tw-rounded-md tw-my-12 tw-text-white tw-cursor-pointer hover:tw-bg-sky-600 tw-transition-all tw-duration-300' onClick={onBack}/><input type="button" value="Submit" className='tw-w-44 tw-bg-sky-500 tw-py-2 tw-rounded-md tw-my-12 tw-text-white tw-cursor-pointer hover:tw-bg-sky-600 tw-transition-all tw-duration-300' onClick={()=>{
                    var error;
                    if(error = checkValid()){
                        console.log(error)
                        window.alert(error);
                        return;
                    }
                    onSubmit();
                }}/>
            </div>
        </div>
    )
}
