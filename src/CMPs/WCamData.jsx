
import { useEffect,useRef } from "react";

function WC_d({videoRef}){

    //const videoRef = useRef(null);

    useEffect(() =>
    {
        const webcam_vid = videoRef.current;

        navigator.mediaDevices.getUserMedia({video:true})
        .then((stream) => {
            webcam_vid.srcObject=stream;
        })
        .catch((erroria) => {
            console.error(erroria);

        });

    },[videoRef]);

   


    return(
        <video ref={videoRef} id='bassei-webcam' alt="video-a-procssr" autoPlay></video>

    );

}
export default WC_d;