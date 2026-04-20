import "./style.css";
import next_icon from './assets/next-icon.png';
import back_icon from './assets/back-icon.png';
import user_1 from './assets/user-1.png';
import user_2 from './assets/user-2.png';
import user_3 from './assets/user-3.png';
import user_4 from './assets/user-4.png';
import { useRef } from "react";
import { ssrImportKey } from "vite/module-runner";


function Testimonial() {

    const slider = useRef();
    let tx = 0;


    function slideFroward() {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    function slideBackward() {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`

    }


    return (
        <>
            <div className="container">
                <div className="testimonial">
                    <img src={next_icon} alt="" className="next-btn" onClick={slideFroward} />
                    <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
                    <div className="slider">
                        <ul ref={slider}>
                            <li>
                                <div className="slide">
                                    <div className="user-info">
                                        <img src={user_1} alt="" />
                                        <div>
                                            <h3>William Jackson</h3>
                                            <span>Edusity,USA</span>
                                        </div>
                                    </div>
                                    <p>Chossing to pursuemy degree at Edusity was one of the best decision I've ever made.The supportive community,state-of-art facilities,and commitment to academic excellence have trully exceeded my expectations.</p>
                                </div>
                            </li>
                            <li>
                                <div className="slide">
                                    <div className="user-info">
                                        <img src={user_2} alt="" />
                                        <div>
                                            <h3>William2Jackson</h3>
                                            <span>Edusity,USA</span>
                                        </div>
                                    </div>
                                    <p>Chossing to pursuemy degree at Edusity was one of the best decision I've ever made.The supportive community,state-of-art facilities,and commitment to academic excellence have trully exceeded my expectations.</p>
                                </div>
                            </li>
                            <li>
                                <div className="slide">
                                    <div className="user-info">
                                        <img src={user_3} alt="" />
                                        <div>
                                            <h3>William3 Jackson</h3>
                                            <span>Edusity,USA</span>
                                        </div>
                                    </div>
                                    <p>Chossing to pursuemy degree at Edusity was one of the best decision I've ever made.The supportive community,state-of-art facilities,and commitment to academic excellence have trully exceeded my expectations.</p>
                                </div>
                            </li>
                            <li>
                                <div className="slide">
                                    <div className="user-info">
                                        <img src={user_4} alt="" />
                                        <div>
                                            <h3>William4 Jackson</h3>
                                            <span>Edusity,USA</span>
                                        </div>
                                    </div>
                                    <p>Chossing to pursuemy degree at Edusity was one of the best decision I've ever made.The supportive community,state-of-art facilities,and commitment to academic excellence have trully exceeded my expectations.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Testimonial;