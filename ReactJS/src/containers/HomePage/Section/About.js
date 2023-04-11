import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './About.scss'

class About extends Component {

    render() {


        return (
            <div class="container-fluid py-5">
                <div className='map-api'>
                    <h1 class="text-map">Địa chỉ phòng khám</h1>
                    <iframe width="1130" height="450" id="gmap_canvas" src="https://maps.google.com/maps?q=222%20b%C3%B9i%20%C4%91%C3%ACnh%20t%C3%BAy&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7 m-0 my-lg-5 pt-0 pt-lg-5 pr-lg-5">
                            <h6 class="text-secondary text-uppercase font-weight-medium mb-3">Điểm Nổi Bật</h6>
                            <h1 class="mb-4">Tại Sao Phải Chọn Chúng Tôi</h1>
                            <p>Một nụ cười là khoảng cách ngắn nhất giữa hai tâm hồn. Nếu bạn chỉ có duy nhất một nụ cười hãy dành nụ cười đó cho những người bạn yêu thương.</p>
                            <div class="row">
                                <div class="col-sm-6 mb-4">
                                    <h1 class="text-secondary" data-toggle="counter-up">3</h1>
                                    <h5 class="font-weight-bold">Nhiều Năm Kinh Nghiệm</h5>
                                </div>
                                <div class="col-sm-6 mb-4">
                                    <h1 class="text-secondary" data-toggle="counter-up">30</h1>
                                    <h5 class="font-weight-bold">Bác Sĩ Giỏi</h5>
                                </div>
                                <div class="col-sm-6 mb-4">
                                    <h1 class="text-secondary" data-toggle="counter-up">473</h1>
                                    <h5 class="font-weight-bold">Độ Hài Lòng</h5>
                                </div>
                                <div class="col-sm-6 mb-4">
                                    <h1 class="text-secondary" data-toggle="counter-up">850</h1>
                                    <h5 class="font-weight-bold">Khách Hàng</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="d-flex flex-column align-items-center justify-content-center bg-secondary h-100 py-5 px-3">
                                <i class="fa fa-5x fa-certificate text-white mb-5"></i>
                                <h1 class="display-1 text-white mb-3">4.5/5</h1>
                                <h1 class="text-white m-0">Đánh Giá</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/counterup/counterup.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>
                <script src="mail/jqBootstrapValidation.min.js"></script>
                <script src="mail/contact.js"></script>
                <script src="js/main.js"></script>

            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
