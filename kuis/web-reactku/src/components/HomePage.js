import React from "react";
import Product from "./Product";

const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/assets/images/home/bg1.jpg" class="d-block w-100" alt="Banner" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Paris, France (March, 2016)</h5>
                            <p>More than just the world’s fashion epicenter, the quickly developing Parisian skate scene made the French capital a clear choice.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/bg2.jpg" class="d-block w-100" alt="Banner" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>New York, New York (April, 1994)</h5>
                            <p>In April of 1994, James Jebbia left the Stussy chapter store he helped open on Prince street to launch his own label, Supreme.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/bg3.jpg" class="d-block w-100" alt="Banner" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Daikanyama, Tokyo, Japan (1998)</h5>
                            <p>With a near nationwide culture of collecting, Japanese shoppers often stopped by Supreme in the early days and bought just about everything store employees would let them.</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="/assets/images/home/bg4.jpg" class="d-block w-100" alt="Banner" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Los Angeles, California (2004)</h5>
                            <p>For six years Supreme only operated those four stores—three in Japan, and the NYC flagship. Then, in 2004, after months of rumors, Supreme officially opened in Los Angeles.</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Product />
        </div>
    );
};

export default Home;