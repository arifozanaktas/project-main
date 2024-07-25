import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        playSpeed: 2000,
    };


    return (
        <>
            <section className="hero">
                <div className="aramaOverlay"></div>
                <div className="heroSlider">
                    <Slider {...settings}>
                        <a className="sliderItem" data-order="1" href="/tr-tr/muzik/serdar-ortac-konseri">
                            <picture>
                                <source
                                    srcSet='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/7ed2357052bd4435bd04dac114c32ff4.jpg'
                                    media="(max-width: 667px)"
                                />
                                <source
                                    srcSet='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/ef4d7c93023f4b3788b583030463e6d7.jpg'
                                    media="(max-width: 1800px)"
                                />
                                <img
                                    src='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/ef4d7c93023f4b3788b583030463e6d7.jpg'
                                    alt="Serdar Ortaç Konseri"
                                />
                            </picture>
                        </a>
                        <a className="sliderItem" data-order="2" href="/tr-tr/sinema/merhamet-hikayeleri">
                            <picture>
                                <source
                                    srcSet='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/4dfb393d03dd4f4a8bdb776117036434.jpg'
                                    media="(max-width: 667px)"
                                />
                                <source
                                    srcSet='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/cebbab9532074f3db0d18f6d9e3d218b.jpg'
                                    media="(max-width: 1800px)"
                                />
                                <img
                                    src='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/cebbab9532074f3db0d18f6d9e3d218b.jpg'
                                    alt="Description of the image"
                                />
                            </picture>
                        </a>
                        <a className="sliderItem" data-order="3" href="/tr-tr/muzik/motive-konseri">
                            <picture>
                                <source
                                    srcSet='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/bafc094081bc4e4b987cb2d77658c397.jpg'
                                    media="(max-width: 667px)"
                                />
                                <source
                                    srcSet='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/9b2742ef456043dfb531f93e44d49bbd.jpg'
                                    media="(max-width: 1800px)"
                                />
                                <img
                                    src='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/9b2742ef456043dfb531f93e44d49bbd.jpg'
                                    alt="Description of the image"
                                />
                            </picture>
                        </a>
                        <a className="sliderItem" data-order="4" href="/tr-tr/muzik/semicenk">
                            <picture>
                                <source
                                    srcSet='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/43a495b0fe8f4f05a1e62131bb9f1ab9.jpg'
                                    media="(max-width: 667px)"
                                />
                                <source
                                    srcSet='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/cfd63b4a394b4de3ae1d348e4db8b9fd.jpg'
                                    media="(max-width: 1800px)"
                                />
                                <img
                                    src='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/cfd63b4a394b4de3ae1d348e4db8b9fd.jpg'
                                    alt="Description of the image"
                                />
                            </picture>
                        </a>
                        <a className="sliderItem" data-order="5" href="/tr-tr/tiyatro/anadolu-atesi---">
                            <picture>
                                <source
                                    srcSet='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/c6a73d73202f413da9f8b8e43beb8509.jpg'
                                    media="(max-width: 667px)"
                                />
                                <source
                                    srcSet='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/835041d029f94ccc9a415fe4be97e290.jpg'
                                    media="(max-width: 1800px)"
                                />
                                <img
                                    src='https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/835041d029f94ccc9a415fe4be97e290.jpg'
                                    alt="Description of the image"
                                />
                            </picture>
                        </a>
                    </Slider>
                </div>
            </section>

            <section className="hikayeYN">
                <div>
                    <ul>
                        <li className="hikayeYN_hikaye">
                            <a href="/tr-tr/mekan/jolly-joker-alacati" title="Jolly Joker Private Ala&#231;atı"></a>
                            <figure className="hikayeYN_hikaye_img"><img loading="lazy"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/HighlightBanner/9048324e217548788585a7fe186a932f.png"
                                alt="alt" /></figure>
                            <div className="hikayeYN_hikaye_div">
                                <h3>Jolly Joker Private Ala&#231;atı</h3>
                            </div>
                        </li>
                        <li className="hikayeYN_hikaye">
                            <a href="/tr-tr/etkinlikleri/istanbul-night-flight" title="İstanbul Night Flight"></a>
                            <figure className="hikayeYN_hikaye_img"><img loading="lazy"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/HighlightBanner/90077eb4a86a4ecd8a6a135bea0ed69c.png"
                                alt="alt" /></figure>
                            <div className="hikayeYN_hikaye_div">
                                <h3>İstanbul Night Flight</h3>
                            </div>
                        </li>
                        <li className="hikayeYN_hikaye">
                            <a href="/tr-tr/mekan/istinyeart-100-performans-arena" title="İstinyeArt %100 Performans Arena"></a>
                            <figure className="hikayeYN_hikaye_img"><img loading="lazy"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/HighlightBanner/istinyeart-100-performans-arena-2023410132032.png"
                                alt="alt" /></figure>
                            <div className="hikayeYN_hikaye_div">
                                <h3>İstinyeArt %100 Performans Arena</h3>
                            </div>
                        </li>
                        <li className="hikayeYN_hikaye">
                            <a href="/tr-tr/etkinlikleri/bkm" title="BKM"></a>
                            <figure className="hikayeYN_hikaye_img"><img loading="lazy"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/HighlightBanner/6b4e20093cf748858e0cccdf4e75fbba.png"
                                alt="alt" /></figure>
                            <div className="hikayeYN_hikaye_div">
                                <h3>BKM</h3>
                            </div>
                        </li>
                        <li className="hikayeYN_hikaye">
                            <a href="/tr-tr/etkinlikleri/istanbul-akm-etkinlikleri"
                                title="Atat&#252;rk K&#252;lt&#252;r Merkezi"></a>
                            <figure className="hikayeYN_hikaye_img"><img loading="lazy"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/HighlightBanner/ataturk-kultur-merkezi-2023410131926.png"
                                alt="alt" /></figure>
                            <div className="hikayeYN_hikaye_div">
                                <h3>Atat&#252;rk K&#252;lt&#252;r Merkezi</h3>
                            </div>
                        </li>
                        <li className="hikayeYN_hikaye">
                            <a href="/tr-tr/etkinlikleri/fisekhane-etkinlikleri" title="Fişekhane"></a>
                            <figure className="hikayeYN_hikaye_img"><img loading="lazy"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/HighlightBanner/3d81ae5ed46d41ae9f8b4324d1f35255.webp"
                                alt="alt" /></figure>
                            <div className="hikayeYN_hikaye_div">
                                <h3>Fişekhane</h3>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>

            <section className="splitGridView ">
                <div className="container">

                    <div className="alanTitle">
                        <h1 style={{ color: "black !important" }}>Konserler </h1>
                        <a href="/tr-tr/etkinlikleri/konserler" className="tumuBtn ">T&#252;m&#252;n&#252; Keşfet<img
                            src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/kesfetsag.svg" alt="Tümü İkonu" /></a>
                    </div>

                    <div className="splitBody">

                        <a className="splitItem" href="/tr-tr/muzik/an-epic-symphony-mustafa-sandal">

                            <img loading="lazy" alt="An Epic Symphony &amp; Mustafa Sandal"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/e4e8c8efcfae44d5a268b8d8c47213b5.jpg" />

                            <p className="overlayView lg">
                                <strong>An Epic Symphony &amp; Mustafa Sandal</strong>
                                <span>Antalya / Akt&#252;el A&#231;ıkhava Sahnesi –Antalya (Kepez A&#231;ıkhava)</span>

                            </p>

                            <div className="date">
                                <span>27 </span>
                                <span>Temmuz </span>
                                <span>2024 </span>
                            </div>

                        </a>

                        <div className="splitItem split4">
                            <a href="/tr-tr/muzik/an-epic-symphony-pentagram"
                                style={{ backgroundImage: 'url(https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/b99cd84ad6b64f0f92dea80fc622d498.jpg)' }}
                            >

                                <p className="overlayView">
                                    <strong>An Epic Symphony &amp; Pentagram</strong>
                                    <span>İzmir / Izmir K&#252;lt&#252;rpark A&#231;ikhava Tiyatrosu</span>
                                </p>

                                <div className="date">
                                    <span>03 </span>
                                    <span>Ağustos </span>
                                    <span>2024 </span>
                                </div>

                            </a>
                            <a href="/tr-tr/muzik/cem-adrian-eat"
                                style={{ backgroundImage: "url(https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/883c67c646a6495094136479e29bb337.jpg)" }}>

                                <p className="overlayView">
                                    <strong>An Epic Symphony &amp; Cem Adrian</strong>
                                    <span>Bursa / Bursa K&#252;lt&#252;r Park A&#231;ikhava Tiyatrosu.</span>
                                </p>

                                <div className="date">
                                    <span>31 </span>
                                    <span>Temmuz </span>
                                    <span>2024 </span>
                                </div>

                            </a>
                            <a href="/tr-tr/muzik/zeynep-bastik-yby"
                                style={{ backgroundImage: "url(https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/71d21cc6479042e693bdc2f4fea3ccac.jpg)" }}>

                                <p className="overlayView">
                                    <strong>Zeynep Bastık</strong>
                                    <span>İzmir / Stage On The Beach</span>
                                </p>

                                <div className="date">
                                    <span>03 </span>
                                    <span>Ağustos </span>
                                    <span>2024 </span>
                                </div>

                            </a>
                            <a href="/tr-tr/muzik/serdar-ortac-konseri"
                                style={{ backgroundImage: "url(https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/cf540a1cd97e4a528c1f318f0fbfaa7d.jpg)" }}>

                                <p className="overlayView">
                                    <strong>Serdar Orta&#231; Konseri</strong>
                                    <span>Bursa / Bursa K&#252;lt&#252;rpark A&#231;ikhava Tiyatrosu</span>
                                </p>

                                <div className="date">
                                    <span>14 </span>
                                    <span>Eyl&#252;l </span>
                                    <span>2024 </span>
                                </div>

                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="carouselComp">
                <div className="third_slider container">
                    <div className="alanTitle">
                        <h1>
                            Festivaller
                        </h1>
                        <a href="/tr-tr/etkinlikleri/turkiye-kultur-yolu-festivalleri" title="Festivaller"
                            className="tumuBtn ">T&#252;m&#252;n&#252; Keşfet<img
                                src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/kesfetsag.svg" alt="Tümü İkonu" /></a>
                    </div>

                    <div className="container">
                        <div className="carousel owl-carousel owl-theme mt-20 mb-20 captionBottom dob2023 owl-loaded owl-drag"
                            data-carousel="true" data-desktop="3" data-template="overcaption" data-mobile="1">

                            <div className="owl-stage-outer">
                                <div className="owl-stage"
                                    style={{ transform: " translate3d(0px, 0px, 0px)", transition: "all 0.25s ease 0s", width: "1280px" }}>
                                    <div className="owl-item active" style={{ width: "310px", marginRight: "10px" }}>
                                        <a className="item" href="/tr-tr/mekan/uluslararasi-aspendos-opera-ve-bale-festivali">
                                            <img loading="lazy"
                                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/a8ab9d2b79de4f7bb34d429fc870c3e3.jpg" />

                                            <strong></strong>


                                            <time className="date"></time>


                                        </a>
                                    </div>
                                    <div className="owl-item active" style={{ width: "310px", marginRight: "10px" }}>
                                        <a className="item" href="/tr-tr/etkinlikleri/21-uluslararasi-bodrum-bale-festivali">
                                            <img loading="lazy"
                                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/b5d10c0bed084751af205590c5fb4a3a.jpg" />

                                            <strong></strong>


                                            <time className="date"></time>


                                        </a>
                                    </div>
                                    <div className="owl-item active" style={{ width: "310px", marginRight: "10px" }}>
                                        <a className="item" href="/tr-tr/etkinlikleri/turkiye-kultur-yolu-festivalleri">
                                            <img loading="lazy"
                                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/a1b654699dd041eab9432843d2a28510.jpg" />

                                            <strong></strong>


                                            <time className="date"></time>


                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="equalGridView">
                <div className="container">


                    <div className="alanTitle">
                        <h1>K&#252;&#231;&#252;k&#199;iftlik Park </h1>
                        <a href="/tr-tr/mekan/kucukciftlik-park" className="tumuBtn ">T&#252;m&#252;n&#252; Keşfet<img
                            src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/kesfetsag.svg" alt="Tümü İkonu" /></a>
                    </div>

                    <div className="equalBody">
                        <a href="/tr-tr/muzik/artbat">
                            <img loading="lazy" alt="ARTBAT"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/3c43134bceb74d32a71abd111f27eb69.jpg" />
                            <p className="overlayView lg">
                                <strong> ARTBAT</strong>


                                <span>İstanbul Avrupa / K&#252;&#231;&#252;k&#199;iftlik Park</span>

                            </p>
                            <div className="date">
                                <span>20</span>
                                <span>Eyl&#252;l</span>
                                <span>2024</span>
                            </div>
                        </a>
                        <a href="/tr-tr/muzik/in-flames">
                            <img loading="lazy" alt="In Flames"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/9f561fdf01f4444fb0ed5181e0a19f7c.png" />
                            <p className="overlayView lg">
                                <strong> In Flames</strong>


                                <span>İstanbul Avrupa / K&#252;&#231;&#252;k&#199;iftlik Park</span>

                            </p>
                            <div className="date">
                                <span>01</span>
                                <span>Ekim</span>
                                <span>2024</span>
                            </div>
                        </a>
                        <a href="/tr-tr/muzik/100-muzik-sunar-the-white-buffalo-konseri">
                            <img loading="lazy" alt="%100 M&#252;zik Sunar: The White Buffalo Konseri"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/050c69d436804c05b07814951b7b6079.jpg" />
                            <p className="overlayView lg">
                                <strong> %100 M&#252;zik Sunar: The White Buffalo Konseri</strong>


                                <span>İstanbul Avrupa / K&#252;&#231;&#252;k&#199;iftlik Park</span>

                            </p>
                            <div className="date">
                                <span>01</span>
                                <span>Kasım</span>
                                <span>2024</span>
                            </div>
                        </a>
                        <a href="/tr-tr/muzik/accept-konseri">
                            <img loading="lazy" alt="%100 Metal Sunar: Accept"
                                src="https://b6s54eznn8xq.merlincdn.net/Uploads/Slider/9e8e5f7d2fad47a1b222454580d5c72b.jpg" />
                            <p className="overlayView lg">
                                <strong> %100 Metal Sunar: Accept</strong>


                                <span>İstanbul Avrupa / K&#252;&#231;&#252;k&#199;iftlik Park</span>

                            </p>
                            <div className="date">
                                <span>17</span>
                                <span>Ekim</span>
                                <span>2024</span>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <section className="newsletter">
                <div id="spinner-subscription" style={{ display: "none", textAlign: "center" }}>
                    <img src='https://b6s54eznn8xq.merlincdn.net/Content/newsite/assets/images/ajax-loader.gif' />
                </div>
                <div className="NewsLetterResult" style={{ backgroundColor: "lightgreen", color: "darkgreen", padding: "8px", display: "none" }}>

                </div>
                <form action="/Dynamic/SaveMailList" typeof="pos" id="NewsLetterForm">
                    <p><span>Filmlerden, Tiyatrolardan, Konserler ve Festivallerden haberdar olmak i&#231;in e-b&#252;ltenimize
                        kaydolun!</span> </p>
                    <div>
                        <input type="email" name="email" required placeholder="E-Posta Adresiniz" />
                        <button type="submit">Abone Ol !</button>


                    </div>
                    <p>
                        <input type="checkbox" name="txt" required="required" style={{ marginRight: "8px" }} /><a
                            href='/tr-tr/sayfa/ticari-elektronik-ileti-aydinlatma-metni'
                            style={{ textDecoration: "underline", fontWeight: "bold" }}>Ticari elektronik ileti gönderimine ilişkin
                            aydınlatma metnini</a> okudum, anladım ve tarafıma reklam amaçlı E-posta gönderilmesini kabul ediyorum.


                    </p>

                </form>
            </section>
        </>
    )
}

export default HomePage;