import React from 'react';
import img1 from './images/6.jpg';
import img2 from './images/7.jpg';
import img3 from './images/8.jpg';
import img4 from './images/9.jpg';
import img5 from './images/10.jpg';


function About(){
    return(
        <div>
            <h1 align="center">TRANSFORMERS</h1>
            <img src={img1} width='854' height='480'></img>
            <h3>The fate of humanity is at stake when two races of robots, the good Autobots and the villainous Decepticons, bring their war to Earth. The robots have the ability to change into different mechanical objects as they seek the key to ultimate power. Only a human youth, Sam Witwicky (Shia LaBeouf) can save the world from total destruction</h3>   
             <br></br>
             <br></br>
             <h1 align="center">THE HOBBIT</h1>
            <img src={img2} width='854' height='480'></img>
            <h3>Hobbits, a race of small humanlike creatures, characteristically value peace, simplicity, and cozy homes yet are capable of incredible feats of courage and resourcefulness. The unwilling hero of The Hobbit, Bilbo Baggins, is persuaded to join Thorin and his 12 dwarfs to recover their stolen treasure, which is being guarded by the dragon Smaug. During the expedition, Bilbo finds a magical ring that renders the wearer invisible, which figures prominently in The Lord of the Rings. The Hobbit is the story of Bilbo’s maturing from a seeker of warmth and comforts to a fighter, however humble, for the greater good.</h3>  
            <br></br>
            <br></br>
            <h1 align="center">PACIFIC RIM</h1>
            <img src={img3} width='854' height='480'></img>
            <h3>Long ago, legions of monstrous creatures called Kaiju arose from the sea, bringing with them all-consuming war. To fight the Kaiju, mankind developed giant robots called Jaegers, designed to be piloted by two humans locked together in a neural bridge. However, even the Jaegers are not enough to defeat the Kaiju, and humanity is on the verge of defeat. Mankind's last hope now lies with a washed-up ex-pilot (Charlie Hunnam), an untested trainee (Rinko Kikuchi) and an old, obsolete Jaeger.</h3>
            <br></br>
            <br></br>
            <h1 align="center">JOHN WICK</h1>
            <img src={img4} width='854' height='480'></img>
            <h3>Legendary assassin John Wick (Keanu Reeves) retired from his violent career after marrying the love of his life. Her sudden death leaves John in deep mourning. When sadistic mobster Iosef Tarasov (Alfie Allen) and his thugs steal John's prized car and kill the puppy that was a last gift from his wife, John unleashes the remorseless killing machine within and seeks vengeance. Meanwhile, Iosef's father (Michael Nyqvist) -- John's former colleague -- puts a huge bounty on John's head.</h3>
            <br></br>
            <br></br> 
            <h1 align="center">THE DARK KNIGHT</h1>
            <img src={img5} width='854' height='480'></img>
            <h3>With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.</h3>
             <br></br>
            <br></br>

        </div>
        
    )
}
export default About;
