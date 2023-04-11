import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './ModalCancel.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { toast } from "react-toastify"
import moment from 'moment';
import { CommonUtils } from '../../../utils'

class ModalCancel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
        }
    }


    async componentDidMount() {
        if (this.props.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.dataModal !== prevProps.dataModal) {
            this.setState({
                email: this.props.dataModal.email
            })
        }
    }

    handleOnChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    // handleOnChangeImage = async (event) => {
    //     let data = event.target.files;
    //     let file = data[0];
    //     if (file) {
    //         let base64 = await CommonUtils.getBase64(file);
    //         this.setState({
    //             imgBase64: base64
    //         })
    //     }

    // }

    handleSendCancel = () => {
        this.props.sendCancel(this.state)
    }


    render() {
        let { isOpenModal, closeModalCancel, dataModal, sendCancel } = this.props;

        return (
            <Modal
                isOpen={isOpenModal}
                className={'booking-modal-container'}
                size="md"
                centered
            //backdrop={true}           
            >
                <div className='modal-header'>
                    <h5 className='modal-title'> GỬI THÔNG BÁO XÁC NHẬN HỦY HẸN ! </h5>
                    <button type='button' className='close' aria-label="Close" onClick={closeModalCancel}>
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
                    <Button color='primary' onClick={() => this.handleSendCancel()}>Xác Nhận</Button>{''}
                    <Button color='secondary' onClick={closeModalCancel}>Hủy</Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalCancel);
