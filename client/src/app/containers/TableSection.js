import { connect } from 'react-redux';
import React from 'react';

import TableSectionComponent from 'components/TableSection';
import { getUsers } from 'actions';

class TableSection extends React.PureComponent {
  render() {
    const props = {
      ...this.props,
    };

    return <TableSectionComponent {...props} />;
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.data,
  };
};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableSection);
