import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../assets/css/dropdown.css'
import { useEffect, useState } from 'react'
import Provinces from './provinces'

interface city{
    id: number
    province_id: number
    name: string
}

export default function Dropdown(){
    const [ data, setData ] = useState<city[]>()
    
    useEffect(() => {
        fetch('https://www.emsifa.com/api-wilayah-indonesia/api/regencies/17.json')
        .then(res => res.json())
        .then(res => {
            setData(res)
        })
        .catch(res => console.log(res))
    
    }, [])
        
    return(
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: 500}}>
                    Pilih Provinsi
                </button>
                <ul className="dropdown-menu">
                    {data?.map((data: any, index: any) => (
                        <li style={{width: 481}}><option id='selected' className="dropdown-item" value={data.id}>{data.name}</option></li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
}