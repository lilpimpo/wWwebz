import { useRef } from 'react';
import '../../StiloozZ/micro-basei-stilo/StiloCanvai.css';
import CanvGrido from '../CanvGrido.jsx';
import WC_d from '../WCamData.jsx';
import { pix_Shake,deforMouse } from '../BaeFX.js';

function Basei_Micro() {
    const videoRef = useRef(null);
   
    return(
        <>
            <CanvGrido
                IDenti="Bassei"
                videoRef={videoRef}
                fxMo={deforMouse}
                bgCol="#ffb"
                cel_wi={420}
                cel_hi={360}
                cel_div_wi={164}
                cel_div_hi={64}
                radiu={55}
            />
            <WC_d
                videoRef={videoRef} 
            />
        </>
    )
    
}

export default Basei_Micro;