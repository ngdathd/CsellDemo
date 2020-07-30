import ToastNew from 'react-native-root-toast';
import vi from '../config/locates/vi.json';
import en from '../config/locates/en.json';

export default class Utilities {
    static log(log) {
        if (__DEV__) {
            var Reactotron = require('reactotron-react-native');
            Reactotron.default.log(log);
        }
    }

    static logException(nameComponent, error) {
        if (__DEV__) {
            var Reactotron = require('reactotron-react-native');
            Reactotron.default.log(
                ' | ' +
                nameComponent +
                '.js | ' +
                String(error) +
                ' | ' +
                String(JSON.stringify(error)),
            );
        }
    }

    static showHideRootLoading(isShow, textBody) {
        try {
            if (
                isShow === false &&
                global.rootLoadingContext.state.isShow === false
            ) {
                return;
            }

            if (isShow === true && global.rootLoadingContext.state.isShow === true) {
                return;
            }

            global.rootLoadingContext.setState({
                isShow: isShow,
                textBody: textBody ? textBody : 'Vui lòng chờ...',
            });
        } catch (error) {
            Utilities.logException('Utilities', error);
        }
    }

    static onChangeLanguage(languageCode) {
        try {
            switch (languageCode) {
                case 'vi':
                    global.language = vi;
                    break;
                case 'en':
                    global.language = en;
                    break;
                default:
                    global.language = vi;
                    break;
            }
        } catch (error) {
            global.language = vi;
        }
    }

    static showToastError(textWarning) {
        let text = '';
        switch (textWarning) {
            case 'ACCOUNT_INCORRECT':
                text = 'Tài khoản hoặc mật khẩu không đúng';
                break;
            case 'SMS_CODE_INVALID':
                text = 'Mã xác thực không hợp lệ';
                break;
            case 'UPDATE_FAIL':
                text = 'Cập nhập thất bại';
                break;
            case 'ERROR':
            case 'C_ERROR':
                text = 'Lỗi';
                break;
            case 'FAIL':
                text = 'Thất bại';
                break;
            case 'PRODUCT_INVALID':
                text = 'Sản phẩm không tồn tại';
                break;
            case 'LOGIN_FAIL':
                text = 'Đăng nhập thất bại';
                break;
            case 'NOT_FOUND':
                text = 'Invalid';
                break;
            case 'BAD_REQUEST':
                text = 'Thất bại';
                break;
            case 'UNAUTHORIZED':
                text = 'Hết phiên làm việc';
                break;
            case 'SERVER_ERROR':
                text = 'Kết nối máy chủ thất bại';
                break;
            case 'CREATE_FAILED':
                text = 'Tạo mới thất bại';
                break;
            case 'UPDATE_FAILED':
                text = 'Thất bại';
                break;
            case 'REMOVE_FAILED':
                text = 'Thất bại';
                break;
            case 'EMAIL_EXISTS':
                text = 'Email đã tồn tại';
                break;
            case 'PHONE_EXISTS':
                text = 'Điện thoại đã tồn tại';
                break;
            case 'CATEGORY_ID_EXISTS':
                text = 'Mã danh mục đã tồn tại';
                break;
            default:
                text = textWarning;
                break;
        }

        ToastNew.show(text, {
            duration: ToastNew.durations.SHORT,
            position: 150,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: 'black',
        });
    }

    static showToastSuccess(textSuccess) {
        let text = '';
        switch (textSuccess) {
            case 'DELETED':
                text = 'Đã xóa';
                break;
            case 'SUCCESSFUL':
                text = 'Thành công';
                break;
            case 'CREATE_SUCCESS':
                text = 'Đã tạo';
                break;
            case 'UPDATE_SUCCESS':
                text = 'Đã cập nhập';
                break;
            case 'REMOVE_SUCCESS':
                text = 'Đã xóa';
                break;
            case 'EMAIL_CODE_SENDED':
                text = 'Đã gửi';
                break;

            default:
                text = textSuccess;
                break;
        }
        ToastNew.show(text, {
            duration: ToastNew.durations.SHORT,
            position: -100,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
            backgroundColor: 'green',
        });
    }

    static showDialogInput(
        isShow,
        title,
        description,
        actionInputs,
        actionButtons,
    ) {
        try {
            global.dialogInputContext.setState({
                show: isShow,
                title,
                description,
                actionInputs,
                actionButtons,
            });
        } catch (error) { }
    }
}
