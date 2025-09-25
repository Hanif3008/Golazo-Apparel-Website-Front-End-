import { useEffect } from "react";
import "aos/dist/aos.css"
import AOS from "aos";

function MainNewsletter() {
    useEffect(() => {
                        AOS.init({
                            offset: 200,
                            delay: 100,
                            duration: 400,
                            easing: 'ease',
                            once: false,    // buat animasinya terus berjalan ketika ngescroll
                            mirror: false,
                            anhorPlacement: 'top-bottom'   //ketika scroll terus berhenti animasi akan berhenti.
                        });
                    }, []);
    return (
        <div className="newsletter-section" data-aos="fade-up">
            <h1>Join The Golazo Club <br /> Get Exclusive Deals & Update</h1>
            <a href="#">Sign Up For Free <ion-icon name="arrow-forward-outline"></ion-icon></a>
        </div>
    )
}

export default MainNewsletter;