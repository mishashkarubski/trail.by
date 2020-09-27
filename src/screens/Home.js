import React from 'react';
import '../css/Home.css';
import QuickSearch from '../components/QuickSearch'
import path from '../scripts/paths'
import date from '../scripts/getDate'
import '../scripts/carousel'
import fir from '../media/icons/Frame.svg'
import birch from '../media/icons/Frame-1.svg'
import grass from '../media/icons/Frame-2.svg'
import lake from '../media/icons/Frame-3.svg'
import introImage from '../media/images/Elnya/Elnya1.jpg'
import anime from "animejs";


const Home = () => {

    const homeREf = React.useRef(null)
    React.useEffect()

    return (
        <div className="containerHome">
            <div className="greeting">
                <p className="greeting-text" id="greeting">Welcome to <span className="span-title">Trail</span>!</p>
                <div className="hint">
                    <p className="hint-text">Go to:</p>
                    <QuickSearch title="Elnya" link="/#elnya"/>
                    <QuickSearch title="Blue lakes" link="/#bluelakes"/>
                    <QuickSearch title="Galleries" link="/#galleries"/>
                </div>
            </div>
            <div className="latest" id="elnya">
                <div className="title-brief">
                    <p className="latest-release">LATEST RELEASE IS</p>
                    <p className="latest-title">ELNYA</p>
                    <p className="latest-date">{date()}</p>
                </div>
                <div className="intro">
                    <p><span className="span-title">Elnya</span> is called one of the biggest lungs of Europe and is very old - 9000 y.o. Its pure air, vast mires views, endless cranberries plantations and fragrance - all worth coming for 3 hours. Highly recommended for nature lovers!</p>
                    <svg
                        width="827.5"
                        height="644.85"
                        viewBox="0 0 827.5 644.85"
                    >
                        <defs>
                            <pattern
                                id="pattern"
                                patternUnits="userSpaceOnUse"
                                height="100%"
                                width="100%"
                            >
                                <image className="introImage" href={introImage}/>
                            </pattern>
                        </defs>
                        <path d={path()} fill="url(#pattern)"/>
                    </svg>
                </div>
                <div className="note">
                    <p className="note-sign">Note:</p>
                    <p className="note-text">Here you can find both coniferous trees (pines, for instance), and deciduous species, such as birches. Also here are some small lakes and ponds, that are separated by some swamp vegetation.</p>
                    <div className="note-icons">
                        <img className="note-icon note-icon-fir" alt="note-icon" src={fir}/>
                        <img className="note-icon note-icon-birch" alt="note-icon" src={birch}/>
                        <img className="note-icon note-icon-grass" alt="note-icon" src={grass}/>
                        <img className="note-icon note-icon-lake" alt="note-icon" src={lake}/>
                    </div>
                    <div className="more">
                        <a href="/" className="see-more">See more...</a>
                    </div>
                </div>
            </div>
            <div className="recommended" id="bluelakes">
                <p className="greeting-text">We also recommend you visiting <span>Blue Lakes</span>:</p>
                <div className="recommended-brief">
                    <div className="description">
                        <p>
                            <span className="dark">Ecological trail "<span>Blue Lakes</span>"</span>
                            <br/>
                            <br/>
                            is located on the territory of the Narochansky National Park in the Myadel district, 500 m beyond the village of Olshevo.
                            <br/>
                            <br/>
                            Each time you come to this amazing place, you will discover something new, this is a unique hilly-lake complex with vast forests, an abundance of springs and truly unique lakes.
                        </p>
                    </div>
                    <div className="carousel">
                        <div className="carousel-item first">
                            <img id="slide" alt="slide"/>
                        </div>
                    </div>
                    <div className="more">
                        <a href="/" className="see-more">See more...</a>
                    </div>
                </div>
            </div>
            <div className="recommended2" id="galleries">
                <p><span className="span-title">Galleries</span> are in progress...</p>
            </div>
        </div>
    );
}

export default Home;