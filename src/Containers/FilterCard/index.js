import React,{useState, useEffect} from 'react'
import { CarService } from '../../Services/CarService';
import Car from '../../Component/CarComponent/Car';


const FilterCard = () => {
    const [filter, setfilters] = useState(null)
    const [showFilters, setShowFilters] = useState(true)
    const [showRecords, setShowRecords] = useState(false)
    useEffect(() => {
    CarService.getFilers().then(res =>{
        console.log('succes ==>', res, 'filter ==>', filter)
         setfilters(res.data.params)  
    })
    .catch(e =>{
        console.error(e)
    })
    }, [filter])
 function handleFilterChange(filter){
    CarService.getCars(filter)
      .then((res) => {
      console.log('succes ==>', res, 'filter ==>', filter)
      setfilters(false)
      setShowFilters(false)
      setShowRecords(true)
      }).catch((err) => {
      });
}

if(filter && showFilters){
    return (
        <div className="carCardCointainer">
            <h3>{filter.fromDate} {filter.endDate}</h3>
            <div style={{display:'flex', justifyContent: 'center', overflow:'scroll'}}>
            {
            filter.countries.map(country => <div style={{backgroundColor:"rgb(223,223,223)", padding:"5px", borderRadius:"5px", marginRight:"5px", height:"100%"}} onClick={()=>{
                
                handleFilterChange({country})
            }} key ={country}>{country}</div>)   
            }
            </div>
            <div style={{display:'flex', justifyContent: 'center'}}>
            {filter.colors.map(color => <div key ={color} className="carColor" style={{backgroundColor:color, margin:'3px'}}></div>)}
            </div>
        </div>
    )   
}



    return (
        <div className="carCardCointainer">
            <h3></h3>
        </div>
    )


}



export default FilterCard

