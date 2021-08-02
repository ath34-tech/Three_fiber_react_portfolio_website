import '../CSS/hero.scss'
import ReactTypingEffect from 'react-typing-effect';
import Box from './3dBox';
import {Canvas} from "@react-three/fiber"
export default function Hero(){
    return(
    
        <div class="hero-main" >
            
           <div className="heading-section">
           <div className="intro">
           <ReactTypingEffect
        text={["Hello.", "I am ath tripathi.","I am a programmer.","I am a writer.","I am a developer."]}
        speed={100}
        typingDelay={1000}
        eraseDelay={1000}
        eraseSpeed={100}
        cursorRenderer={cursor => <h1 style={{fontSize:"50px"}}>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (<p className="name">{text}</p>)}}        
      />
            
           </div>

           <h4 className="about">
               A programmer/Writer/Student/Learner
           </h4> 

           </div>
        
           <Canvas>
            
               <Box/>
               </Canvas>

        </div>
    )
}