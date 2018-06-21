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
    firstName: '',
    lastName: '',
    phone: '',
    gender: 'male',
    age: ''
  };
  // preserve the initial state in a new object
  baseState = this.state;

  onChange = (e, data) => {
    //console.log(e.target);
    //console.log(data);
    const name = e.target.name || data.name;
    const value = e.target.value || data.value;
    this.setState({ [name]: value }, () => {
      //console.log(this.state);
    });
  };

  // onSubmit(e) {
  //   e.preventDefault();
  //   if (this.isValid()) {
  //     this.setState({ errors: {}, isLoading: true });
  //     this.props.login(this.state).then(
  //       res => this.context.router.push('/books'),
  //       err => this.setState({ errors: err.response.data.errors, isLoading: false })
  //     );
  //   }
  // }

  resetForm = () => {
    this.setState(this.baseState);
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.resetForm();
  };

  render() {
    const { firstName, lastName, phone, gender, age } = this.state;
    let formState = {};
    const formHeader = (
      <Header as="h2" color="teal" textAlign="center">
        Add Item
        <Header.Subheader>Try to add some new item to the table...</Header.Subheader>
      </Header>
    );

    if (this.props.users.pending) {
      formState = { loading: true };
    }

    const formContent = (
      <Form {...formState}>
        <Segment stacked raised>
          <Form.Field>
            <Form.Input
              icon="user"
              iconPosition="left"
              type="text"
              label="First Name"
              placeholder="First Name"
              value={firstName}
              name="firstName"
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              icon="user"
              iconPosition="left"
              type="text"
              label="Last Name"
              placeholder="Last Name"
              value={lastName}
              name="lastName"
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Field>
            <Form.Input
              icon="calendar alternate outline"
              iconPosition="left"
              type="number"
              label="Age"
              placeholder="Age"
              value={age}
              name="age"
              onChange={this.onChange}
            />
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
          <Form.Field>
            <Form.Input
              icon="phone"
              iconPosition="left"
              label="Phone Number"
              type="tel"
              placeholder="(xxx-xxx-xxxx)"
              size="mini"
              value={phone}
              name="phone"
              onChange={this.onChange}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Button color="teal" fluid size="tiny" onClick={this.submitForm}>
              Submit
            </Form.Button>
            <Form.Button color="yellow" fluid size="tiny" onClick={this.resetForm}>
              Cancel
            </Form.Button>
          </Form.Group>
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
