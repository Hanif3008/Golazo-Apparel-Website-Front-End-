import { useEffect } from "react";
import "aos/dist/aos.css"
import AOS from "aos";

function MainReview () {
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
        <div className="main-review-section">
            <div className="main-review-title" data-aos ="fade-up">
                <h1>What Fans Say About Golazo</h1>
            </div>
            <div className="main-review-subtitle">
                <div className="total-review" data-aos= "fade-right">
                    <h2>110+</h2>
                    <h3>Review from our customers</h3>
                </div>
                <div className="total-review-detail"data-aos= "fade-left">
                    <h2>150+ customers already using our services</h2>
                    <a href="#">See All Review <ion-icon name="arrow-forward-outline"></ion-icon></a>
                </div>
            </div>
            <div className="main-review-items" data-aos= "fade-up">
                <div className="main-review-item">
                    <div className="main-review-img">
                        <img src="/images/review-chelsea.png" alt="" />
                    </div>
                    <div className="main-review-user">
                        <h4>filli***@mail.com</h4>
                    </div>
                    <div className="main-review-stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="main-review-detail">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ut quia debitis iure provident quo quae porro sapiente distinctio accusantium!</p>
                    </div>
                    <div className="main-review-product">
                        <img src="/images/chelseakit.png" alt="" />
                        <a href="#">Chelsea FC Home Kit Jersey Authentic 25/26</a>
                    </div>
                </div>
                <div className="main-review-item">
                    {/* <div className="main-review-img">
                        <img src="/images/review-chelsea.png" alt="" />
                    </div> */}
                    <div className="main-review-user">
                        <h4>filli***@mail.com</h4>
                    </div>
                    <div className="main-review-stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="main-review-detail">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ut quia debitis iure provident quo quae porro sapiente distinctio accusantium!</p>
                    </div>
                    <div className="main-review-product">
                        <img src="/images/arsenal.png" alt="" />
                        <a href="#">Arsenal Home Kit Jersey Authentic 25/26</a>
                    </div>
                </div>
            <div className="main-review-item">
                    {/* <div className="main-review-img">
                        <img src="/images/review-chelsea.png" alt="" />
                    </div> */}
                    <div className="main-review-user">
                        <h4>filli***@mail.com</h4>
                    </div>
                    <div className="main-review-stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="main-review-detail">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ut quia debitis iure provident quo quae porro sapiente distinctio accusantium!</p>
                    </div>
                    <div className="main-review-product">
                        <img src="/images/arsenal2.png" alt="" />
                        <a href="#">Arsenal Away Kit Jersey Authentic 25/26</a>
                    </div>
                </div>
                <div className="main-review-item">
                    <div className="main-review-img">
                        <img src="/images/review-barcelona.jpg" alt="" />
                    </div>
                    <div className="main-review-user">
                        <h4>filli***@mail.com</h4>
                    </div>
                    <div className="main-review-stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="main-review-detail">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ut quia debitis iure provident quo quae porro sapiente distinctio accusantium!</p>
                    </div>
                    <div className="main-review-product">
                        <img src="/images/barca.png" alt="" />
                        <a href="#">FC Barcelona Home Kit Jersey Authentic 25/26</a>
                    </div>
                </div>
                <div className="main-review-item">
                    {/* <div className="main-review-img">
                        <img src="/images/review-chelsea.png" alt="" />
                    </div> */}
                    <div className="main-review-user">
                        <h4>filli***@mail.com</h4>
                    </div>
                    <div className="main-review-stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="main-review-detail">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ut quia debitis iure provident quo quae porro sapiente distinctio accusantium!</p>
                    </div>
                    <div className="main-review-product">
                        <img src="/images/barca.png" alt="" />
                        <a href="#">FC Barcelona Home Kit Jersey Authentic 25/26</a>
                    </div>
                </div>
                <div className="main-review-item">
                    {/* <div className="main-review-img">
                        <img src="/images/review-chelsea.png" alt="" />
                    </div> */}
                    <div className="main-review-user">
                        <h4>filli***@mail.com</h4>
                    </div>
                    <div className="main-review-stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="main-review-detail">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ut quia debitis iure provident quo quae porro sapiente distinctio accusantium!</p>
                    </div>
                    <div className="main-review-product">
                        <img src="/images/madrid.png" alt="" />
                        <a href="#">Real Madrid Third Away Jersey Authentic 25/26</a>
                    </div>
                </div>
                <div className="main-review-item">
                    <div className="main-review-img">
                        <img src="/images/review-madrid.jpg" alt="" />
                    </div>
                    <div className="main-review-user">
                        <h4>filli***@mail.com</h4>
                    </div>
                    <div className="main-review-stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="main-review-detail">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ut quia debitis iure provident quo quae porro sapiente distinctio accusantium!</p>
                    </div>
                    <div className="main-review-product">
                        <img src="/images/madrid.png" alt="" />
                        <a href="#">Real Madrid Third Away Jersey Authentic 25/26</a>
                    </div>
                </div>
                <div className="main-review-item">
                    <div className="main-review-img">
                        <img src="/images/review-barcelona.jpg" alt="" />
                    </div>
                    <div className="main-review-user">
                        <h4>filli***@mail.com</h4>
                    </div>
                    <div className="main-review-stars">
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    <div className="main-review-detail">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ut quia debitis iure provident quo quae porro sapiente distinctio accusantium!</p>
                    </div>
                    <div className="main-review-product">
                        <img src="/images/barca.png" alt="" />
                        <a href="#">Chelsea FC Home Kit Jersey Authentic 25/26</a>
                    </div>
                </div>
            </div>
            <div className="main-review-load-all"data-aos= "fade-up">
                <a href="#">Load More</a>
            </div>
        </div>
    )
}

export default MainReview