import React , { Component } from 'react';
import Home from './../Home';
import Work from './../Work';
import Portfoloi from './../Portfolio'
import Portfil from './../prtofil'
import About from './../About';
import SocialMedia from './../SocailMedia';
import Footer from './../Footer';


class  Index extends Component {
  render(){
  return (
    <div >
      <Home/>
       <Work/>
    <Portfoloi/>
    <Portfil/>
      <About/>
       <SocialMedia/>
    <Footer/> 
    </div>
  );
}
}
export default Index;
