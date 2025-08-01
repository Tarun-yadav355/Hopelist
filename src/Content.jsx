import './Content.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingDollar, faUserLock, faBullseye,faListOl  } from '@fortawesome/free-solid-svg-icons';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
function Content(){
    return(
        <>
        <div className="about">
            <div className='ah'>
            <p>OUR MISSION</p>
            </div>
            <div className='data1'>
                <p>We empower donors to fulfill real needs by connecting them directly <br></br>with item requests from the underprivileged, listed transparently by NGOs.</p>
                <p className='l1'>We ensure honest giving and eliminate the space for corruption.</p>
            </div>

            
        </div>
        <div className='serv'>
                <div className='sh'>
                    <p>We provides:</p>

                </div>

                <div className='cards'>
                    <div className='card'>
                        <div className='cont'>
                        <FontAwesomeIcon icon={faHandHoldingDollar} size="2xl" style={{ color: '#95b4ea'}} />
                        <p className='x1'> Fast & Transparent Fulfillment</p>
</div>
                    </div>

                      <div className='card'>
                        <div className='cont'>
                        <FontAwesomeIcon icon={faUserLock} size="2xl" style={{ color: '#95b4ea'}} />
                        <p className='x1'>Privacy & Safety</p>
</div>
                    </div>
                      <div className='card'>
                        <div className='cont'>
                        <FontAwesomeIcon icon={faBullseye} size="2xl" style={{ color: '#95b4ea'}} />
                        <p className='x1'> Goal-Based Campaigns</p>
</div>
                    </div>

                     <div className='card'>
                        <div className='cont'>
                        <FontAwesomeIcon icon={faListOl } size="2xl" style={{ color: '#95b4ea'}} />
                        <p className='x1'> Donation Wishlist</p>
</div>
                    </div>
                    

                </div>

                <div className='sp'>
                    <div className='pc1'>
                            <p className='ll1'>Give a little. Change a lot.</p>
                            <p className='ll2'>The time to create change is now — don’t wait for a better moment.</p>
<p className='ll2'>Take that first step with courage, and be the difference the world needs.</p>
<Button variant="contained" id='xx1'>DONATE NOW</Button>


                        </div>
                    <div className='pc'>
                         <img src="pic.avif" alt="NGO" id='pcc'/>
                        
                        </div>
                        

                </div>
                <div className='y1'>
                    <p>OUR IMPACT</p>

                </div>

               

               

            </div>
             
        </>
    )
}

export default Content;