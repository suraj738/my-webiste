
import myPic from './sk-logo.jpg'
import {Link} from 'react-router-dom'

function Aside(props){

return(
    <>
    <div className={ props.showOrHide ? 'asideOpacity' : ''}>
        </div>
<div className={ props.showOrHide ? 'col-2 asidebgcolor ' : 'col-2 asidebgcolor positionfx aside' }>
    <div className="leftside-sidebar asidemobile">
    <div className="nav-social-width marginauto">     
<img className="logo" src={myPic} />

        <a href="https://www.facebook.com/kolisuraj12345" className="navsocial aside-social-ul link "><i className="fab fa-facebook-f navsocial-i"></i></a>
        <a href="http://wa.me/919922111826" className="navsocial aside-social-ul link"><i className="fab fa-whatsapp navsocial-i"></i></a>
        <a href="https://www.instagram.com/surajk_4044/" className="navsocial aside-social-ul link navsocial-i"><i className="fab fa-instagram"></i></a>
        <a href="mailto:kolisuraj4044@gmail.com" className="navsocial aside-social-ul link navsocial-i "><i className="far fa-envelope "></i></a>
        
    </div>
     <div>
            <nav>
                <ul className="liststyletype navulw marginauto">
                        <li onClick={props.hamburger} className="navlip"><Link to="/home" className="textcolor aside-social-ul"><i className="fas fa-home navli-i icon"></i>Home </Link></li>
                        <li onClick={props.hamburger} className="navlip"><Link to="/about" className="textcolor aside-social-ul"><i className="fas fa-user navli-i icon"></i>About</Link></li>
                        <li onClick={props.hamburger} className="navlip"><Link to="/resume" className="textcolor aside-social-ul"> <i className="fas fa-mobile-alt navli-i icon"></i>Resume</Link></li>
                        <li onClick={props.hamburger} className="navlip"><Link to="/contact" className="textcolor aside-social-ul"><i className="fas fa-file navli-i icon"></i>Contact</Link></li>
                </ul>
            </nav>
   </div>
   <div>
       <div className="textcolor footermr textcenter textbold">&copy; copyright 2021 </div>
       <div  className="textcolor footermr footertext textbold">Developed By Suraj Koli</div>
   </div>
   </div>
   </div>
   </>
)
}


export default Aside;