import React from 'react';
import cx from 'classnames';
import { Table, Icon } from 'semantic-ui-react';
import TableRowItem from './TableRowItem';

export class TableRow extends React.Component<any, any> {
  render() {
    // const { id, first_name, last_name, phone, gender, age } = this.props.users;
    return (
      <Table.Row>
        <Table.Cell>Kristan</Table.Cell>
        <Table.Cell>Duthie</Table.Cell>
        <Table.Cell>693-261-4129</Table.Cell>
        <Table.Cell>Female</Table.Cell>
        <Table.Cell>64</Table.Cell>
        <Table.Cell>
          <Icon name={'remove circle'} bordered={true} color="red" />
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default TableRow;
