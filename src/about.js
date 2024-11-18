function About(){
    return(
        <div className="aboutbgcolor col-12 all-section-height">
            
            <h2 className="aboutmargin ">About</h2>
            <p>Hi I'm Suraj. Nice to meet you. since my journey begin as Freelancer and developer nearly 7 months ago. I have
                done work for my class and collbrated with talented people.
                I'm quietly confident, naturaly curious and on improving my development skills.
                I like to code things from scratch and enjoy bringing ideas to life in the browser</p>
                <div className="col-6 skill">
                    <h2>My Skill</h2>
                    <span>HTML</span><span className="floatright marginpersentage">70%</span>
                   <div className="htmldiv skillsdiv skillmr"></div>
                   <span>CSS</span><span className="floatright marginpersentage">70%</span>
                   <div className="cssdiv skillsdiv skillmr"></div>
                   <span>JAVASCRIPT</span><span className="floatright marginpersentage">50%</span>
                   <div className="jsdiv skillsdiv skillmr"></div>
                     
                 </div>
                <div className="col-6 aboutbgcolor">
                        <h2>Front-end Web developer</h2>
                        <div className="col-6">
                            <ul className="liststyletype personalul">
                                <li><b>Birthday</b>: 14 Aug 1996</li>
                                <li><b>Website</b>: surajkoli.in</li>
                                <li><b>Phone</b>: <a href="tel:+919922111826">+919922111826</a></li>
                                <li><b>City</b>: Satara</li>
                            </ul>
                        </div>
                        <div className="col-6">
                        <ul className="liststyletype personalul">
                            <li><b>Age</b>: 27</li>
                            <li><b>Degree</b>: BA</li>
                            <li><b>Mail</b>: <a href="mailto:kolisuraj4044@gmil.com">kolisuraj4044@gmail.com</a></li>
                            <li><b>Freelance</b>: Available</li>
                        </ul>
                        </div>
                </div> 
        </div>
    )

}
export default About;