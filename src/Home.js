import React from 'react';
import img1 from './images/1.jpg';
import img2 from './images/2.jpg';
import img3 from './images/3.jpg';
import img4 from './images/4.jpg';
import img5 from './images/5.jpg';


function Home(props){
    return(
        <div>
            <h1>MY TOP 5 HOLLYWOOD MOVIES</h1>
            <br>
            </br>
            <h1><center>TRANSFORMERS</center></h1>
            <img src={img1} width='1280' height='720'></img>
            <br>
            </br>
            <br>
            </br>
            <h1><center>THE HOBBIT</center></h1>
            <img src={img2} width='1280' height='720'></img>
            <br></br>
            <br></br>
            <h1><center>PACIFIC RIM</center></h1>
            <img src={img3} width='1280' height='720'></img>
            <br></br>
            <br></br>
            <h1><center>JOHN WICK</center></h1>
            <img src={img4} width='1280' height='720'></img>
            <br></br>
            <br></br>
            <h1><center>THE DARK KNIGHT</center></h1>
            <img src={img5} width='1280' height='720'></img>
            
        </div>
    )
}
export default Home;