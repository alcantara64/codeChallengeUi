import axios from 'axios';
export class CarService{
    constructor(){
        this.url = process.env.REACT_APP_BASE_URL;
        console.log('CarService ==>', this.url);
    }
static  getCars(){
return axios.post(`${this.url}`);
} 
static getFilers(){
 return axios.get(`${process.env.REACT_APP_BASE_URL}/filters`)
}
}