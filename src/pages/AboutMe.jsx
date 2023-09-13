import VideoPlayer from "../components/VideoPlayer";
import Styles from './AboutMe.module.css'


function AboutMe() {
  return (
    
    <div className={Styles.containerVideoPlayer}>
        <VideoPlayer video='https://www.youtube.com/watch?v=uD4izuDMUQA&t=2s&ab_channel=melodysheep'/>
    </div>
  );
}
export default AboutMe