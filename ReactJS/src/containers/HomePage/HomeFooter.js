import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeFooter.scss'

class HomeFooter extends Component {

    render() {


        return (
            <footer class="site-footer">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div class="container">
                    <div class="row row-update">
                        <div class="col-sm-12 col-md-6">
                            <h6>Về chúng tôi</h6>
                            <p class="text-justify">medicteeths.com <i>Trở thành doanh nghiệp trong lĩnh vực Nha khoa thẩm mỹ với chiến lược tập trung phát triển công nghệ đột phá.</i>Viện nha khoa MedicTeeth với hơn 5 năm kinh nghiệm được khách hàng yêu mến và tin cậy. Với thương hiệu MedicTeeth, chúng tôi tự hào là cơ sở khám chữa nha khoa uy tín và hiện đại tại Thành Phố Hồ Chí Minh.</p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Công nghệ</h6>
                            <ul class="footer-links">
                                <li><a href="https://reactjs.org/">ReactJS</a></li>
                                <li><a href="https://nodejs.org/en/">NodeJS</a></li>
                                <li><a href="https://www.apachefriends.org/download.html">Redux</a></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>người thực hiện</h6>
                            <ul class="footer-links">
                                <li><a href="#">Đào Ngọc Tân</a></li>
                                <li><a href="#">Nguyễn Minh Nghĩa</a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div class="container">
                    <div class="row row-update">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p className='discrip'>&copy; 2023 MedicTeeths ♥
                                {/* <a target='_blank' href='https://www.instagram.com/__only.dntan/'>
                                    &#8594; Click Here &#8592;
                                </a> */}
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                                <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
