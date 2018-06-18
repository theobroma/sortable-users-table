import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import { Grid, Form, Icon, Input, Segment, Header } from 'semantic-ui-react';

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
];

class FormSection extends React.Component {
  state = {
    first_name: 'Hello',
    last_name: '',
    phone1: 555,
    phone2: 555,
    phone3: 9999,
    gender: 'female',
    age: 0
  };

  onChange = (e, data) => {
    //console.log(e.target);
    //console.log(data);
    const name = e.target.name || data.name;
    const value = e.target.value || data.value;
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });
  };

  render() {
    const { first_name, last_name, phone1, phone2, phone3, gender, age } = this.state;

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
            <input
              placeholder="First Name"
              value={first_name}
              name="first_name"
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              placeholder="Last Name"
              value={last_name}
              name="last_name"
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Age</label>
            <input placeholder="Age" value={age} name="age" onChange={this.onChange} />
          </Form.Field>
          <Form.Field>
            <Form.Select
              fluid
              label="Gender"
              options={options}
              placeholder="Gender"
              value={gender}
              name="gender"
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Field>
              <label style={{ visibility: 'hidden' }}>Phone Number</label>
              <Input
                placeholder="(xxx)"
                size="mini"
                value={phone1}
                name="phone1"
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label>Phone Number</label>
              <Input
                placeholder="xxx"
                size="mini"
                value={phone2}
                name="phone2"
                onChange={this.onChange}
              />
            </Form.Field>
            <Form.Field>
              <label style={{ visibility: 'hidden' }}>Phone Number</label>
              <Input
                placeholder="xxxx"
                size="mini"
                value={phone3}
                name="phone3"
                onChange={this.onChange}
              />
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
