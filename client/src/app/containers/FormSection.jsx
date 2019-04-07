import React from 'react';
import { connect } from 'react-redux';
import FormSectionComponent from 'components/FormSection';
import { addUser } from 'actions';
// import { toggleRowEditing, editRow } from '../actions';

class FormSection extends React.PureComponent {
  render() {
    const props = {
      ...this.props,
    };

    return <FormSectionComponent {...props} />;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormSection);
