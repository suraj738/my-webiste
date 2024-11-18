import Contactpic from './contact-image.jpg'
function Contact(){
 return(
        <div className="aboutbgcolor col-12">
        
            <div className="col-6">
                    <img className="contact-img" src={Contactpic}/>
                </div>
                <div className="col-6 contact-form">
                    <div className="googleformwidth">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScwpRYxCH6LMPZzYLHHpieKLvDgZV-4eD6S0bs0OI8qu-EXXg/viewform?embedded=true" width="550" height="550px" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                    </div> 
                </div>
        </div>
    )

}
export default Contact;