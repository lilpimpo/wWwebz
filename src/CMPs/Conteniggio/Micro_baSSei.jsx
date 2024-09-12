import { useRef } from 'react';
import '../../StiloozZ/micro-basei-stilo/StiloCanvai.css';
import CanvGrido from '../CanvGrido.jsx';
import WC_d from '../WCamData.jsx';

function Basei_Micro() {
    const videoRef = useRef(null);
    const pix_Shake= (cell) => {
        cell.pixSnap_y = Math.random() * 45;
        cell.pixSnap_x = Math.random() * 4;
      };


    return(
        <>
            <CanvGrido
                IDenti="Bassei"
                videoRef={videoRef}
                fxMo={pix_Shake}
                bgCol="#ffb"
                cel_wi={420}
                cel_hi={360}
                cel_div_wi={82}
                cel_div_hi={82}
            />
            <WC_d
                videoRef={videoRef} 
            />
        </>
    )
    
}

export default Basei_Micro;