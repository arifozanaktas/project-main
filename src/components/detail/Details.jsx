import React from 'react'

function Detail() {
    return (
        <>
            <section className="eventDetailHeader" style={{ backgroundImage: "url(https://b6s54eznn8xq.merlincdn.net/Content/newsite/images/general3.jpg?v=5)" }}>

                <form method="POST" action="/tr-tr/muzik/koltuk_secimi" id="SeanceForm">
                    <input type="hidden" id="seanceId" name="seanceId" value="0" />
                    <input type="hidden" id="lang" name="lang" value="tr" />
                    <input type="hidden" id="key" name="key" />
                </form>

                <div className="eventHeaderContent ">
                    <div className="container">
                        <div className="eventSummary">
                            <div className="poster">
                                <img loading="lazy" alt="An Epic Symphony &amp; Mustafa Sandal" src="https://b6s54eznn8xq.merlincdn.net/Uploads/Films/an-epic-symphony-mustafa-sandal-2024611144754051e525d86ec4458b55f06be9857ef40.jpg" class="eventPoster" />
                            </div>


                            <div className="eventDetails">

                                <h1 itemprop="name">An Epic Symphony &amp; Mustafa Sandal</h1>


                                <div>
                                    <a href="/tr-tr/sehrineozel/antalya" className="etkinlikkonum" >Antalya </a>
                                    <span>, </span>
                                    <a href="/tr-tr/sehrineozel/bursa" className="etkinlikkonum" >Bursa </a>
                                    <span>, </span>
                                    <a href="/tr-tr/sehrineozel/istanbul-avrupa" className="etkinlikkonum" >İstanbul Avrupa </a>
                                    <span>, </span>
                                    <a href="/tr-tr/sehrineozel/izmir" className="etkinlikkonum" >İzmir </a>
                                    <span>, </span>
                                    <a href="/tr-tr/sehrineozel/ankara" className="etkinlikkonum" >Ankara </a>
                                </div>
                                <span className="seanceDate">

                                    27 Temmuz Cumartesi - 25 Eyl&#252;l 2024 &#199;arşamba                            </span>





                                <ul className="eventTags">
                                    <li><span itemprop="genre">Konser</span></li>

                                </ul>

                            </div>
                        </div>

                        <button style={{ fontSize: "1.4rem" }} className="biletiniAlLg full flex alignCenter justifyCenter">

                            <span>BİLETİNİ AL</span>
                        </button>


                    </div>
                </div>
            </section>

            <section className="eventDetailBody @*flex*@">
                <div className="container">
                    <div className="flex alignStart justifyStart">
                        <div className="tabButtons flex alignEnd justifyStart">
                            <button className="active" data-tab="event-desc">A&#231;ıklama</button>


                        </div>
                    </div>
                    <div className="tabContentWrapper flex directionColumn fluid">

                        <div data-content="event-desc" className="tabContent flex directionColumn activeContent">
                            <p><strong>An Epic Symphony & Mustafa Sandal Konseri</strong></p>

                            <p><strong>Yaş Sınırı : 6+</strong></p>

                            <p><strong>** 6 Yaş altı etkinlik alanına alınmamaktadır. ** </strong></p>

                            <p>Events Across Turkey, main projesi ISTANBUL NIGHT FLIGHT 10. Sezonunda yeniden dünya starlarını ağırlamaya hazırlanıyor.<br />
                                <br />
                                Ülkemizin en önemli pop starı Mustafa Sandal Events Across Turkey’in bir kült haline gelen An Epic Symphony projesiyle TULUĞ TIRPAN - ÖZGÜR SEVİNÇ yönetiminde Night Flight Symphony Orchestra & Choir eşliğinde büyük bir gösteri ile dinleyiciler karşısına çıkıyor. </p>

                            <p> </p>


                            <p>
                            </p>


                        </div>






                        <div data-content="commentEtkinlikKurallari" className="tabContent row">
                            <p><strong>*Satın alınan biletlerde iptal, iade ve değişiklik yapılmamaktadır.</strong></p>

                            <p>- 6 Yaş altı etkinlik alanına alınmamaktadır. 6 ve 6 yaş üstü her yaştan katılımcı bilete tabidir. </p>

                            <p>- Organizasyon şirketi, öngörülmeyen ve kaçınılmaz nedenlerden ötürü programda her türlü değişiklik yapma hakkını saklı tutar.</p>

                            <p>- Organizasyon şirketi, bilet fiyatlarında değişiklik yapma hakkına sahiptir.</p>

                            <p>- Etkinlik alanına dışarıdan yiyecek ve içecek alınmamaktadır.</p>

                            <p>- Etkinlik alanına profesyonel ses ve görüntü araçları (video kamera ve fotoğraf makinası) ile girilmemektedir. </p>

                            <p>- Tüm katılımcıların kimliklerini yanlarında bulundurması ve istendiğinde ibraz etmeleri gerekmektedir.</p>

                            <p>- Güvenlik personeli, etkinlik alanına giren herkesi güvenlik aramasına tabii tutacaktır.</p>

                            <p>- Etkinlik alanına giriş yapan seyircilerin alandan çıkış yapmaları halinde haklarını kaybederler, tekrar alana girebilmeleri için yeni bilet satın almaları gerekmektedir.  </p>

                            <p>- Etkinliğe katılan kişilerin fotoğraf ve video çekimlerinin tanıtım materyallerinde kullanım hakkı etkinlik organizasyonuna ait olup katılımcı, etkinliğe katılarak bu hakkın kullanılmasını kabul etmektedir.</p>

                        </div>


                    </div>
                </div>


            </section>


        </>
    )
}

export default Detail