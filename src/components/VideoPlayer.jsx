import React from "react";
import ReactPlayer from "react-player/youtube";
import { useState } from 'react';
import styles from "./VideoPlayer.module.css";
import { FiSearch } from 'react-icons/fi'


const VideoPlayer = () => {
  
  const [url, setText] = useState('https://www.youtube.com/watch?v=3sZqORc8Or8&ab_channel=SwatGames'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return (
    <div className={styles.containerVideo}>
      <div className={styles.inputComponent}> 
        <FiSearch className={styles.search} size={30}/>
        <input className={styles.inputButton} value={url} onChange={handleChange} /> 
        <button onClick={() => setText('url vídeo here')}> Reset </button> 
      </div> 
      <div className={styles.videoPlayer}>
      <ReactPlayer controls url={url} />  
      </div>
      
    </div>
  );
};

export default VideoPlayer;