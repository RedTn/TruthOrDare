import Menu from '../ui/Menu';
import { connect } from 'react-redux';
import {
    importTruths,
    importDares,
    clearTruths,
    clearDares,
    setDoubleSided
} from '../store/actions';

const mapStateToProps = state => {
    return {
        questions: state.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleFileUpload(data) {
            const { truths = [], dares = [] } = data;
            dispatch(importTruths(truths));
            dispatch(importDares(dares));
        },
        clearQuestions() {
            dispatch(clearTruths());
            dispatch(clearDares());
        },
        setDoubleSided(data) {
            dispatch(setDoubleSided(data));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
