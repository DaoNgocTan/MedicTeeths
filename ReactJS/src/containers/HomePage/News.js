
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import HomePage from './HomePage';
import './New.scss'

class News extends Component {


    render() {
        return (


            <div class="test-post">
                <div class="entry-title">
                    <p><strong>Bài test</strong> Kiểm tra sức khỏe răng miệng</p>
                </div>
                <div class="test-content">
                    <div class="wrapper-check">
                        <div class="title-1">Răng Miệng Của Bạn Đang Gặp Phải Tình Trạng Như Thế Nào?</div>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Răng Khấp Khểnh " />Răng Khấp Khểnh
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Răng Xỉn Màu" />Răng Xỉn Màu
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Răng Hô" />Răng Hô
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Răng Khôn Đau Nhức" />Răng Khôn Đau Nhức
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Mất Răng" />Mất Răng
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Răng Ê Buốt" />Răng Ê Buốt
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Chảy Máu Chân Răng " />Chảy Máu Chân Răng
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Hơi Thở Có Mùi" />Hơi Thở Có Mùi
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Sâu Răng" />Sâu Răng
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Viêm Tủy Răng" />Viêm Tủy Răng
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Viêm Nướu" />Viêm Nướu
                        </label>
                        <label>
                            <input type="checkbox" class="option-input radio" name="ch1[]" value="Đã từng trồng (cắm) răng" />Đã từng trồng (cắm) răng
                        </label>

                        <div class="title-1 title-2">Tình trạng trên xuất hiện bao lâu rồi?</div>
                        <label>
                            <input type="radio" class="option-input radio" name="ch2" value="Mới đây" />Mới đây
                        </label>
                        <label>
                            <input type="radio" class="option-input radio" name="ch2" value="Lâu rồi" checked="" />Lâu rồi
                        </label>
                    </div>
                </div>
                <div class="test-submit">
                    <div class="col-left">
                        <span>Kết quả bài test sẽ được gửi vào điện thoại của bạn sau 30’(dưới dạng sms)</span>
                        <span>Nếu không muốn chờ lâu, vui lòng click <strong>"Giải đáp trực tuyến"</strong> hoặc click <i>"Gửi bài test"</i> để biết kết quả</span>

                    </div>
                    <div class="col-right">

                        <div class="">
                            <input type="tel" name="phone" value="" placeholder="Nhập SĐT" title="Gửi số điện thoại chúng tôi sẽ gọi lại cho bạn" />
                        </div>
                        <input type="hidden" name="link" value="" />
                        <div class="btn-action">
                            <input type="submit" name="submit" value="Nhận đáp áp" class="button-action " onclick="Sangnx.order('detailfrom')" />

                            <a class="btn-right" href="">Giải đáp trực tuyến</a>
                        </div>

                    </div>
                </div>
                <div className='youtube'>
                    <iframe width="100%" height="240px" src="https://www.youtube.com/embed/vo7Wj7D8Kig"
                        title="Vì sao cần kiểm tra răng miệng định kì  6 tháng một lần" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
                </div>
            </div>



        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);




