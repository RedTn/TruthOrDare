import QuestionCard from '../ui/QuestionCard';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        doubleSided: state.doubleSided
    };
};

const Container = connect(mapStateToProps)(QuestionCard);

export default Container;
