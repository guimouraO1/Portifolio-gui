import VideoPlayer from "../components/VideoPlayer";
import Styles from './AboutMe.module.css'


function AboutMe() {
  return (
    
    <div className={Styles.containerVideoPlayer}>
        <VideoPlayer />
    </div>
  );
}
export default AboutMe