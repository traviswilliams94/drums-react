import {useState} from "react";
import Drum from "./components/Drum";
import boom from './sounds/boom.wav';
import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
import tink from './sounds/tink.wav';
import tom from './sounds/tom.wav';

function App() {

  const [sounds, setSounds] = useState([
		{
			name: "boom",
			sound: boom,
			key: "A",
		},
		{
			name: "clap",
			sound: clap,
			key: "S",
		},
		{
			name: "hihat",
			sound: hihat,
			key: "D",
		},
		{
			name: "kick",
			sound: kick,
			key: "F",
		},
		{
			name: "openhat",
			sound: openhat,
			key: "G",
		},
		{
			name: "ride",
			sound: ride,
			key: "H",
		},
		{
			name: "snare",
			sound: snare,
			key: "J",
		},
		{
			name: "tink",
			sound: tink,
			key: "K",
		},
		{
			name: "tom",
			sound: tom,
			key: "L",
		},
  ]);

  return (
    <div className="App">
      <h1>React Drums!</h1>
      <div className='drums'>
        {sounds.map((sound, i) => (
         <Drum key={i} letter={sound.key} sound={sound.sound} />
        ))}
      </div>
    </div>
  );
}

export default App;
