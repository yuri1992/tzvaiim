import React from "react";
import Spinner from "./Spinner";

import "./ContactForm.scss";

class ContactForm extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      name: null,
      phone: null,
      details: null,
      errors: {
        name: false,
        phone: false,
      },
      isSending: false,
      sent: false,
    };
    this.submit = this.submit.bind(this);
  }

  onChange(k, event) {
    this.setState({[k]: event.target.value});
    this.validateField(k);
  }

  validateField(k) {
    switch (k) {
      case 'name':
        if (!(this.state.name && this.state.name.length > 2)) {
          this.setState({
            errors: {
              ...this.state.errors,
              name: true,
            }
          });
          return false;
        } else {
          this.setState({
            errors: {
              ...this.state.errors,
              name: false,
            }
          });
        }
        break;

      case 'phone':
        if (!(this.state.phone && this.state.phone.length > 2)) {
          this.setState({
            errors: {
              ...this.state.errors,
              phone: true,
            }
          });
          return false;
        } else {
          this.setState({
            errors: {
              ...this.state.errors,
              phone: false,
            }
          });
        }
        break;
    }

    return true;
  }


  submit(e) {
    e.preventDefault();
    if (!this.validateField('name')) {
      return false;
    }

    if (!this.validateField('phone')) {
      return false;
    }

    this.setState({
      isSending: true
    });

    let data = new FormData();
    data.append('name', this.state.name);
    data.append('phone', this.state.phone);
    data.append('details', this.state.details);


    fetch('https://www.getform.org/f/536545b8-1ede-4c8b-ac67-50b57289f08e', {
      method: 'POST',
      body: data
    }).then((res) => {

      this.setState({
        isSending: false,
        sent: true
      });
    }).catch(error => {
      this.setState({
        isSending: false,
        sent: true
      });
    });

  }

  renderThanks() {
    return <div>
      <h1>אנחנו מודים לך מאוד, נצור עמך קשר בהקדם.</h1>
    </div>
  }

  renderForm() {

    return <form ref={(input) => this._form = input} onSubmit={this.submit}
                 method="POST">
      <div className={"form-group " + (this.state.errors.name ? 'has-error' : '')}>
        <input className="form-control" name="full_name" placeholder="שם מלא*"
               onChange={(e) => this.onChange('name', e)}/>
      </div>
      <div className={"form-group " + (this.state.errors.phone ? 'has-error' : '')}>
        <input className="form-control" name="phone" placeholder="פלאפון*"
               onChange={(e) => this.onChange('phone', e)}/>
      </div>
      <div className="form-group">
        <textarea className="form-control" rows="4" name="details_msg" placeholder="פרטי האירוע"
                  onChange={(e) => this.onChange('details', e)}/>
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default submit">חזרו אלי</button>
      </div>
    </form>
  }


  render() {
    return <div className="c-form-contact">
      {this.state.isSending ? <div className="vertical-align" style={{width: '168px'}}><Spinner /></div> : null}
      {this.state.sent ? this.renderThanks() : this.renderForm()}

    </div>
  }
}


export
default
ContactForm;
