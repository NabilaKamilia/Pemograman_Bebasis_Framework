import React from "react";
import { NavLink } from "react-router-dom";
import "./Style.css";

const About = () => {
    return (
        <div>
            <div className="container my-5">
                <h1 className="text-danger fw-bold mb-4">Tentang Kami</h1>
                <div className="row">
                    <div className="col-md-6">
                        <p className="lead mb-4">Supreme adalah sebuah merek pakaian dan papan luncur asal Amerika Serikat yang didirikan di New York City pada bulan April 1994. Merek ini mencoba mengangkat budaya seluncur papan dan hip hop, serta budaya pemuda secara umum. Merek ini memproduksi pakaian, replika, aksesoris, serta papan luncur. Sepatu, pakaian, dan aksesorisnya juga dijual di pasar sekunder. Logo kotak merah khas "Supreme" dengan huruf Futura Heavy Oblique berwarna putih terinspirasi dari seni propaganda Barbara Kruger. Supreme merilis produk baru melalui gerai ritelnya di seluruh dunia serta di situs webnya tiap hari Kamis pagi di Eropa dan Amerika, serta pada hari Sabtu di Jepang.</p>
                        <NavLink to="/bukutamu" className="btn btn-outline-danger px-3">
                            Kontak Kami
                        </NavLink>
                    </div>
                    {/* <div className="col-md-6 d-flex justify-content-center"> */}
                    <div className="col-md-6">
                        {/* <img src="/assets/images/oreo.png" alt="About Us" height="400px" width="400px" /> */}
                        <div class="map-responsive">
                            <iframe title="Store Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13276429.237327322!2d139.706698!3d35.669227!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b040a4398e8539d!2sSupreme%20Harajuku!5e0!3m2!1sid!2sid!4v1641538297358!5m2!1sid!2sid" width={"500"} height={"350"} style={{ border: "0" }} allowfullscreen={""} loading={"lazy"} />
                        </div>
                        <ul>
                            <li class="address">4 Chome-32-7 Jingumae, Shibuya City, Tokyo 150-0001, Jepang</li>
                            <li class="telepon">+628123456789</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;