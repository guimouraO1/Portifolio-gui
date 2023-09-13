import React from "react";
import ReactPlayer from "react-player/youtube";
import { useState } from 'react';
import styles from "./VideoPlayer.module.css";

const VideoPlayer = () => {
  
  const [url, setText] = useState('url vídeo here'); 

  function handleChange(e) { 
    setText(e.target.value); 
  } 

  return (
    <div className={styles.containerVideo}>
      <div className={styles.inputComponent}> 
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