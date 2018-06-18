import React from 'react';
import cx from 'classnames';
import { Grid, Table, Icon } from 'semantic-ui-react';
//mock data if needed
import MOCK_DATA from '../helpers/MOCK_DATA.json';
//import TableRow from './TableRow';
import TableRow from '../Containers/TableRow';

export default class MainSection extends React.Component {
  componentWillMount() {
    this.props.getUsers();
  }

  renderClients() {
    const { users } = this.props;
    return MOCK_DATA.map(user => <TableRow key={user.id} user={user} />);
  }

  // [{
  // 	"id": "d80adb99-4b36-41d4-920f-b7d54b33fd54",
  // 	"first_name": "Kristan",
  // 	"last_name": "Duthie",
  // 	"phone": "693-261-4129",
  // 	"gender": "Female",
  // 	"age": 64
  // }, {

  render() {
    const { clients } = this.props;
    const tableHeader = (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>
            First Name<Icon name={'sort'} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            Last Name<Icon name={'sort'} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            Phone<Icon name={'sort'} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            gender<Icon name={'sort'} />
          </Table.HeaderCell>
          <Table.HeaderCell>
            age<Icon name={'sort'} />
          </Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
    );
    return (
      <Grid textAlign="center" verticalAlign="middle" className="register-form-inner">
        <Grid.Row>
          <Grid.Column>
            <Table striped>
              {tableHeader}
              <Table.Body>{this.renderClients()}</Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
