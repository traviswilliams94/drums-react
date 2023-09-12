import { useEffect, useState } from "react";

function Drum({letter, sound}) {
	const [playing, setPlaying] = useState(false);
	const play = () => {
		setPlaying(true);

		new Audio(sound).play();

		setTimeout(() => {
			setPlaying(false);
		}, 100);
	};

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key.toLowerCase() === letter.toLowerCase()) {
				play();
			}
		});
	}, [letter, play]);

	return (
		<div className={`drum ${playing ? "playing" : ""}`} onClick={play}>
			<div className="key" >{letter}</div>
		</div>
	);
}

export default Drum;