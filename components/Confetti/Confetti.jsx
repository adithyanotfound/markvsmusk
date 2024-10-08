import React from 'react';
import "./Confetti.css"
import ConfettiCelebration from 'react-confetti-explosion';
const Confetti = () => {
    const [liked, setLiked] = React.useState();
    function countLiked(){
        setLiked(true)
    }
    return (
        <>
            {liked ? <ConfettiCelebration force={0.8} duration={3000} particleCount={250} width="4000" /> : 
            <section id="confetti">
                <span>Was this blog helpful?</span>
                <button id='yes' onClick={countLiked}>
                    <img src="https://cdn1.iconfinder.com/data/icons/hand-icon/1792/thumbs-up-512.png" alt="like icon" />
                </button>
            </section>}
        </>
    );
}

export default Confetti;
