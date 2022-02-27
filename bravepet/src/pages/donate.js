import './donate.css';
import qrcode from '../media/qrcode.jpg';
import bitcoin from '../media/bitcoinlogo.png';

function Donate() {
  return (
    <div className='donate'>
        <h1>Donate</h1> 

        <img src={qrcode}/> <br/>
        Scan the QR code to donate using Bitcoin!
        
    </div>
  );
}

export default Donate;

