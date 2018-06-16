import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { Grid, Form, Icon, Input, Segment, Header } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
];

class FormSection extends React.Component {
  state = {};

  handleChange = (e, { value }) => this.setState({ value });

  render() {
    const { value } = this.state;

    const formHeader = (
      <Header as="h2" color="teal" textAlign="center">
        Add Item
        <Header.Subheader>Try to add some new item to the table...</Header.Subheader>
      </Header>
    );

    const formContent = (
      <Form>
        <Segment stacked raised>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder="Age" />
          </Form.Field>
          <Form.Field>
            <Form.Select fluid label="Gender" options={options} placeholder="Gender" />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label style={{ visibility: 'hidden' }}>Phone Number</label>
              <Input placeholder="(xxx)" size="mini" />
            </Form.Field>
            <Form.Field>
              <label>Phone Number</label>
              <Input placeholder="xxx" size="mini" />
            </Form.Field>
            <Form.Field>
              <label style={{ visibility: 'hidden' }}>Phone Number</label>
              <Input placeholder="xxxx" size="mini" />
            </Form.Field>
          </Form.Group>
          <Form.Button color="teal" fluid size="tiny">
            Submit
          </Form.Button>
        </Segment>
      </Form>
    );

    return (
      <Grid textAlign="center" verticalAlign="middle" className="register-form-inner">
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 550 }}>
            {formHeader}
            {formContent}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default FormSection;
