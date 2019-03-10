import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Manage Course</h1>
        <CourseForm course={this.state.course}/>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  /*course: React.PropTypes.object.isRequired*/
};

function mapStateToProps(state, ownProps) {
  let course = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};
  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
