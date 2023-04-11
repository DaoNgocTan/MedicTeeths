
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../utils/emitter';
import BookingModalHeader from './BookingModalHeader';
import './BookingModalSuccess.scss'

class ModalBookingSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModaEditlUser: false,
            userEdit: {}
        }
    }

    render() {
        let { BookingClose } = this.props;
        return (
            <Modal
                isOpen={this.props.isOpen}
                toggle={() => { this.toggle() }}
                className={'modal-user-container'}
                size="lg"
                centered


            >
                <ModalHeader toggle={() => { this.toggle() }}>ĐẶT LỊCH THÀNH CÔNG</ModalHeader>
                <ModalBody>
                    <div className='modal-user-body'>
                        <h5>
                            Nha Khoa MedicTeeths sẽ liên hệ bạn trong vòng 5 phút.
                        </h5>
                        <div id='time1' className='modal-time'>
                            Thời gian làm việc " trừ ngày Lễ/Tết"
                        </div>
                        <div className='modal-time'>
                            - Thứ 2 ~ Thứ 7: 08h00 ~ 18h30
                        </div>
                        <div className='modal-time'>
                            - Chủ Nhật: 08h00 ~ 16h00
                        </div>
                        <div className='modal-tim'>
                            Nếu bạn đã đặt lịch ngoài thời gian làm việc, Nha Khoa MedicTeeths sẽ liên hệ vào
                            8h - 9h sáng hôm sau.
                        </div>
                        <div className='modal-tim'>
                            Xin chân thành cảm ơn bạn đã tin tưởng Nha Khoa MedicTeeths chúng tôi !!
                        </div>
                    </div>


                </ModalBody>
                <ModalFooter>
                    <Button variant="secondary" className='px-3' onClick={BookingClose}>Đóng</Button>
                </ModalFooter>

            </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalBookingSuccess);




