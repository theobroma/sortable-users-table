import { connect } from 'react-redux';
import React from 'react';
import { fromJS, Map } from 'immutable';

import MainSection from '../components/MainSection';
import FormSection from '../components/FormSection';
import { getUsers } from '../actions';

class MainApp extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div className="container">
        <div className="header" />
        <main className="main-content">
          <MainSection
            users={users}
            filters={this.props.filters}
            editCell={this.props.editCell}
            getUsers={this.props.getUsers}
          />
        </main>
        <aside className="right-sidebar">
          <FormSection />
        </aside>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users.get('users')
  };
};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp);
