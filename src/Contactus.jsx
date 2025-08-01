import './Contactus.css';

function Contactus(){
    return(
        <>
         <div className='contactus'>
                    <div className="let1">
                        <img src="letter.png" alt="Letter" width="270" />
                        <p className="llt">If you have questions or just to get in touch, use the form below. We look forward to hearing from you!</p>

                    </div>
                    <div class="contact-container">
    <h2>Contact Us</h2>
    <form class="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="User Email" required />
      <textarea placeholder="Message" required></textarea>
      <button type="submit">Send</button>
    </form>
  </div>

                </div>
        </>
    )
}

export default Contactus;