import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';
import Sidebar from './Sidebar';
import './App.css';

// function getHeaderText() {
//   return <p>It is not HTML</p>;
// }
// const style = {
//   width: '50px',
//   height: '50px',
//   backgroundColor: 'green',
//   border: '1px solid black',
//   borderRadius: '50%',
//   marginBottom: '20px',
// };
// const currentTime = function(){
//   return Date()
// }
const App = () => {
  return (
    <div>
      <Header />
      <div className = 'container'>
        <Sidebar food1="Pizza"food2="Oranges"food3="Steak"food4="Fish tacos" />
        <Body />
      </div>
      <Footer />

      {/* <Sidebar */}
      {/* <img src='/images/miles.png' alt='...'/>
      <div className = 'style-intro'></div>
      <div style={style}></div>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: 'green',
          border: '1px solid black',
          borderRadius: '50%',
          marginBottom: '20px',
        }}
      ></div>
      <form className='form'>
        <label htmlFor='email'>Enter Email:</label>
        <input type='text' id='email' />
        <button style={{ backgroundColor: '#5cb85c' }}>Submit</button>
      </form>
      <p>{headerText}</p>
      {getHeaderText()}
      {info.text}: its is now {currentTime()} */}
    </div>
  );
};

export default App;
