import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import logo from '../../assets/logo.png';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from "../../utils";
import { withRouter } from 'react-router';
import { changeLanguageApp } from "../../store/actions";
import BookingModalHeader from './BookingModalHeader';


class HomeHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allDays: [],
            allAvailableTime: [],
            isOpenModalBooking: false,
            dataScheduleTimeModal: {},

        }
    }

    changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language)
        //fire redux event: actions
    }

    returnToHome = () => {
        if (this.props.history) {
            this.props.history.push(`/home`)
        }
    }

    handleClickScheduleTime = (time) => {
        this.setState({
            isOpenModalBooking: true,
            dataScheduleTimeModal: time
        })
    }


    closeBookingClose = () => {
        this.setState({
            isOpenModalBooking: false
        })
    }

    render() {
        let { allDays, allAvailableTime, isOpenModalBooking, dataScheduleTimeModal } = this.state;
        let language = this.props.language;
        return (
            <>
                <React.Fragment>
                    <div className='home-header-container'>
                        <div className='home-header-content'>
                            <div className='left-content'>
                                <div className='support'><i className="fas fa-question-circle"></i>
                                    <FormattedMessage id="homeheader.support" />
                                </div>
                                <img className='header-logo' src={logo} onClick={() => this.returnToHome()} />


                            </div>
                            <div className='center-content'>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeheader.specialty" /></b></div>
                                    {/* <div className='subs-title'><FormattedMessage id="homeheader.searchdoctor" /></div> */}
                                </div>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeheader.health-facility" /></b></div>
                                    {/* <div className='subs-title'><FormattedMessage id="homeheader.select-room" /></div> */}
                                </div>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeheader.doctor" /></b></div>
                                    {/* <div className='subs-title'><FormattedMessage id="homeheader.select-doctor" /></div> */}
                                </div>
                                <div className='child-content'>
                                    <div><b><FormattedMessage id="homeheader.fee" /></b></div>
                                    {/* <div className='subs-title'><FormattedMessage id="homeheader.check-health" /></div> */}
                                </div>

                            </div>
                            <div className='search'>
                                <i className="fas fa-search"></i>
                                <input type='text' placeholder='Tìm kiếm theo từ khóa ...     ' />
                            </div>
                            <div className='right-content'>


                                <button className='booking-rightnow'

                                    onClick={() => this.handleClickScheduleTime()}>
                                    <a data-modal-target="#callback-required" class="btn btn-xs transition-3d-hover br-0 font-size-1 text-white btn-red-default btn-in-menu" >
                                        <i class="far fa-calendar-alt icon-animation fa-1x"></i> ĐẶT HẸN NGAY
                                    </a>
                                </button>

                                <button className='call-rightnow'

                                >
                                    <a data-modal-target="#callback-required" class="btn btn-xs transition-3d-hover br-0 font-size-1 text-white btn-red-default btn-in-menu"
                                        href='tel:0942861921'
                                    >
                                        <i class="fas fa-phone"></i>     0942.861.921
                                    </a>
                                </button>

                                <button className={language === LANGUAGES.VI ? "language-vi active" : 'language-vi'}
                                    onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                                    <img className='img-edit' src="https://kimdental.vn/wp-content/themes/kimdental-child/assets/images/vietnam.svg" width="33" height="26" loading="lazy" />

                                </button>
                                <button className={language === LANGUAGES.EN ? "language-en active" : 'language-en'}
                                    onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                                    <img src="https://media.flaticon.com/dist/min/img/flags/en.svg" width="33" height="26" loading="lazy" />

                                </button>

                            </div>
                        </div>
                    </div>
                    {this.props.isShowBanner === true &&
                        <div className='home-header-banner'>
                            <div className='content-up'>
                                {/* <div className='title1'><FormattedMessage id="banner.title1" /></div> */}
                                {/* <div className='title2'><FormattedMessage id="banner.title2" /> </div> */}

                            </div>
                            <div className='content-down'>
                                {/* <div className='options'>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-hospital-alt"></i></div>
                                    <div className='text-child'> <FormattedMessage id="banner.child1" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-mobile-alt"></i></div>
                                    <div className='text-child'> <FormattedMessage id="banner.child2" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-hospital"></i></div>
                                    <div className='text-child'> <FormattedMessage id="banner.child3" /></div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-podcast"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child4" /> </div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-podcast"></i></div>
                                    <div className='text-child'><FormattedMessage id="banner.child5" /> </div>
                                </div>
                                <div className='option-child'>
                                    <div className='icon-child'><i className="fas fa-podcast"></i></div>
                                    <div className='text-child'> <FormattedMessage id="banner.child6" /></div>
                                </div>
                            </div> */}
                            </div>


                        </div>

                    }
                </React.Fragment >
                <BookingModalHeader
                    isOpenModal={isOpenModalBooking}
                    closeBookingClose={this.closeBookingClose}
                    dataTime={dataScheduleTimeModal}
                />

            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux: (language) => dispatch(changeLanguageApp(language))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeHeader));
