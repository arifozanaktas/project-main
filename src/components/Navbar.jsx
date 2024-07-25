import React, { useState } from 'react';

function Navbar () {
  const [citySearch, setCitySearch] = useState('');
  
  // Şehir arama işlevi
  const searchCity = (value) => {
    console.log("Searching for city:", value);
    // Burada şehir arama işlemini gerçekleştirin
  };

  // Şehir değiştirme işlevi
  const switchCity = () => {
    console.log("Switching city");
    // Burada şehir değiştirme işlemini gerçekleştirin
  };

  return (
    <>
<section className="cityModal" id="cityModal">
        <div className="cityModalWrapper">
            <span className="title">Biletinial&#39;da etkinlikler bir tık uzağında ! </span>
            <p>Şehrinizi se&#231;ip eğlenceye devam edin.</p>
            <input type="text" id="citySearch" placeholder="Şehir ara" onKeyUp={(event) => this.searchCity(event.target.value)} />
            <div className="cityList" style={{scrollbarWidth: "thin !important"}}>
                        <a data-name="İstanbul (T&#252;m&#252;)" data-id="147" data-plaka="34" data-url="istanbul" data-country="3">
                            <span className="cityNo">34</span>
                            <span className="cityName">İstanbul (T&#252;m&#252;)</span>
                        </a>
                        <a data-name="İstanbul Avrupa" data-id="5" data-plaka="34" data-url="istanbul-avrupa" data-country="3">
                            <span className="cityNo">34</span>
                            <span className="cityName">
                                İstanbul Avrupa
                            </span>
                        </a>
                        <a data-name="İstanbul Anadolu" data-id="77" data-plaka="34" data-url="istanbul-anadolu" data-country="3">
                            <span className="cityNo">34</span>
                            <span className="cityName">
                                İstanbul Anadolu
                            </span>
                        </a>
                        <a data-name="Bursa" data-id="11" data-plaka="16" data-url="bursa" data-country="3">
                            <span className="cityNo">16</span>
                            <span className="cityName">
                                Bursa
                            </span>
                        </a>
                        <a data-name="Ankara" data-id="3" data-plaka="06" data-url="ankara" data-country="3">
                            <span className="cityNo">06</span>
                            <span className="cityName">
                                Ankara
                            </span>
                        </a>
                        <a data-name="İzmir" data-id="24" data-plaka="35" data-url="izmir" data-country="3">
                            <span className="cityNo">35</span>
                            <span className="cityName">
                                İzmir
                            </span>
                        </a>
                        <a data-name="Eskişehir" data-id="19" data-plaka="26" data-url="eskisehir" data-country="3">
                            <span className="cityNo">26</span>
                            <span className="cityName">
                                Eskişehir
                            </span>
                        </a>
                        <a data-name="Adana" data-id="12" data-plaka="01" data-url="adana" data-country="3">
                            <span className="cityNo">01</span>
                            <span className="cityName">
                                Adana
                            </span>
                        </a>
                        <a data-name="Adıyaman" data-id="96" data-plaka="02" data-url="adiyaman" data-country="3">
                            <span className="cityNo">02</span>
                            <span className="cityName">
                                Adıyaman
                            </span>
                        </a>
                        <a data-name="Afyon" data-id="76" data-plaka="03" data-url="afyon" data-country="3">
                            <span className="cityNo">03</span>
                            <span className="cityName">
                                Afyon
                            </span>
                        </a>
                        <a data-name="Ağrı" data-id="97" data-plaka="04" data-url="agri" data-country="3">
                            <span className="cityNo">04</span>
                            <span className="cityName">
                                Ağrı
                            </span>
                        </a>
                        <a data-name="Aksaray" data-id="87" data-plaka="68" data-url="aksaray" data-country="3">
                            <span className="cityNo">68</span>
                            <span className="cityName">
                                Aksaray
                            </span>
                        </a>
                        <a data-name="Amasya" data-id="75" data-plaka="05" data-url="amasya" data-country="3">
                            <span className="cityNo">05</span>
                            <span className="cityName">
                                Amasya
                            </span>
                        </a>
                        <a data-name="Antalya" data-id="23" data-plaka="07" data-url="antalya" data-country="3">
                            <span className="cityNo">07</span>
                            <span className="cityName">
                                Antalya
                            </span>
                        </a>
                        <a data-name="Artvin" data-id="80" data-plaka="08" data-url="artvin" data-country="3">
                            <span className="cityNo">08</span>
                            <span className="cityName">
                                Artvin
                            </span>
                        </a>
                        <a data-name="Aydın" data-id="29" data-plaka="09" data-url="aydin" data-country="3">
                            <span className="cityNo">09</span>
                            <span className="cityName">
                                Aydın
                            </span>
                        </a>
                        <a data-name="Balıkesir" data-id="25" data-plaka="10" data-url="balikesir" data-country="3">
                            <span className="cityNo">10</span>
                            <span className="cityName">
                                Balıkesir
                            </span>
                        </a>
                        <a data-name="Bartın" data-id="35" data-plaka="74" data-url="bartin" data-country="3">
                            <span className="cityNo">74</span>
                            <span className="cityName">
                                Bartın
                            </span>
                        </a>
                        <a data-name="Batman" data-id="95" data-plaka="72" data-url="batman" data-country="3">
                            <span className="cityNo">72</span>
                            <span className="cityName">
                                Batman
                            </span>
                        </a>
                        <a data-name="Bilecik" data-id="86" data-plaka="11" data-url="bilecik" data-country="3">
                            <span className="cityNo">11</span>
                            <span className="cityName">
                                Bilecik
                            </span>
                        </a>
                        <a data-name="Bingöl" data-id="98" data-plaka="12" data-url="bingol" data-country="3">
                            <span className="cityNo">12</span>
                            <span className="cityName">
                                Bingöl
                            </span>
                        </a>
                        <a data-name="Bitlis" data-id="99" data-plaka="13" data-url="bitlis" data-country="3">
                            <span className="cityNo">13</span>
                            <span className="cityName">
                                Bitlis
                            </span>
                        </a>
                        <a data-name="Bolu" data-id="36" data-plaka="14" data-url="bolu" data-country="3">
                            <span className="cityNo">14</span>
                            <span className="cityName">
                                Bolu
                            </span>
                        </a>
                        <a data-name="Burdur" data-id="81" data-plaka="15" data-url="burdur" data-country="3">
                            <span className="cityNo">15</span>
                            <span className="cityName">
                                Burdur
                            </span>
                        </a>
                        <a data-name="Çanakkale" data-id="78" data-plaka="17" data-url="canakkale" data-country="3">
                            <span className="cityNo">17</span>
                            <span className="cityName">
                                Çanakkale
                            </span>
                        </a>
                        <a data-name="Çankırı" data-id="79" data-plaka="18" data-url="cankiri" data-country="3">
                            <span className="cityNo">18</span>
                            <span className="cityName">
                                Çankırı
                            </span>
                        </a>
                        <a data-name="Çorum" data-id="74" data-plaka="19" data-url="corum" data-country="3">
                            <span className="cityNo">19</span>
                            <span className="cityName">
                                Çorum
                            </span>
                        </a>
                        <a data-name="Denizli" data-id="14" data-plaka="20" data-url="denizli" data-country="3">
                            <span className="cityNo">20</span>
                            <span className="cityName">
                                Denizli
                            </span>
                        </a>
                        <a data-name="Diyarbakır" data-id="10" data-plaka="21" data-url="diyarbakir" data-country="3">
                            <span className="cityNo">21</span>
                            <span className="cityName">
                                Diyarbakır
                            </span>
                        </a>
                        <a data-name="Düzce" data-id="31" data-plaka="81" data-url="duzce" data-country="3">
                            <span className="cityNo">81</span>
                            <span className="cityName">
                                Düzce
                            </span>
                        </a>
                        <a data-name="Edirne" data-id="53" data-plaka="22" data-url="edirne" data-country="3">
                            <span className="cityNo">22</span>
                            <span className="cityName">
                                Edirne
                            </span>
                        </a>
                        <a data-name="Elazığ " data-id="33" data-plaka="23" data-url="elazig" data-country="3">
                            <span className="cityNo">23</span>
                            <span className="cityName">
                                Elazığ 
                            </span>
                        </a>
                        <a data-name="Erzincan" data-id="42" data-plaka="24" data-url="erzincan" data-country="3">
                            <span className="cityNo">24</span>
                            <span className="cityName">
                                Erzincan
                            </span>
                        </a>
                        <a data-name="Erzurum" data-id="90" data-plaka="25" data-url="erzurum" data-country="3">
                            <span className="cityNo">25</span>
                            <span className="cityName">
                                Erzurum
                            </span>
                        </a>
                        <a data-name="Gaziantep" data-id="9" data-plaka="27" data-url="gaziantep" data-country="3">
                            <span className="cityNo">27</span>
                            <span className="cityName">
                                Gaziantep
                            </span>
                        </a>
                        <a data-name="Giresun" data-id="88" data-plaka="28" data-url="giresun" data-country="3">
                            <span className="cityNo">28</span>
                            <span className="cityName">
                                Giresun
                            </span>
                        </a>
                        <a data-name="Gümüşhane" data-id="34" data-plaka="29" data-url="gumushane" data-country="3">
                            <span className="cityNo">29</span>
                            <span className="cityName">
                                Gümüşhane
                            </span>
                        </a>
                        <a data-name="Hatay" data-id="8" data-plaka="31" data-url="hatay" data-country="3">
                            <span className="cityNo">31</span>
                            <span className="cityName">
                                Hatay
                            </span>
                        </a>
                        <a data-name="Isparta" data-id="28" data-plaka="32" data-url="isparta" data-country="3">
                            <span className="cityNo">32</span>
                            <span className="cityName">
                                Isparta
                            </span>
                        </a>
                        <a data-name="Kahramanmaraş" data-id="89" data-plaka="46" data-url="k-maras" data-country="3">
                            <span className="cityNo">46</span>
                            <span className="cityName">
                                Kahramanmaraş
                            </span>
                        </a>
                        <a data-name="Karabük" data-id="91" data-plaka="78" data-url="karabuk" data-country="3">
                            <span className="cityNo">78</span>
                            <span className="cityName">
                                Karabük
                            </span>
                        </a>
                        <a data-name="Karaman" data-id="45" data-plaka="70" data-url="karaman" data-country="3">
                            <span className="cityNo">70</span>
                            <span className="cityName">
                                Karaman
                            </span>
                        </a>
                        <a data-name="Kars" data-id="101" data-plaka="36" data-url="kars" data-country="3">
                            <span className="cityNo">36</span>
                            <span className="cityName">
                                Kars
                            </span>
                        </a>
                        <a data-name="Kastamonu" data-id="41" data-plaka="37" data-url="kastamonu" data-country="3">
                            <span className="cityNo">37</span>
                            <span className="cityName">
                                Kastamonu
                            </span>
                        </a>
                        <a data-name="Kayseri" data-id="83" data-plaka="38" data-url="kayseri" data-country="3">
                            <span className="cityNo">38</span>
                            <span className="cityName">
                                Kayseri
                            </span>
                        </a>
                        <a data-name="Kıbrıs" data-id="55" data-plaka="00" data-url="kibris" data-country="3">
                            <span className="cityNo">00</span>
                            <span className="cityName">
                                Kıbrıs
                            </span>
                        </a>
                        <a data-name="Kırıkkale" data-id="26" data-plaka="71" data-url="kirikkale" data-country="3">
                            <span className="cityNo">71</span>
                            <span className="cityName">
                                Kırıkkale
                            </span>
                        </a>
                        <a data-name="Kırklareli" data-id="30" data-plaka="39" data-url="kirklareli" data-country="3">
                            <span className="cityNo">39</span>
                            <span className="cityName">
                                Kırklareli
                            </span>
                        </a>
                        <a data-name="Kırşehir" data-id="102" data-plaka="40" data-url="kirsehir" data-country="3">
                            <span className="cityNo">40</span>
                            <span className="cityName">
                                Kırşehir
                            </span>
                        </a>
                        <a data-name="Kocaeli" data-id="20" data-plaka="41" data-url="kocaeli" data-country="3">
                            <span className="cityNo">41</span>
                            <span className="cityName">
                                Kocaeli
                            </span>
                        </a>
                        <a data-name="Konya" data-id="13" data-plaka="42" data-url="konya" data-country="3">
                            <span className="cityNo">42</span>
                            <span className="cityName">
                                Konya
                            </span>
                        </a>
                        <a data-name="Kütahya" data-id="38" data-plaka="43" data-url="kutahya" data-country="3">
                            <span className="cityNo">43</span>
                            <span className="cityName">
                                Kütahya
                            </span>
                        </a>
                        <a data-name="Malatya" data-id="15" data-plaka="44" data-url="malatya" data-country="3">
                            <span className="cityNo">44</span>
                            <span className="cityName">
                                Malatya
                            </span>
                        </a>
                        <a data-name="Manisa" data-id="69" data-plaka="45" data-url="manisa" data-country="3">
                            <span className="cityNo">45</span>
                            <span className="cityName">
                                Manisa
                            </span>
                        </a>
                        <a data-name="Mardin" data-id="103" data-plaka="47" data-url="mardin" data-country="3">
                            <span className="cityNo">47</span>
                            <span className="cityName">
                                Mardin
                            </span>
                        </a>
                        <a data-name="Mersin" data-id="85" data-plaka="33" data-url="mersin" data-country="3">
                            <span className="cityNo">33</span>
                            <span className="cityName">
                                Mersin
                            </span>
                        </a>
                        <a data-name="Muğla" data-id="4" data-plaka="48" data-url="mugla" data-country="3">
                            <span className="cityNo">48</span>
                            <span className="cityName">
                                Muğla
                            </span>
                        </a>
                        <a data-name="Muş" data-id="104" data-plaka="49" data-url="mus" data-country="3">
                            <span className="cityNo">49</span>
                            <span className="cityName">
                                Muş
                            </span>
                        </a>
                        <a data-name="Nevşehir" data-id="18" data-plaka="50" data-url="nevsehir" data-country="3">
                            <span className="cityNo">50</span>
                            <span className="cityName">
                                Nevşehir
                            </span>
                        </a>
                        <a data-name="Niğde" data-id="82" data-plaka="51" data-url="nigde" data-country="3">
                            <span className="cityNo">51</span>
                            <span className="cityName">
                                Niğde
                            </span>
                        </a>
                        <a data-name="Ordu" data-id="48" data-plaka="52" data-url="ordu" data-country="3">
                            <span className="cityNo">52</span>
                            <span className="cityName">
                                Ordu
                            </span>
                        </a>
                        <a data-name="Osmaniye" data-id="49" data-plaka="80" data-url="osmaniye" data-country="3">
                            <span className="cityNo">80</span>
                            <span className="cityName">
                                Osmaniye
                            </span>
                        </a>
                        <a data-name="Rize" data-id="32" data-plaka="53" data-url="rize" data-country="3">
                            <span className="cityNo">53</span>
                            <span className="cityName">
                                Rize
                            </span>
                        </a>
                        <a data-name="Sakarya" data-id="39" data-plaka="54" data-url="sakarya" data-country="3">
                            <span className="cityNo">54</span>
                            <span className="cityName">
                                Sakarya
                            </span>
                        </a>
                        <a data-name="Samsun" data-id="43" data-plaka="55" data-url="samsun" data-country="3">
                            <span className="cityNo">55</span>
                            <span className="cityName">
                                Samsun
                            </span>
                        </a>
                        <a data-name="Siirt" data-id="94" data-plaka="56" data-url="siirt" data-country="3">
                            <span className="cityNo">56</span>
                            <span className="cityName">
                                Siirt
                            </span>
                        </a>
                        <a data-name="Sinop" data-id="92" data-plaka="57" data-url="sinop" data-country="3">
                            <span className="cityNo">57</span>
                            <span className="cityName">
                                Sinop
                            </span>
                        </a>
                        <a data-name="Sivas" data-id="73" data-plaka="58" data-url="sivas" data-country="3">
                            <span className="cityNo">58</span>
                            <span className="cityName">
                                Sivas
                            </span>
                        </a>
                        <a data-name="Şanlıurfa" data-id="108" data-plaka="63" data-url="sanliurfa" data-country="3">
                            <span className="cityNo">63</span>
                            <span className="cityName">
                                Şanlıurfa
                            </span>
                        </a>
                        <a data-name="Şırnak" data-id="112" data-plaka="73" data-url="sirnak" data-country="3">
                            <span className="cityNo">73</span>
                            <span className="cityName">
                                Şırnak
                            </span>
                        </a>
                        <a data-name="Tekirdağ" data-id="84" data-plaka="59" data-url="tekirdag" data-country="3">
                            <span className="cityNo">59</span>
                            <span className="cityName">
                                Tekirdağ
                            </span>
                        </a>
                        <a data-name="Tokat" data-id="106" data-plaka="60" data-url="tokat" data-country="3">
                            <span className="cityNo">60</span>
                            <span className="cityName">
                                Tokat
                            </span>
                        </a>
                        <a data-name="Trabzon" data-id="16" data-plaka="61" data-url="trabzon" data-country="3">
                            <span className="cityNo">61</span>
                            <span className="cityName">
                                Trabzon
                            </span>
                        </a>
                        <a data-name="Tunceli" data-id="107" data-plaka="62" data-url="tunceli" data-country="3">
                            <span className="cityNo">62</span>
                            <span className="cityName">
                                Tunceli
                            </span>
                        </a>
                        <a data-name="Uşak" data-id="68" data-plaka="64" data-url="usak" data-country="3">
                            <span className="cityNo">64</span>
                            <span className="cityName">
                                Uşak
                            </span>
                        </a>
                        <a data-name="Van" data-id="109" data-plaka="65" data-url="van" data-country="3">
                            <span className="cityNo">65</span>
                            <span className="cityName">
                                Van
                            </span>
                        </a>
                        <a data-name="Yalova" data-id="21" data-plaka="77" data-url="yalova" data-country="3">
                            <span className="cityNo">77</span>
                            <span className="cityName">
                                Yalova
                            </span>
                        </a>
                        <a data-name="Yozgat" data-id="110" data-plaka="66" data-url="yozgat" data-country="3">
                            <span className="cityNo">66</span>
                            <span className="cityName">
                                Yozgat
                            </span>
                        </a>
                        <a data-name="Zonguldak" data-id="6" data-plaka="67" data-url="zonguldak" data-country="3">
                            <span className="cityNo">67</span>
                            <span className="cityName">
                                Zonguldak
                            </span>
                        </a>
            </div>
            <div className="actionLine">
                <button className="btnDark" onClick={switchCity}>Şehir Değiştir</button>
                <button className="btnGhostDark ml-10" onClick={switchCity}>Vazge&#231;</button>
            </div>
        </div>
</section>
      <div className="aramaOverlay"></div>
<div className="aramaicsayfa">
<div className="yeniArama">
    <span className="yeniArama__discover">Binlerce etkinlik ve mekanı keşfet...</span>
    <form action="/tr-tr/search" method="get" autoComplete="off">
        <input name="q" placeholder="Sinema, tiyatro ve konser ara" data-country="3" type="search" className="searchInput lettersAndNumbers searchInputTop" />
        <button type="submit" className="searchButton">
            <img src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/arama_yn.svg" width="24" alt="Search" />
        </button>
    </form>
    <button className="aramaKapat">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path d="M19,2H5C3.3,2,2,3.3,2,5v14c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V5C22,3.3,20.7,2,19,2z M15.7,14.3c0.4,0.4,0.4,1,0,1.4 c-0.4,0.4-1,0.4-1.4,0L12,13.4l-2.3,2.3c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3L8.3,9.7c-0.4-0.4-0.4-1,0-1.4 c0.4-0.4,1-0.4,1.4,0l2.3,2.3l2.3-2.3c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4L13.4,12L15.7,14.3z" /></svg>
    </button>
    <div className="yeniArama__sonuc">
        <div className="yeniArama__sonuc--acilis">
        </div>
        <div className="yeniArama__sonuc--sonuc">
            <ul className="yeniArama__sonuc__data"></ul>
        </div>
    </div>
</div>
</div>
<div className="mobile-menu">
<div className="mobile-menu__header">
    <strong></strong>
</div>
<button>
    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 70 70">
        <path fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M49.33 22.07l-26.8 26.8M49.33 48.87l-26.8-26.8" />
    </svg>
</button>
<ul></ul>
</div>
<header className="header">
<div className="header__left">
    <figure className="header__logo">
        <a href="/tr-tr" title="Ana Sayfa">
<img src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/logodark.svg" className="logo_desktop" alt="biletinial koyu logo" />
<img src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/logosmall.svg" className="logo_mobile" alt="biletinial koyu logo" />
        </a>
    </figure>

        <div className="header__sehirsec sehirSeciliMenu">
            <button>
                <span>Konum</span>
                <strong>Şehir Se&#231;<img width="12" src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/konumikon.svg" alt="Konum İkonu" /></strong>
            </button>
        </div>
</div>
    <nav className="header__menu siteNav">
        <ul>

                <li>
                <a href='/tr-tr/sinema' title='Sinema'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/sinema.svg' alt='Sinema'/>
                    <span>Sinema</span>
                </a></li><li>
                <a href='/tr-tr/tiyatro' title='Tiyatro'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/tiyatro.svg' alt='Tiyatro'/>
                    <span>Tiyatro</span>
                </a></li><li>
                <a href='/tr-tr/muzik' title='Müzik'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/muzik.svg' alt='Müzik'/>
                    <span>Müzik</span>
                </a></li><li>
                <a href='/tr-tr/spor' title='Spor'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/spor.svg' alt='Spor'/>
                    <span>Spor</span>
                </a></li><li>
                <a  title='Diğer'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/tumu.svg' alt='Diğer'/>
                    <span>Diğer</span>
                </a><ul><li>
                <a href='/tr-tr/etkinlikleri/stand-up' title='Stand Up'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/standup.svg' alt='Stand Up'/>
                    <span>Stand Up</span>
                </a></li><li>
                <a href='/tr-tr/opera-bale' title='Opera-Bale'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/bale.svg' alt='Opera-Bale'/>
                    <span>Opera-Bale</span>
                </a></li><li>
                <a href='/tr-tr/gosteri' title='Gösteri'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/gosteri.svg' alt='Gösteri'/>
                    <span>Gösteri</span>
                </a></li><li>
                <a href='/tr-tr/egitim' title='Egitim'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/egitim.svg' alt='Egitim'/>
                    <span>Egitim</span>
                </a></li><li>
                <a href='/tr-tr/seminer' title='Seminer'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/seminer.svg' alt='Seminer'/>
                    <span>Seminer</span>
                </a></li><li>
                <a href='/tr-tr/etkinlik' title='Etkinlikler'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/festival.svg' alt='Etkinlikler'/>
                    <span>Etkinlikler</span>
                </a></li><li>
                <a href='/tr-tr/eglence' title='Eglence'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/opera.svg' alt='Eglence'/>
                    <span>Eglence</span>
                </a></li></ul></li><li>
                <a href='/tr-tr/mekan/istanbul-bb-sehir-tiyatrolari' title='İBB Şehir Tiyatroları'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/tiyatro.svg' alt='İBB Şehir Tiyatroları'/>
                    <span>İBB Şehir Tiyatroları</span>
                </a></li><li>
                <a  title='T.C. Kültür ve Turizm Bakanlığı'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/ktbicon.svg' alt='T.C. Kültür ve Turizm Bakanlığı'/>
                    <span>T.C. Kültür ve Turizm Bakanlığı</span>
                </a><ul><li>
                <a href='/tr-tr/etkinlik-takvimi/713' title='Devlet Opera ve Balesi'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/Uploads/MenuImages/2cd6105ef987450fbaa886edadf80fb7.png' alt='Devlet Opera ve Balesi'/>
                    <span>Devlet Opera ve Balesi</span>
                </a></li><li>
                <a href='/tr-tr/etkinlik-takvimi/708' title='Devlet Tiyatrolari'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/dticon.svg' alt='Devlet Tiyatrolari'/>
                    <span>Devlet Tiyatrolari</span>
                </a></li><li>
                <a href='/tr-tr/etkinlik-takvimi/714' title='Kültür ve Turizm Bakanligi Konserler'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/ktbicon.svg' alt='Kültür ve Turizm Bakanligi Konserler'/>
                    <span>Kültür ve Turizm Bakanligi Konserler</span>
                </a></li><li>
                <a href='/tr-tr/etkinlikleri/cso-ada-etkinlikleri' title='CSO Ada Ankara Etkinlikleri'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/csoikon.svg' alt='CSO Ada Ankara Etkinlikleri'/>
                    <span>CSO Ada Ankara Etkinlikleri</span>
                </a></li><li>
                <a href='/tr-tr/etkinlikleri/istanbul-akm-etkinlikleri' title='Istanbul AKM Etkinlikleri'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/akmicon.svg' alt='Istanbul AKM Etkinlikleri'/>
                    <span>Istanbul AKM Etkinlikleri</span>
                </a></li><li>
                <a href='/tr-tr/etkinlikleri/turkiye-kultur-yolu-festivalleri' title='Türkiye Kültür Yolu Festivali'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/Uploads/MenuImages/8f2f6bdcb72b47818395f126eb03bcf5.jpeg' alt='Türkiye Kültür Yolu Festivali'/>
                    <span>Türkiye Kültür Yolu Festivali</span>
                </a></li><li>
                <a href='/tr-tr/etkinlikleri/21-uluslararasi-bodrum-bale-festivali	' title='21. Uluslararası Bodrum Bale Festivali'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/ktbicon.svg' alt='21. Uluslararası Bodrum Bale Festivali'/>
                    <span>21. Uluslararası Bodrum Bale Festivali</span>
                </a></li><li>
                <a href='/tr-tr/etkinlikleri/31-uluslararasi-aspendos-opera-ve-bale-festivali' title='31. Uluslararası Aspendos Opera ve Bale Festivali'>
                    <img src='https://b6s54eznn8xq.merlincdn.net/Uploads/MenuImages/081f086bbea14832bfcdfc1a3d38ce69.svg' alt='31. Uluslararası Aspendos Opera ve Bale Festivali'/>
                    <span>31. Uluslararası Aspendos Opera ve Bale Festivali</span>
                </a></li></ul></li>
</ul>








    </nav>
    <div className="header__right">
        <div className="sehirSeciliMenu">
            <span>Şehrini Keşfet</span>
            <a href="#" title="">#Şehrine &#214;zel Etkinlikler</a>
        </div>
        <div className="header_search yeniaramaAc">
            <div>Sinema, tiyatro ve konser ara...</div>
            <button type="submit" className="searchButton">
                <img src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/icns/aramaikon.svg" alt="Arama İkonu" />
            </button>
        </div>
        

            <div className="header__user hiddenD mobileNavToggle">
                <a className="hiddenD mobileNavToggle">
                    
                </a>
            </div>

            
            <nav className="siteNav">
                <div className="headerYN_ust-govde--user2" id="UserAreaDesktop">

                </div>
            </nav>
    </div>
<input type="hidden" value="tr-tr" id="hdnRegion" />
</header>
<input type="hidden" name="date1Index" value="23.07.2024 19:56:34" />

</>
  )
}

export default Navbar