import { connect } from 'react-redux';
import React from 'react';

import MainSection from '../components/MainSection';
import FormSection from '../containers/FormSection';
import { getUsers } from '../actions';

class MainApp extends React.Component {
  componentWillMount() {
    //this.props.getUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <div className="container">
        <div className="header" />
        <main className="main-content">
          <MainSection users={users} removeUser={this.props.removeUser} />
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
    users: state.users.data
  };
};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainApp);
