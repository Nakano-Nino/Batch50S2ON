import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../assets/css/dropdown.css'
import { useEffect, useState } from 'react'

interface provinces{
    id: string
    name: string
}

export default function Provinces(){
    const [ data, setData ] = useState<provinces[]>()
    
    useEffect(() => {
        fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
        .then(res => res.json())
        .then(res => {
            setData(res)
        })
        .catch(res => console.log(res))
    
    }, [])
        
    return(data?.values)
}