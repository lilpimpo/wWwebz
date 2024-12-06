import { useRef } from 'react';
import '../../StiloozZ/micro-basei-stilo/StiloCanvai.css';
import CanvGrido from '../CanvGrido.jsx';
import WC_d from '../WCamData.jsx';
import { pix_Shake,deforMouse,preservo } from '../BaeFX.js';

function Basei_Micro() {
    const videoRef = useRef(null);
   
    return(
        <>
            <CanvGrido
                IDenti="Bassei"
                videoRef={videoRef}
                fxMo={pix_Shake}
                bgCol="#ffb"
                cel_wi={420}
                cel_hi={360}
                cel_div_wi={800}
                cel_div_hi={208}
                radiu={100}
            />
            <WC_d
                videoRef={videoRef} 
            />
        </>
    )
    
}

export default Basei_Micro;