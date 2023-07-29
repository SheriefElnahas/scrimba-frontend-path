import './App.css';
import erenImg from './assets/Eren Yeager.jpg';
import zekeImg from './assets/Zeke Yeager.jpg';
import reinerImg from './assets/Reiner Braun.jpg'

const characters = {
  erenYeager: {
    name: 'Eren Yeager',
    titan: 'The Founding Titan',
    img: erenImg,
    about: ' The former member of the Survey Corps. He was the main protagonist of Attack on Titan. He lived in Shiganshina District with his parents until the fall of Wall Maria',
    interests: 'Eren was best described as hardheaded, strong-willed, passionate, and impulsive.'
  },
  zekeYeager : {
    name: 'Zeke Yeager',
    titan: 'The Beast Titan',
    img: zekeImg,
    about:' The former Captain of Marley\'s Warrior Unit, assigned to take the Founding Titan from the Eldians of Paradis Island. He was the inheritor of the Beast Titan.',
    interests: 'Zeke was a very intelligent and curious man. He displayed the traits of a leader.'
    
  },
  reinerBraun: {
    name: 'Reiner Braun',
    titan: 'The Armored Titan',
    img: reinerImg,
    about:'Is the Vice Captain of the Warrior Unit and the main protagonist of Attack on Titan from the Marleyan perspective.',
    interests: 'In human form, Reiner has short blond hair, hazel eyes, and a defined facial structure.'
  }
}
import Card from './Card';

function App() {
  return (
    <div className="app">
    <Card character={characters.erenYeager} />
    <Card character={characters.reinerBraun} />
    <Card character={characters.zekeYeager} />
    </div>
  )
}

export default App
