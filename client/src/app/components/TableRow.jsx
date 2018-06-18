import React from 'react';
import cx from 'classnames';
import { Table, Icon } from 'semantic-ui-react';
import TableRowItem from './TableRowItem';

export class TableRow extends React.Component<any, any> {
  render() {
    // const { id, first_name, last_name, phone, gender, age } = this.props.user;
    return (
      <Table.Row>
        <Table.Cell>{this.props.user.get('first_name')}</Table.Cell>
        <Table.Cell>{this.props.user.get('last_name')}</Table.Cell>
        <Table.Cell>{this.props.user.get('phone')}</Table.Cell>
        <Table.Cell>{this.props.user.get('gender')}</Table.Cell>
        <Table.Cell>{this.props.user.get('age')}</Table.Cell>
        <Table.Cell>
          <Icon name={'remove circle'} bordered={true} color="red" />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default TableRow;
