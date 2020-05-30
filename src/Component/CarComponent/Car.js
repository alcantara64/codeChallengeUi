import React, { Component } from 'react';
import { CarService } from '../../Services/CarService';
import Carcard from '../../Containers/CardCard/CarCard';

class Car extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: [],
      isLoading: true,
      isError: false,
      errorMessage: '',
    };
  }
  componentDidMount() {
    this.fetchCars();
  }
  fetchCars() {
    CarService.getCars()
      .then((res) => {
          console.log('cars ==>', res)
        this.setState({
          cars: res.data,
          isLoading: false,
          isError: false,
          errorMessage: '',
        });
      })
      .catch((err) => {
        this.setState({
          cars: [],
          isLoading: false,
          isError: true,
          errorMessage: err.errorMessage,
        });
      });
  }

renderCard = () =>{
    const { cars} = this.state;

    if (cars.length > 0) {
        return( 
        cars.map((car) => (
          <Carcard
             key={car.id}
             id={car.id}
             email={car.email}
             car_color={car.car_color}
             country = {car.country}
             car_modele = {car.car_model}
             car_model_year = {car.car_model_year}
             gender = {car.gender}
             job_title = {car.job_title}
             last_name = {car.last_name}
             first_name = {car.first_name}
             bio = {car.bio}
           />
        ))
        )
        }else{
        return "no records found"    
        }

}
  render() {
      console.log('current state', this.state)
    const {  isLoading, } = this.state;
    if (isLoading) return <p>isLoading ...</p>;
   return this.renderCard()
  }
}

export default Car;
