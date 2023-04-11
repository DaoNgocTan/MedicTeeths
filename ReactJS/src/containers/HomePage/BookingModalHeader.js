import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './BookingModalHeader.scss';
import { Modal } from 'reactstrap';
import ProfileDoctor from '../Patient/Doctor/ProfileDoctor';
import _ from 'lodash';
import * as actions from '../../store/actions';
import DatePicker from '../../components/Input/DatePicker';
import { LANGUAGES } from '../../utils';
import Select from 'react-select';
import { postPatientBookAppointmentHeader } from '../../services/userService';
import { toast } from "react-toastify";
import moment from 'moment';
import LoadingOverlay from 'react-loading-overlay';
import { emitter } from '../../utils/emitter';
import BookingModalSuccess from './BookingModalSuccess';
import Navigator from '../../components/Navigator';

class BookingModalHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModaEditlUser: false,
            isOpenBookingRightNowModal: false,
            // dataModal: {},
            userEdit: {},
            fullName: '',
            phoneNumber: '',
            email: '',
            address: '',
            reason: '',
            birthday: '',
            selectedGender: '',
            doctorId: '',
            genders: '',
            timeType: '',
            isShowLoading: false
        }
    }

    async componentDidMount() {
        this.props.getGenders();

    }

    buildDataGender = (data) => {
        let result = [];
        let language = this.props.language;
        if (data && data.length > 0) {
            data.map(item => {
                let object = {};
                object.label = language === LANGUAGES.VI ? item.valueVi : item.valueEn;
                object.value = item.keyMap;
                result.push(object)
            })
        }
        return result;
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            this.setState({
                genders: this.buildDataGender(this.props.genders)
            })
        }
        if (this.props.genders !== prevProps.genders) {
            this.setState({
                genders: this.buildDataGender(this.props.genders)
            })
        }
        if (this.props.dataTime !== prevProps.dataTime) {
            if (this.props.dataTime && !_.isEmpty(this.props.dataTime)) {
                let doctorId = this.props.dataTime.doctorId;
                let timeType = this.props.dataTime.timeType;
                this.setState({
                    doctorId: doctorId,
                    timeType: timeType
                })
            }
        }
    }

    handleOnchangeInput = (event, id) => {
        let valueInput = event.target.value;
        let stateCopy = { ...this.state };
        stateCopy[id] = valueInput;
        this.setState({
            ...stateCopy
        })
    }

    handleOnchangeDatePicker = (date) => {
        this.setState({
            birthday: date[0]
        })
    }

    handleChangeSelect = (selectedOption) => {
        this.setState({ selectedGender: selectedOption });
    }

    buildTimeBooking = (dataTime) => {
        let { language } = this.props;
        if (dataTime && !_.isEmpty(dataTime)) {
            let time = language === LANGUAGES.VI ?
                dataTime.timeTypeData.valueVi : dataTime.timeTypeData.valueEn;

            let date = language === LANGUAGES.VI ?
                moment.unix(+dataTime.date / 1000).format('dddd - DD/MM/YYYY')
                :
                moment.unix(+dataTime.date / 1000).locale('en').format('dddd - DD/MM/YYYY');

            return `${time} - ${date}`
        }
        return ''
    }

    buildDoctorName = (dataTime) => {
        let { language } = this.props;
        if (dataTime && !_.isEmpty(dataTime)) {
            let name = language === LANGUAGES.VI ?
                `${dataTime.doctorData.firstName} ${dataTime.doctorData.lastName}`
                :
                `${dataTime.doctorData.lastName} ${dataTime.doctorData.firstName}`

            return name;
        }
        return ''
    }

    handleConfirmBooking = async () => {
        this.setState({
            isShowLoading: true,
            isOpenModalUser: true,
        })
        let date = new Date(this.state.birthday).getTime();
        let timeString = this.buildTimeBooking(this.props.dataTime);
        let doctorName = this.buildDoctorName(this.props.dataTime);

        let res = await postPatientBookAppointmentHeader({
            fullName: this.state.fullName,
            phonenumber: this.state.phoneNumber,
            email: this.state.email,
            address: this.state.address,
            reason: this.state.reason,
            // date: this.props.dataTime.date,
            birthday: date,
            selectedGender: this.state.selectedGender.value,
            doctorId: this.state.doctorId,
            timeType: this.state.timeType,
            language: this.props.language,
            timeString: timeString,
            doctorName: doctorName
        })

        this.setState({
            isShowLoading: false,
            isOpenModalUser: false,
        })

        if (res && res.errCode === 0) {
            toast.success('Đặt lịch thành công !')
            this.props.closeBookingClose();
            // this.props.isOpenModalUser();

        } else {
            toast.error('Đặt lịch thất bại !')
        }
    }

    handleBtnConfirm = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }
    BookingClose = () => {
        this.setState({
            isOpenModalUser: false,
            // dataModal: {}
        })
    }




    render() {

        let { isOpenModal, closeBookingClose, dataTime, isOpenBookingRightNowModal, dataModal } = this.props;
        let doctorId = '';
        if (dataTime && !_.isEmpty(dataTime)) {
            doctorId = dataTime.doctorId
        }
        return (

            <LoadingOverlay
                isOpen={isOpenModal}
                className={'booking-modal-container'}
                size="lg"
                centered
            >
                <Modal
                    isOpen={isOpenModal}
                    className={'booking-modal-container'}
                    size='lg'
                    centered
                // backdrop={true}
                >
                    <div className='booking-modal-content'>

                        <div className='booking-modal-header'>
                            <span className='left'>
                                <img className='header-logo' />
                                <FormattedMessage id="patient.booking-modal.title" />
                            </span>
                            <span
                                className='right'
                                onClick={closeBookingClose}
                            ><i className='fas fa-times'></i></span>
                        </div>
                        <div className='booking-modal-body'>
                            <div className='doctor-infor'>
                                Vui lòng để lại thông tin, nhu cầu của quý khách.

                                Nha Khoa MedicTeeths sẽ liên hệ đến Quý Khách trong thời gian sớm nhất.
                            </div>
                            <div className='price'>
                            </div>
                            <div className='row'>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id="patient.booking-modal.fullName" />
                                    </label>
                                    <input className='form-control'
                                        value={this.state.fullName}
                                        onChange={(event) => this.handleOnchangeInput(event, 'fullName')}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id="patient.booking-modal.phoneNumber" />
                                    </label>
                                    <input className='form-control'
                                        value={this.state.phoneNumber}
                                        onChange={(event) => this.handleOnchangeInput(event, 'phoneNumber')}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id="patient.booking-modal.email" />
                                    </label>
                                    <input className='form-control'
                                        value={this.state.email}
                                        onChange={(event) => this.handleOnchangeInput(event, 'email')}
                                    />
                                </div>
                                <div className='col-6 form-group'>
                                    <label>
                                        <FormattedMessage id="patient.booking-modal.gender" />
                                    </label>
                                    <Select
                                        value={this.state.selectedGender}
                                        onChange={this.handleChangeSelect}
                                        options={this.state.genders}
                                    />
                                </div>
                                <div className='col-12 form-group'>
                                    <label>
                                        <FormattedMessage id="patient.booking-modal.reason" />
                                    </label>
                                    <input className='form-control'
                                        value={this.state.reason}
                                        onChange={(event) => this.handleOnchangeInput(event, 'reason')}
                                    />
                                </div>
                            </div>
                        </div>
                        <BookingModalSuccess
                            isOpen={this.state.isOpenModalUser}
                            // toggleFromParent={this.toggleUserModal}
                            BookingClose={this.BookingClose}
                        // dataModal={dataModal}

                        />
                        <div className='booking-modal-footer'>
                            <button className='btn-booking-confirm1'
                                onClick={() => this.handleConfirmBooking()}
                            >
                                <FormattedMessage id="patient.booking-modal.btnConfirm" />
                            </button>
                            <button className='btn-booking-cancel1'
                                onClick={closeBookingClose}
                            >
                                <FormattedMessage id="patient.booking-modal.btnCancel" />
                            </button>


                        </div>

                    </div>
                </Modal>
            </LoadingOverlay>
        );
    }

}


const mapStateToProps = state => {
    return {
        language: state.app.language,
        genders: state.admin.genders
    };
};

const mapDispatchToProps = dispatch => {
    return {

        getGenders: () => dispatch(actions.fetchGenderStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModalHeader);
