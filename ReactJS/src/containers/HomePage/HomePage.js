import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from './HomeHeader';
import Specialty from './Section/Specialty';
import MedicalFacility from './Section/MedicalFacility';
import OutstandingDoctor from './Section/OutstandingDoctor';
import HandBook from './Section/HandBook';
import About from './Section/About';
import HomeFooter from './HomeFooter';
import './HomePage.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import News from './News';


class HomePage extends Component {

    render() {
        let settings = {
            dots: false,
            isfinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
        };



        return (
            <div>
                <HomeHeader isShowBanner={true} />
                <div className='homepage-total'>
                    <div className='homepage-left'>
                        <Specialty
                            settings={settings}
                        />
                        <MedicalFacility
                            settings={settings}
                        />
                        <OutstandingDoctor
                            settings={settings}
                        />
                        {/* <HandBook
                            settings={settings}
                        /> */}
                    </div>
                    <div className='homepage-right'>
                        <News />
                    </div>
                </div>
                <About />
                <HomeFooter />
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
