import Menu from '../ui/Menu';
import { connect } from 'react-redux';
import { importTruths, importDares, clearTruths, clearDares } from '../store/actions';

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
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
