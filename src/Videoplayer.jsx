import "./style.css";
import video from './assets/college-video.mp4';

function Videoplayer() {
    return (
        <>
            <div className="video-player ">
                <video src={video} autoPlay muted controls></video>
            </div>
        </>
    )
}
export default Videoplayer;