import React from 'react';
import './CarCard.css';
import logo from '../../logo.svg';
import PropTypes from 'prop-types'

const CardCard = (props) => {
    
  return (
    <div className="carCardCointainer">
      <div className="contentContainer">
          <div className="imageContainer">
        <img src={logo} width="200"  alt="carphoto"/>
        </div>
        <div className="textContainer">
            <h3> {`${props.first_name}  ${props.last_name}`} </h3>
            <div className="descriptionCointainer">
           <div className="descriptionItem">
             <h6 className="title">Brand</h6>
              <p >Buck</p>
             <div className="vl"></div>
             </div>
             <div className="descriptionItem">
             <h6 className="title">Year</h6>
             <div className="vl"></div>
             </div>
             <div className="descriptionItem">
             <h6 className="title">Color</h6>
             <div className="carColor"  style={{backgroundColor:props.car_color}}></div>
             </div>
             <h3>Email:<span>{props.email}</span></h3> 
             </div>

            <div/>
      </div>
    </div>
    </div>
  );
};

CardCard.propTypes = {
    id: PropTypes.any.isRequired,
    car_color: PropTypes.string.isRequired,
    email: PropTypes.string,
    bio : PropTypes.string,
}
export default CardCard
