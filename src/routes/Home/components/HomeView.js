import React from 'react';
import Gallery from 'react-photo-gallery';
import Waypoint from 'react-waypoint';
import Lightbox from 'react-images';
import StickyForm from './StickyForm';
import './HomeView.scss';

import IconJumping from './assets/icons/icon_jumping.png';
import IconMultimedia from './assets/icons/icon_multimedia.png';
import IconTable from './assets/icons/icon_table.png';
import ContactForm from './ContactForm';
import { PHOTO_SET } from './Photos';

class HomeView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      totalPages: 1,
      lightboxIsOpen: false,
      currentImage: 0,
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

  }

  openLightbox(index, event) {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
    return <div>
      <StickyForm />
      <section className="c-intro">
        <div className="c-intro-logo">
          <h1 className="c-intro-logo-text">
            משחקי הכיף
          </h1>
          <h2 className="c-intro-logo-subtext">
            שולחנות משחק ומשחקי מולטימדיה לאירועים
          </h2>
          <p className="c-intro-phone">
            052-8842306
          </p>
        </div>
      </section>
      <Waypoint />
      <section className="container-fluid text-center c-about-us fixed">
        <div className="row" style={{ width: '100%' }}>
          <div className="col-xs-12">
            <h1> משחקי הכיף - שולחנות משחק ומולטימדיה לאירועים וימי הולדת</h1>
            <p >
              לכל אירוע- בר מצווה, בת מצווה, ימי הולדת ועוד..
              משחקי הכיף יהוו את מרכזו ולב ליבו של האירוע.

              סוללת המשחקים שיש לנו להציע מכילות בתוכן שולחנות משחק מהמתקדמים
              שיש:
              הוקי אוויר,
              כדורסל זוגי חוזר,
              ביליארד,
              שולחן כדורגל
              וקונסולות משחקי וידאו מהחדישים ביותר.
              <br/>
              המשחקים שלנו מספקים חווית משחק יוצאת דופן המבטיחה הנאה צרופה
              לילדים ולבוגרים כאחד...
            </p>
            <ul className="list-inline">
              <li>
                <h3>משחקי מולטימדיה</h3>
                <img src={IconMultimedia}/>
              </li>
              <li>
                <h3>משחקי שולחן</h3>
                <img src={IconTable}/>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container c-gallery">
        <div>
          <h1>גלריות מאירועים</h1>
          <Lightbox
            theme={{ container: { background: 'rgba(0, 0, 0, 0.85)' } }}
            images={PHOTO_SET}
            backdropClosesModal={true}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            onClickPhoto={this.openLightbox}
            width={1600}
          />
          <Gallery photos={PHOTO_SET}
                   onClickPhoto={this.openLightbox}/>
        </div>
      </section>
      <section className="container-fluid text-center fixed c-recommendation">
        <div className="container contact-form">
          <h1>המלצות עלינו</h1>
          <div className="row">
            <div className="col-xs-6">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyaniv.gibert%2Fposts%2F10154968441769362%3A0&width=500"
                width="500" height="335"
                style={{ border: 'none', overflow: 'hidden' }} scrolling="no"
                frameBorder="0"
                allowTransparency="true"/>
            </div>
            <div className="col-xs-6">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsharonadabush%2Fposts%2F10207041185148208%3A0&width=500"
                width="500" height="369"
                style={{ border: 'none', overflow: 'hidden' }} scrolling="no"
                frameBorder="0"
                allowTransparency="true"/>
            </div>

            <div className="col-xs-6">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftamar.benisty%2Fposts%2F10154687984239419%3A0&width=500"
                width="500" height="316"
                style={{ border: 'none', overflow: 'hidden' }} scrolling="no"
                frameBorder="0"
                allowTransparency="true"/>
            </div>
            <div className="col-xs-6">

              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fben.perry.5070%2Fposts%2F10154613585692808%3A0&width=500"
                width="500" height="335"
                style={{ border: 'none', overflow: 'hidden' }} scrolling="no"
                frameBorder="0"
                allowTransparency="true"/>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid text-center fixed c-contact-us">
        <div className="container contact-form">
          <h1>צור קשר</h1>
          <div className="col-sm-6 col-xs-12">
            <ContactForm/>
          </div>
          <div className="col-sm-6 col-xs-12 contact-info">
            צוות משחקי הכיף מגיע לכל מקום בארץ, נשמח לעמוד לרשותכם בכל זמן שתרצו
            <br/>
            <ul className="contact-list">
              <li className="icon-phone">חייגו אלינו: <a href="tel:052-8842306">052-8842306</a>
              </li>
              <li className="icon-email"> דוא"ל:<a
                href="mailto:amitmanirr@gmail.com">amitmanirr@gmail.com</a></li>
              <li className="icon-face"><a
                href="https://www.facebook.com/mishakeihakef/">פייסבוק</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>;
  }
}

export default HomeView;
