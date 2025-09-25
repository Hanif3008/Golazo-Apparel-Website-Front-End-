import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"




function MainTrending(){
    const items = [
        {
            img: "/images/arsenal.png",
            title: "Main Player Issue Adidas Arsenal Home Jersey 25/26",
            stars: "5",
            price: "IDR 1.200.000 ,-",
        },
        {
            img: "/images/arsenal2.png",
            title: "Main Player Issue Adidas Arsenal Away Jersey 25/26",
            stars: "4",
            price: "IDR 1.200.000 ,-",
        },
        {
            img: "/images/madrid.png",
            title: "Main Player Issue Adidas Real Madrid Third Jersey 25/26",
            stars: "4",
            price: "IDR 1.200.000 ,-",
        },
        {
            img: "/images/barca.png",
            title: "Main Player Issue Adidas Barcelona Home Jersey 25/26",
            stars: "4",
            price: "IDR 1.200.000 ,-",
        },
    ]
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
        <div className="main-trending-section">
            <div className="main-trending-left" data-aos="fade-right">
                <div className="main-trending-pic-title">
                    <img src="/images/madridpic.png" alt="" />
                </div>
                <div className="main-trending-title">
                    <h2>On Fire : <br /> The Jersey In Demands</h2>
                    <div className="main-trending-btn">
                        <a href="#">Shop All</a>
                    </div>
                </div>
            </div>
            <div className="main-trending-right" data-aos="fade-left">
            <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={3} loop={true} navigation= {true} autoplay={{delay:3000, disableOnInteraction: false,}}>
                    {items.map((item,idx) => (
                        <SwiperSlide key={idx}>
                            <div className="main-trending-right-item">
                                <div className="main-trending-pic">
                                    <img src={item.img} />
                                </div>
                                <div className="main-trending-item-title">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="main-trending-rating">
                                    {Array.from({ length: 5 }, (_, i) =>
                                        i < item.stars ? (
                                        <ion-icon key={i} name="star"></ion-icon>
                                        ) : (
                                        <ion-icon key={i} name="star-outline"></ion-icon>
                                        )
                                    )}
                                </div>
                                <div className="main-trending-prices">
                                    <p>{item.price}</p>
                                </div>
                                <div className="main-trending-right-btn">
                                    <a href="#">Checkout Now</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default MainTrending;