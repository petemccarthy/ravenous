import React, { Component } from 'react';
import './App.css';
import BusinessList from './components/BusinessList/BusinessList';
import SearchBar from './components/SearchBar/SearchBar';

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};



class App extends Component {

  render() {
    const businesses = [
      business, business, business, business, business, business
    ];
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList business={businesses}/>
      </div>
    );
  }
}

export default App;
