import Menu from '../ui/Menu';
import { connect } from 'react-redux';
import C from '../constants';

const mapDispatchToProps = dispatch => {
    return {
        handleFileUpload(data) {
            dispatch({
                type: C.IMPORT_QUESTIONS,
                payload: data
            });
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Menu);
