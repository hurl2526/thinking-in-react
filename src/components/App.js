import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Sidebar from './Sidebar';
import './App.css';
import SingleSquare from './SingleSquare';

const App = () => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Sidebar
          food1='Pizza'
          food2='Oranges'
          food3='Steak'
          food4='Fish tacos'
        />
        <Body>
          <SingleSquare name='Square 1' color='blue' />
          <SingleSquare name='Square 2' color='orange' />
          <SingleSquare name='Square 3' color='purple' />
          <SingleSquare name='Square 4' color='white' />
        </Body>
      </div>
      <Footer />
    </div>
  );
};

export default App;
