import { useEffect } from "react";
import "aos/dist/aos.css"
import AOS from "aos";

function MainBestsellers() {
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
    return(
        <div className="bestsellers-section" data-aos="fade-up">
            <div className="bestsellers-section-pic">
                <img src="/images/stadion.jpg" alt="" />
            </div>
            <div className="bestsellers-section-title">
                <div className="bestsellers-title-left">
                    <h2>Golazo Bestsellers</h2>
                    <h4>Most Wanted on and off the Pitch</h4>
                </div>
                <div className="bestsellers-title-right">
                    <a href="#">Shop All</a>
                </div>
            </div>
            <div className="bestsellers-section-items">
                <div className="bestsellers-section-item">
                    <div className="bestsellers-section-topsale">
                        <h4>Top Sale</h4>
                    </div>
                    <div className="bestsellers-section-item-pic">
                        <img src="/images/barca.png" alt="" />
                    </div>
                    <div className="bestsellers-section-item-details">
                        <h4>IDR. 1.350.000 ,-</h4>
                        <div className="bestsellers-star">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                    </div>
                    <div className="bestsellers-section-item-title">
                        <h4>FC Barcelona Home Kit Jersey Authentic 25/26</h4>
                    </div>
                    <div className="bestsellers-section-item-btn">
                        <a href="#">Checkout Item</a>
                    </div>
                </div>
                <div className="bestsellers-section-item">
                    <div className="bestsellers-section-topsale">
                        <h4>Top Sale</h4>
                    </div>
                    <div className="bestsellers-section-item-pic">
                        <img src="/images/arsenal.png" alt="" />
                    </div>
                    <div className="bestsellers-section-item-details">
                        <h4>IDR. 1.350.000 ,-</h4>
                        <div className="bestsellers-star">
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                    </div>
                    <div className="bestsellers-section-item-title">
                        <h4>FC Barcelona Home Kit Jersey Authentic 25/26</h4>
                    </div>
                    <div className="bestsellers-section-item-btn">
                        <a href="#">Checkout Item</a>
                    </div>
                </div>
                <div className="bestsellers-section-item">
                    <div className="bestsellers-section-topsale">
                        <h4>Top Sale</h4>
                    </div>
                    <div className="bestsellers-section-item-pic">
                        <img src="/images/arsenal2.png" alt="" />
                    </div>
                    <div className="bestsellers-section-item-details">
                        <h4>IDR. 1.350.000 ,-</h4>
                        <div className="bestsellers-star">
                            <ion-icon  name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                            <ion-icon name="star"></ion-icon>
                        </div>
                    </div>
                    <div className="bestsellers-section-item-title">
                        <h4>FC Barcelona Home Kit Jersey Authentic 25/26</h4>
                    </div>
                    <div className="bestsellers-section-item-btn">
                        <a href="#">Checkout Item</a>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MainBestsellers;