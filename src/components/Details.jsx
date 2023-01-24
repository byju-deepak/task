import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import DetailCard from './DetailCard'

export default function Details() {
    const context = useContext(GlobalContext)
    const [students, setStudents] = useState([context.student])

    // for fetching data from db
    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api/student").then((data)=>{
    //         setStudents(data.data.rows)
    //     })
    // }, [])

    return (
        <div className='tw-w-2/3 tw-m-auto'>
            {
                students.map((i, ind)=><DetailCard student={i} key={ind} />)
            }
        </div>
    )
}
