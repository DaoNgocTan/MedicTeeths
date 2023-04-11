import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './BookingModalSuccess.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { toast } from "react-toastify"
import moment from 'moment';
import BookingModalHeader from './BookingModalHeader';

class BookingModalSuccess extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            imgBase64: ''
        }
    }



    render() {
        let { isOpenModal, closeRemedyModal, dataModal, sendRemedy } = this.props;

        return (
            <Modal
                isOpen={isOpenModal}
                className={'booking-modal-container'}
                size="md"
                centered
            //backdrop={true}           
            >
                <div className='modal-header'>
                    <h5 className='modal-title'> ĐẶT LỊCH THÀNH CÔNG ! </h5>
                    <button type='button' className='close' aria-label="Close" onClick={closeRemedyModal}>
                        <span aria-hidden="true">x</span>
                    </button>
                </div>
                <ModalBody>
                    <div className='row'>
                        <div className='col-6 form-group'>
                            <label> Email Khách hàng</label>
                            <input className='form-control' type='email' value={this.state.email}
                                onChange={(event) => this.handleOnChangeEmail(event)}
                            />
                        </div>

                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={() => this.handleSendRemedy()}>Send</Button>{''}
                    <Button color='secondary' onClick={closeRemedyModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        );
    }
}


const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModalSuccess);
