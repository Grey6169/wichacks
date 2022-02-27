import './donate.css';
import qrcode from '../media/qrcode.JPG';
import bitcoin from '../media/bitcoinlogo.png';

function Donate() {
  return (
    <div className='donate'>
        <h1>Donate</h1> 

        
        <img src={bitcoin}/>
        
        <img src={qrcode}/>
        Scan the QR code to donate using Bitcoin!
        
    </div>
  );
}

export default Donate;

