import './Footer.css';

function Footer(){

    return(
        
        <div className="footer" id="contact">
        <div className="rr1">
        <div className="part1">
            <p className="g1">Hopelist</p><br></br>
            <p className="g2">Hopelist is a React-based web platform designed to connect orphanages and NGOs with donors by showcasing real-time donation wishlists.  </p>
<br></br>
            <button type="button" class="btn btn-danger" id="col">DONATE NOW</button>
        </div>

         <div className="part1">
            <p className="g1">QUICK LINKS</p><br></br>
            <p className="g2">Browse Categories</p>
            <p className="g2">Our Achievements</p>
            <p className="g2">Services & Amenities</p>
            <p className="g2">Customer Reviews & Ratings</p>

        </div>

         <div className="part1">
            <p className="g1">OUR SERVICES</p><br></br>
            <p className="g2">Concierge Assistance</p>
            <p className="g2">Flexible Operations</p>
            <p className="g2">Secure System</p>
            <p className="g2">Wellness & Recreation</p>

        </div>

         <div className="part1">
            <p className="g1">CONTACT US</p><br></br>
            <p className="g2">Address: Isi-6, Sitapura, Jaipur, Rajasthan 302022</p>
            <p className="g2">+91 9007062180</p>
            <div className="fb">

               

            </div>

        </div>
        </div>

    </div>
        
    )
}

export default Footer;