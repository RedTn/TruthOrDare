import AddQuestionsForm from '../ui/AddQuestionsForm';
import { connect } from 'react-redux';
import { addQuestion, deleteQuestion } from '../store/actions';

const mapStateToProps = state => {
    return {
        questions: state.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addQuestion(data) {
            dispatch(addQuestion(data));
        },
        deleteQuestion(data) {
            dispatch(deleteQuestion(data));
        }
    };
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddQuestionsForm);

export default Container;
