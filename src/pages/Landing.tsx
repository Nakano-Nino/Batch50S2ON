import Provinces from "../components/provinces"


const dataProvince = Provinces

export default function Landing(){ 
    return(
        <>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{width: 500}}>
                    Pilih Provinsi
                </button>
                <ul className="dropdown-menu">
                    {dataProvince.map((data: any, index: any) => (
                        <li style={{width: 481}}><option id='selected' className="dropdown-item" value={data.id}>{data.name}</option></li>
                    ))
                    }
                </ul>
            </div>
        </>
    )
    
}