import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useEffect } from "react";
import "aos/dist/aos.css"
import AOS from "aos";

function MainTeams() {
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

  const [activeTab, setActiveTab] = useState("clubs");

  const clubs = [
    { teams: "Arsenal", teams_pic: "/images/logo-arsenal.png" },
    { teams: "Benfica", teams_pic: "/images/logo-benfica.png" },
    { teams: "Barcelona", teams_pic: "/images/logo-barcelona.png" },
    { teams: "Juventus", teams_pic: "/images/logo-juventus.png" },
    { teams: "Paris Saint Germain", teams_pic: "/images/logo-psg.png" },
    { teams: "Napoli", teams_pic: "/images/logo-napoli.png" },
    { teams: "Manchester United", teams_pic: "/images/logo-manunited.png" },
    { teams: "Liverpool", teams_pic: "/images/logo-liverpool.png" },
    { teams: "Chelsea", teams_pic: "/images/logo-chelsea.png" },
  ];

  const national = [
    { teams: "Germany", teams_pic: "/images/logo-germany.png" },
    { teams: "England", teams_pic: "/images/logo-england.png" },
    { teams: "Japan", teams_pic: "/images/logo-japan.png" },
    { teams: "Brazil", teams_pic: "/images/logo-brazil.png" },
    { teams: "Argentina", teams_pic: "/images/logo-argentina.png" },
    { teams: "Belgium", teams_pic: "/images/logo-belgium.png" },
    { teams: "Netherland", teams_pic: "/images/logo-netherland.png" },
    { teams: "Spain", teams_pic: "/images/logo-spain.png" },
    { teams: "Norway", teams_pic: "/images/logo-norway.png" },
  ];

  return (
    <div className="main-teams-wrapper" data-aos="fade-up">
      {/* Tabs */}
      <div className="main-teams-choice">
        <div
          className={`main-club-choice ${activeTab === "clubs" ? "active" : ""}`}
        >
          <button onClick={() => setActiveTab("clubs")}>Clubs</button>
        </div>
        <div
          className={`main-national-choice ${activeTab === "nations" ? "active" : ""}`}
        >
          <button onClick={() => setActiveTab("nations")}>Nations</button>
        </div>
      </div>

      {/* Clubs */}
      <div
        className={`main-teams-logo ${activeTab === "clubs" ? "active" : "hidden"}`}
        id="club-teams"
      >
        <Swiper
          className="teams-swiper"
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={8}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {clubs.map((club, idx) => (
            <SwiperSlide key={idx}>
              <div className="main-team-logo">
                <a href="#"><img src={club.teams_pic} alt={club.teams} /></a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Nations */}
      <div
        className={`main-teams-logo ${activeTab === "nations" ? "active" : "hidden"}`}
        id="national-teams"
      >
        <Swiper
          className="teams-swiper"
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={8}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {national.map((nation, idx) => (
            <SwiperSlide key={idx}>
              <div className="main-team-logo">
                <a href="#"><img src={nation.teams_pic} alt={nation.teams} /></a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MainTeams;
