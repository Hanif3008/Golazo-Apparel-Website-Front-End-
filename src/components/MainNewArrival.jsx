import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import {Autoplay} from "swiper/modules";
import "aos/dist/aos.css"



function MainNewArrival() {
     const items = [
    {
      team: "Arsenal",
      img: "/images/saliba.jpg",
      title: "Arsenal 25/26 Main Kit",
      desc: "An football icon reimagined",
      price: "IDR. 1.200.000,-",
      color: "#8c1007",
    },
    {
      team: "Man City",
      img: "/images/city.png",
      title: "Man City 25/26 Main Kit",
      desc: "An football icon reimagined",
      discount: "IDR. 1.050.000,-",
      price: "IDR. 1.300.000,-",
      color: "#3396d3",
    },
    {
      team: "Liverpool",
      img: "/images/liverpool.png",
      title: "Liverpool 25/26 Main Kit",
      desc: "An football icon reimagined",
      price: "IDR. 1.350.000,-",
      color: "#e62727",
    },
    {
      team: "Chelsea",
      img: "/images/chelsea.png",
      title: "Chelsea 25/26 Main Kit",
      desc: "An football icon reimagined",
      discount: "IDR. 1.050.000,-",
      price: "IDR. 1.300.000,-",
      color: "#34699a"
    },
    {
      team: "Madrid",
      img: "/images/madridpic.png",
      title: "Real Madrid 25/26 Main Kit",
      desc: "An football icon reimagined",
      discount: "IDR. 1.050.000,-",
      price: "IDR. 1.300.000,-",
      color: "#f1f1f1"
    },
    {
        team: "AC Milan",
        img: "/images/milan.png",
        title: "AC Milan 25/26 Main Kit",
        desc: "An football icon reimagined",
        discount: "IDR. 1.050.000,-",
        price: "IDR. 1.300.000,-",
        color: "#8c1007"
      },
  ];
    return(
        <div className="golazo-newarrival-wrappers" data-aos="fade-up">
            <div className="golazo-newarrival-title">
                <div className="golazo-newarrival-title-left">
                    <h2>Fresh Arrival, Hot Off The Pitch</h2>
                </div>
                <div className="golazo-newarrival-viewall">
                    <a href="#">View All <ion-icon name="arrow-forward-outline"></ion-icon></a>
                </div>
            </div>
        <div className="golazo-newarrival-wrapper">
            <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={5} loop={true} navigation={{ clickable: true }} autoplay={{delay:2500, disableOnInteraction: false,}}>
            {items.map((item, idx) => (
                <SwiperSlide key={idx}>
                <div className="golazo-newarrival-item">
                    <div className="golazo-newarrival-itemname">
                        <div className="golazo-item-pic">
                            <img src={item.img} alt={item.team} />
                        </div>
                        <div className="golazo-item-team">
                            <h3 style={{ color: item.color }}>{item.team}</h3>
                        </div>
                    </div>
                    <div className="golazo-newarrival-item-detail">
                        <div className="golazo-newarrival-item-title-detail">
                            <h3>{item.title}</h3>
                        </div>
                        <div className="golazo-newarrival-item-desc">
                            <p>{item.desc}</p>
                        </div>
                        <div className="golazo-newarrival-item-price">
                        {item.discount && <p className="golazo-discount">{item.discount}</p>}
                            <p className={item.discount ? "golazo-price" : ""}>{item.price}</p>
                        </div>
                        <div className="golazo-newarrival-item-btn">
                        <a href="#">
                            Buy Now <ion-icon name="arrow-forward-outline"></ion-icon>
                        </a>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        ))}
        </Swiper>
            </div>
        </div>
    );
}

export default MainNewArrival;
