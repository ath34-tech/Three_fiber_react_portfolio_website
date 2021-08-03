import './App.scss'
import Navbar from './components/navbar';
import Hero from './components/Hero';
import { Canvas } from '@react-three/fiber';
import Tourus from './components/tourus3d';

export default function App(){



  
return (
<>
<Canvas style={{position:'fixed'}}>
  <Tourus colors={"white"}/>

</Canvas>
<div style={{position:"fixed ",width:"100%"}}>
  <Navbar/>
  <Hero/>
  </div>
  
</>
);
};