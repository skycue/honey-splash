import { connect } from 'react-redux';
import TaskItem from './task_item';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    task: ownProps.task
  }
};

export default connect(mapStateToProps, null)(TaskItem);
