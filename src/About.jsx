import "./style.css";
import about_img from './assets/about.png';
import play_icon from './assets/play-icon.png';
function About({setPlayState}) {
    return (
        <>

            <div className="container about">
                <div className="about-left">
                    <img src={about_img} alt="" className="about-img" />
                    <img src={play_icon} alt="" className="play-icon" onClick={()=>{setPlayState(true)}} />
                </div>
                <div className="about-right">
                    <h3>About University</h3>
                    <h2>Nuturing Tomarrow's Leaders Today</h2>

                    <p>Embark on a transformative educational journey with our university's comprehensive education program. our cutting-edge curriculum is designed to empowerstudent with the Knowledge,skills and experiences needed to excle inthe dynamic field of educaation</p>

                    <p>With a focus on innovation,hands-on learning,and personalized mentorship impact in classroom,schools,and communities.</p>

                    <p>Whether you aspire to become a teacher,adiministrator,counselor,or educational leader,our diverse range of program offers the perfect pathway to achive your goals and unlock your full potential in shaping the future of education</p>
                </div>
            </div>
        </>
    )
}
export default About;