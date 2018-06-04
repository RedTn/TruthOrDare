import AddQuestionsForm from '../ui/AddQuestionsForm';
import { connect } from 'react-redux';
import { addTruth, addDare, deleteTruth, deleteDare } from '../store/actions';

const mapStateToProps = state => {
    return {
        questions: state.questions
    };
};

const mapDispatchToProps = dispatch => {
    return {
        addTruth(data) {
            dispatch(addTruth(data));
        },
        addDare(data) {
            dispatch(addDare(data));
        },
        deleteTruth(data) {
            dispatch(deleteTruth(data));
        },
        deleteDare(data) {
            dispatch(deleteDare(data));
        }
    };
};

const Container = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddQuestionsForm);

export default Container;
