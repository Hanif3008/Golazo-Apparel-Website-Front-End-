import { useEffect } from "react";
import "aos/dist/aos.css"
import AOS from "aos";


function MainIconicKits() {
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
        <div className="iconic-kits-wrapper" data-aos="fade-up">
            <div className="iconic-kits-pic">
                <img src="/images/iconicarsenal.jpg" alt="" className="iconic-arsenal"/>
                <img src="/images/iconicmilan.png" alt="" className="iconic-milan"/>
            </div>
            <div className="iconic-kits" >
                <h1>Iconic Kits</h1>
                <h2>Golazo Heritage : Kits That Tell Stories</h2>
                <a href="#">Shop Iconic Jersey</a>
            </div>
        </div>
    )
}

export default MainIconicKits