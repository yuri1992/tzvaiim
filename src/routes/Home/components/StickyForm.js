import React from "react";
import "./StickyForm.scss";
import ContactForm from "./ContactForm";

class StickyForm extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.onClickForDetails = this.onClickForDetails.bind(this);
  }

  onClickForDetails() {
    this.setState({open: !this.state.open});
  }

  renderClosed() {
    return <div className="sticky sticky-close">
      <h4>
        מעוניינים לשמוע עוד ?
      </h4>
      <a onClick={this.onClickForDetails}>
        לפרטים נוספים
      </a>
    </div>;
  }

  renderOpen() {
    return <div className="sticky sticky-open">
      <span className="close" onClick={this.onClickForDetails}>X</span>
      <div className="image">
        <h2>חבילת הכל כלול רק ב1850 ש"ח</h2>
        <ul className="list text-right">
          <li className="bullet">3 עמדות מולטימדיה עם 100 משחקים</li>
          <li className="bullet">שולחן הוקי אוויר</li>
          <li className="bullet">שולחן ביליארד מקצועי</li>
          <li className="bullet">שולחן כדורגל</li>
          <li className="bullet">מתקן כדורסל</li>
        </ul>
        <ContactForm />
      </div>

    </div>;
  }

  render() {
    return <div className="c-sticky-form">

      {this.state.open ? this.renderOpen() : this.renderClosed()}
    </div>
  }
}

export default StickyForm;
