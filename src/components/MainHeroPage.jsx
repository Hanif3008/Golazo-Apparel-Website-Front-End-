function MainHeroPage() {
    return (
      <main className="hero-page-wrapper">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/videos/gyokeres2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  
        {/* Overlay */}
        <div className="hero-overlay"></div>
  
        {/* Content */}
        <div className="hero-content">
            <h1>Your Dream. Our Reality.</h1>
            <h2>Same Stripes. New Chapter.</h2>
            <a href="#">Checkout Now<ion-icon name="arrow-forward-outline"></ion-icon></a>
        </div>
      </main>
    );
  }
  
  export default MainHeroPage;
  