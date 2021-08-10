import '../CSS/hero.scss'
import ReactTypingEffect from 'react-typing-effect';
import Box from './3dBox';
import {Canvas} from "@react-three/fiber"
export default function Hero(){
    return(
    
        <div class="hero-main" id="hero">
            
           <div className="heading-section">
           <div className="intro">
           <ReactTypingEffect
        text={["Hello.", "I am ath tripathi.","I am a programmer.","I am a writer.","I am a developer."]}
        speed={100}
        typingDelay={1000}
        eraseDelay={1000}
        eraseSpeed={100}
        cursorRenderer={cursor => <h1 className="cursor">{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (<p className="name">{text}</p>)}}        
      />
            
           </div>

           <h4 className="about">
               A programmer/Writer/Student/Learner
           </h4> 
           <div className="buttonWrap">
            <button><i class="fab fa-github"></i>VISIT MY GITHUB</button>
            <button>VISIT MY INSTAGRAM</button>
            </div>
           </div>
        
           <Canvas className="box-object">
               <Box/>
               
               </Canvas>

        </div>
    )
}