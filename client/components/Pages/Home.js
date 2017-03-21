import React from 'react';
import Playground from '../Playground/Playground';
import css from './main.css'
import SignInModal from '../signIn/SignInModal';
import Event from '../event/event';

class Home extends React.Component {
  render() {
    let data = {title: 'Super awesome Event', subTitle: 'subTitle', size: 3, price: 3.95, rating: 4, tags: ['super','awesome','cool']};
    return (
      <div>
       <Event data ={data}/>
       <SignInModal/>
        
      </div>


    );
  }
}

export default Home;
