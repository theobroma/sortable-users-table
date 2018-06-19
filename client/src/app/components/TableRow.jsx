import React from 'react';
import cx from 'classnames';
import { Table, Icon } from 'semantic-ui-react';
import TableRowItem from './TableRowItem';

export class TableRow extends React.Component {
  render() {
    const { id, firstName, lastName, phone, gender, age } = this.props.user;
    return (
      <Table.Row>
        <Table.Cell>{firstName}</Table.Cell>
        <Table.Cell>{lastName}</Table.Cell>
        <Table.Cell>{phone}</Table.Cell>
        <Table.Cell>{gender}</Table.Cell>
        <Table.Cell>{age}</Table.Cell>
        <Table.Cell>
          <Icon name={'remove circle'} bordered={true} color="red" />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default TableRow;
