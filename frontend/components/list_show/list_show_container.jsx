import { connect } from 'react-redux';
import ListShow from './list_show';

const mapStateToProps = ({entities: { lists }, ui: {currentListId}}) => {
  return {
    currentList: lists[currentListId]
  };
};

export default connect(
  mapStateToProps,
  null
)(ListShow);
