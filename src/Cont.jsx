import './Cont.css';
import fpic from './fpic.jpg';
import ImageSlider from './ImageSlider';

function Cont(){
   return (
  <>
    <div className='fpic'>
      <ImageSlider/>

    </div>
    <div className='head'>
      <p className='h4 line line1' >Where Hope Meets,</p>
      <p className='h4 line line2'>Helping Hands.</p>
    </div>

  </>
);
}

export default Cont;