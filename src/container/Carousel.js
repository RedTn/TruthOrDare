import Carousel from '../ui/Carousel';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        questions: state.questions
    };
};

const Container = connect(mapStateToProps)(Carousel);

export default Container;
