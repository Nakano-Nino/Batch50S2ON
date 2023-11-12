import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.min.js' 
import '../assets/css/dropdown.css' 
import { useEffect, useState } from 'react' 
import { Button, Form } from 'react-bootstrap'; 
 
interface provinces { 
    id: number 
    name: string 
} 
 
interface cities { 
    id: number 
    province_id: number 
    name: string 
} 
 
interface regencies { 
    id: number 
    regency_id: number 
    name: string 
} 

interface villages {
    id: number
    district_id: number
    name: string
}
 
export default function Provinces() { 
    const [data, setData] = useState<provinces[]>() 
    const [city, setCity] = useState<cities[]>() 
    const [regencies, setRegencies] = useState<regencies[]>()
    const [villages, setVillages] = useState<villages[]>() 
    const getInitialState = () => { 
        const value = "1" 
        return value 
    } 
 
    const getInitialRegencyId = () => { 
        const value = "1" 
        return value 
    } 

    const getInitialVillageId = () => {
        const value = "1"
        return value
    }
 
 
    const [provinceId, setProvinceId] = useState(getInitialState) 
    const [regencyId, setRegencyId] = useState(getInitialRegencyId)
    const [villageId, setVillageId] = useState(getInitialVillageId) 
 
    const handleChange = (event: any) => { 
        setProvinceId(event.target.value) 
    } 
 
    const handleChangeRegency = (event: any) => { 
        setRegencyId(event.target.value) 
    } 

    const handleChangeVillage = (event: any) => {
        setVillageId(event.target.value)
    }
 
    useEffect(() => { 
        fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json') 
            .then(res => res.json()) 
            .then(res => { 
                setData(res) 
            }) 
            .catch(res => console.log(res)) 
 
    }, []) 
 
    if(provinceId != "1") { 
        const getDataCity = fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`) 
        .then(res => res.json()) 
        .then(res => { 
            setCity(res) 
            console.log(res) 
        }) 
        getDataCity 
    } 
 
    if(regencyId != "1") { 
        const getRegency = fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`) 
        .then(res => res.json()) 
        .then(res => { 
            setRegencies(res) 
        }) 
        getRegency 
    } 

    if(villageId != "1") {
        const getVillage = fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${villageId}.json`)
        .then(res => res.json())
        .then(res => {
            setVillages(res)
        })
        getVillage
    }
 
    return (<> 
        <Form.Select id='province' aria-label="Default select example" value={provinceId} onChange={handleChange}> 
            <option value={`1`}>Pilih provinsi</option> 
            {data?.map((data: any, index: any) => ( 
                <option id='selected-province' className="dropdown-item" value={data.id}>{data.name}</option> 
            ))} 
        </Form.Select> 
        <Form.Select id='city' aria-label="Default select example" value={regencyId} onChange={handleChangeRegency}> 
            <option value={`1`}>Pilih Kota</option> 
            {city?.map((city: any, index: any) => ( 
                <option id='selected-province' className="dropdown-item" value={city.id}>{city.name}</option> 
            ))} 
        </Form.Select> 
        <Form.Select id='disctrict' aria-label="Default select example" onChange={handleChangeVillage}> 
            <option value={`1`}>Pilih Kecamatan</option> 
            {regencies?.map((disctrict: any, index: any) => ( 
                <option id='selected-province' className="dropdown-item" value={disctrict.id}>{disctrict.name}</option> 
            ))} 
        </Form.Select> 
        <Form.Select id='village' aria-label="Default select example"> 
            <option value={`1`}>Pilih Kelurahan</option> 
            {villages?.map((villages: any, index: any) => ( 
                <option id='selected-province' className="dropdown-item" value={villages.id}>{villages.name}</option> 
            ))} 
        </Form.Select> 
    </> 
 
    ) 
}