import { useEffect, useState } from "react";

function MainNavbar() {
    // untuk text promo berganti
    const [activeIndex, setActiveIndex] = useState(0);

    // buka/tutup menu Collections
    const [showCollections, setShowCollections] = useState(false);
    const [showProduct, setShowProduct] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev === 0 ? 1 : 0));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <nav className="golazo-navbar">
            <div className="golazo-navbar-top">
                <h2 className={activeIndex === 0 ? "show" : "hide"}>
                    20% Student Discount <a href="#">Explore Now</a>
                </h2>
                <h2 className={activeIndex === 1 ? "show" : "hide"}>
                    New Iconic Jersey Collections <a href="#">Browse Now</a>
                </h2>
            </div>
            <div className="golazo-navbar-bottom">
                <div className="golazo-navbar-logo">
                    <a href="#"><img src="/images/golazo-apparel-logo1.png" alt="" /></a>
                </div>
                <div className="golazo-navbar-menu">
                    <ul className="navbar-menus">
                        <li className="collections-menu" onMouseEnter={() => setShowCollections(true)} onMouseLeave={() => setShowCollections(false)}>
                            <a href="#" onClick={(e) => {
                                e.preventDefault();
                                setShowCollections((prev) => !prev);
                            }}>
                                Collections
                            </a>
                            <div className={`golazo-all-cmenu ${showCollections ? "active" : ""}`}>
                                <div className="golazo-cmenus-left">
                                    <div className="golazo-cmenu-title">
                                        <h3>Featured</h3>
                                    </div>
                                    <a href="#">Fresh Arrivals</a>
                                    <a href="#">Trending Jersey</a>
                                    <a href="#">Golazo Bestsellers</a>
                                    <a href="#">Iconic Kits</a>
                                </div>
                                <div className="golazo-cmenus-mid1">
                                    <div className="golazo-cmenu-title">
                                        <h3>Clubs</h3>
                                    </div>
                                    <a href="#">Arsenal</a>
                                    <a href="#">Manchester United</a>
                                    <a href="#">Manchester City</a>
                                    <a href="#">PSG</a>
                                    <a href="#">Liverpool</a>
                                    <a href="#">Chelsea</a>
                                    <a href="#">Inter Milan</a>
                                    <a href="#">FC Bayern Munich</a>
                                    <a href="#">Juventus FC</a>
                                    <a href="#" className="seeAll">See All Clubs</a>
                                </div>
                                <div className="golazo-cmenus-mid2">
                                    <div className="golazo-cmenu-title">
                                        <h3>National Teams</h3>
                                    </div>
                                    <a href="#">Germany</a>
                                    <a href="#">Spain</a>
                                    <a href="#">Argentina</a>
                                    <a href="#">Brazil</a>
                                    <a href="#">Netherlands</a>
                                    <a href="#">Indonesia</a>
                                    <a href="#">Malaysia</a>
                                    <a href="#">England</a>
                                    <a href="#">Belgium</a>
                                    <a href="#">Norway</a>
                                    <a href="#" className="seeAll">See All National Teams</a>
                                </div>
                                <div className="golazo-cmenus-right">
                                    <div className="golazo-cmenu-title">
                                        <h3>Epic Collections</h3>
                                    </div>
                                    <a href="#">World Cup Memories</a>
                                    <a href="#">Champions Heritage</a>
                                    <a href="#">Rivalries</a>
                                    <a href="#">Legends Collection</a>
                                    <a href="#">Fan Favorites</a>
                                    <a href="#">Golazo Exclusive</a>
                                </div>
                            </div>
                        </li>
                        <li className="product-menu" onMouseEnter={() => setShowProduct(true)} onMouseLeave={() => setShowProduct(false)}><a href="#">Product</a>
                            <div className="golazo-product-menu">
                            <div className="golazo-cmenus-left">
                                    <div className="golazo-cmenu-title">
                                        <h3>On-Pitch Essentials</h3>
                                    </div>
                                    <a href="#">Club Jersey</a>
                                    <a href="#">National Team Jersey</a>
                                    <a href="#">Retro Jersey</a>
                                    <a href="#">Iconic Jersey</a>
                                    <a href="#">Player Edition</a>
                                    <a href="#">Fan Edition</a>
                                </div>
                                <div className="golazo-cmenus-mid1">
                                    <div className="golazo-cmenu-title">
                                        <h3>Apparel & Gear</h3>
                                    </div>
                                    <a href="#">Training Wear</a>
                                    <a href="#">Lifestyle Apparel</a>
                                    <a href="#">Outerwear</a>
                                    <a href="#">Footwear</a>
                                    <a href="#">Accessories</a>
                                </div>
                                <div className="golazo-cmenus-mid2">
                                    <div className="golazo-cmenu-title">
                                        <h3>Special Categories</h3>
                                    </div>
                                    <a href="#">Women's Collection</a>
                                    <a href="#">Kids & Youth</a>
                                    <a href="#">Custom Jersey</a>
                                    <a href="#">Limited Edition</a>
                                    <a href="#">Bundle Pack</a>
                                </div>
                                <div className="golazo-cmenus-right">
                                    <div className="golazo-cmenu-title">
                                        <h3>Golazo Highlights</h3>
                                    </div>
                                    <a href="#">New Season Kits</a>
                                    <a href="#">Editor's Picks</a>
                                    <a href="#">Back in Stock</a>
                                    <a href="#">Global Exclusives</a>
                                </div>
                            </div>
                        </li>
                        <li><a href="#">Promo</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>
                <div className="golazo-navbar-acc">
                    <div className="golazo-searchbar">
                        <input type="text" placeholder="Find Jersey ..." />
                        <ion-icon name="search-outline"></ion-icon>
                    </div>
                    <div className="golazo-favorite">
                        <ion-icon name="heart-outline"></ion-icon>
                        <div className="golazo-fav-count">
                            <p>6</p>
                        </div>
                        <div className="golazo-minimenu">
                            <div className="golazo-minimenu-title">
                                <h3>Favorites</h3>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Picture</th>
                                        <th>Product Name</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className="minimenu-img"><img src="/images/arsenal.png" alt="" /></td>
                                        <td><a href="#">Men's Player Issue Adidas Arsenal Home Jersey 25/26</a></td>
                                        <td><button><ion-icon name="trash"></ion-icon></button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className="minimenu-img"><img src="/images/madrid.png" alt="" /></td>
                                        <td><a href="#">Men's Player Issue Adidas Real Madrid Home Jersey 25/26</a></td>
                                        <td><button><ion-icon name="trash"></ion-icon></button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td className="minimenu-img"><img src="/images/barca.png" alt="" /></td>
                                        <td><a href="#">Men's Player Issue Adidas Barcelona Home Jersey 25/26</a></td>
                                        <td><button><ion-icon name="trash"></ion-icon></button></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            <br />
                            <br />
                            <div className="minimenu-detailsbtn">
                                <a href="#">See All Favorites</a>
                            </div>
                        </div>
                    </div>
                    <div className="golazo-cart">
                        <ion-icon name="cart-outline"></ion-icon>
                        <div className="golazo-cart-count">
                            <p>7</p>
                        </div>
                        <div className="golazo-minimenu-cart">
                            <div className="golazo-minimenu-title">
                                <h3>Your Cart</h3>
                            </div>
                            <table>
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Picture</th>
                                        <th>Product Name</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td className="minimenu-img"><img src="/images/arsenal.png" alt="" /></td>
                                        <td><a href="#">Men's Player Issue Adidas Arsenal Home Jersey 25/26</a></td>
                                        <td><button><ion-icon name="trash"></ion-icon></button></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td className="minimenu-img"><img src="/images/madrid.png" alt="" /></td>
                                        <td><a href="#">Men's Player Issue Adidas Real Madrid Home Jersey 25/26</a></td>
                                        <td><button><ion-icon name="trash"></ion-icon></button></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td className="minimenu-img"><img src="/images/barca.png" alt="" /></td>
                                        <td><a href="#">Men's Player Issue Adidas Barcelona Home Jersey 25/26</a></td>
                                        <td><button><ion-icon name="trash"></ion-icon></button></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                            <br />
                            <br />
                            <div className="minimenu-detailsbtn">
                                <a href="#">Checkout Item</a>
                            </div>
                        </div>
                    </div>
                    <div className="golazo-profile">
                        <ion-icon name="person-circle-outline"></ion-icon>
                        <div className="golazo-profile-minimenu">
                            <a href="#">My Profile</a>
                            <a href="#">History</a>
                            <a href="#" className="icon-profile"><ion-icon name="log-out-outline"></ion-icon>Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default MainNavbar;
