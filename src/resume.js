import Mycv from './Surajkoli_ReactJS_2023.docx';
import Resumepic from './whats_the_story-main.jpg';

function Resume(){
    return(
        <div className="col-12 resumediv resume-img">
            <div className="col-6 resumemargin">
                <h2> View My Resume</h2>
                <a href={Mycv} className="resumebutton"><b>DOWNLOAD CV</b></a>
            </div>
        </div>
    )

}
export default Resume;