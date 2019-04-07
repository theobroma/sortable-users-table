import React from 'react';
import { connect } from 'react-redux';
import TableRowComponent from 'components/TableRow';
import { removeUser } from 'actions';

class TableRow extends React.PureComponent {
  render() {
    const props = {
      ...this.props,
    };

    return <TableRowComponent {...props} />;
  }
}

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = dispatch => ({ removeUser: id => dispatch(removeUser(id)) });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TableRow);
