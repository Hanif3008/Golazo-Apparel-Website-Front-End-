function MainFooter() {
    return (
        <footer>
        <div className="main-footer">
            <div className="footer-left">
                <div className="footer-img">
                    <img src="/images/golazo-apparel-logo1.png" alt="" />
                </div>
                <div className="footer-sosmed">
                    <div className="youtube">
                        <a href="#"><ion-icon name="logo-youtube"></ion-icon></a>
                    </div>
                    <div className="tiktok">
                        <a href="#"><ion-icon name="logo-tiktok"></ion-icon></a>
                    </div>
                    <div className="instagram">
                        <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    </div>
                    <div className="facebook">
                        <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    </div>
                </div>
            </div>
            <div className="footer-1">
                <h3>Menu</h3>
                <ul>
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Best Sellers</a></li>
                    <li><a href="#">Promo</a></li>
                </ul>
            </div>
            <div className="footer-1">
                <h3>Customer Support</h3>
                <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Size Charts</a></li>
                    <li><a href="#">Payments</a></li>
                    <li><a href="#">Shipping</a></li>
                </ul>
            </div>
            <div className="footer-1">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Carrer</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy & Policy</a></li>
                </ul>
            </div>
        </div>
        <div className="copyright">
            <p>© 2025 Golazo Apparel | Made by Rizki Hanif Prasetyo</p>
        </div>
        </footer>
    )
}


export default MainFooter;