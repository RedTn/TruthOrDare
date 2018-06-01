import Menu from '../ui/Menu';
import { connect } from 'react-redux';
import { importQuestions, clearQuestions } from '../store/actions';

const mapStateToProps = state => {
    return {
        questions: state.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleFileUpload(data) {
            dispatch(importQuestions(data));
        },
        clearQuestions() {
            dispatch(clearQuestions());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);
