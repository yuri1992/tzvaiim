import React from "react";
import Gallery from "react-photo-gallery";
import Waypoint from "react-waypoint";
import Lightbox from "react-images";
import StickyForm from "./StickyForm";
import "./HomeView.scss";

import IconJumping from "./assets/icons/icon_jumping.png";
import IconMultimedia from "./assets/icons/icon_multimedia.png";
import IconTable from "./assets/icons/icon_table.png";
import ContactForm from "./ContactForm";


class HomeView extends React.Component {
  static propsTypes = {};
  static PHOTO_SET = [
    {
      src: 'gallery/16114668_1121313257996262_2171923203546931495_n.jpg',
      width: 960,
      height: 640,
      aspectRatio: 1.5,
      lightboxImage: {
        src: 'gallery/16114668_1121313257996262_2171923203546931495_n.jpg',
      }
    },
    {
      src: 'gallery/16195164_1121313371329584_6649357462105484557_n.jpg',
      width: 600,
      height: 400,
      aspectRatio: 1.5,
      lightboxImage: {
        src: 'gallery/16195164_1121313371329584_6649357462105484557_n.jpg',
      }
    },
    {
      src: 'gallery/16195536_1121313217996266_5411065946643232082_n.jpg',
      width: 600,
      height: 400,
      aspectRatio: 1.3,
      lightboxImage: {
        src: 'gallery/16195536_1121313217996266_5411065946643232082_n.jpg',
      }
    },
    {
      src: 'gallery/16195696_1121313454662909_6227631864133038845_n.jpg',
      width: 600,
      height: 350,
      aspectRatio: 1.2,
      lightboxImage: {
        src: 'gallery/16195696_1121313454662909_6227631864133038845_n.jpg',
      }
    },
    {
      src: 'gallery/16298482_1121313161329605_5923124723013358959_n.jpg',
      width: 600,
      height: 300,
      aspectRatio: 2,
      lightboxImage: {
        src: 'gallery/16298482_1121313161329605_5923124723013358959_n.jpg',
      }
    },
    {
      src: 'gallery/16195899_1121313327996255_6648788987918002375_n.jpg',
      width: 600,
      height: 380,
      aspectRatio: 1.2,
      lightboxImage: {
        src: 'gallery/16195899_1121313327996255_6648788987918002375_n.jpg',
      }
    },
    {
      src: 'gallery/16298947_1128410250619896_5596323126546653377_n.jpg',
      width: 250,
      height: 180,
      aspectRatio: 1.5,
      lightboxImage: {
        src: 'gallery/16298947_1128410250619896_5596323126546653377_n.jpg',
      }
    },
    {
      src: 'gallery/16387229_1128410193953235_2905044208119533345_n.jpg',
      width: 900,
      height: 600,
      aspectRatio: 1.2,
      lightboxImage: {
        src: 'gallery/16387229_1128410193953235_2905044208119533345_n.jpg',
      }
    },
    {
      src: 'gallery/19250406_1266964986764421_1314059556131121004_o.jpg',
      width: 640,
      height: 380,
      aspectRatio: 1.2,
      lightboxImage: {
        src: 'gallery/19250406_1266964986764421_1314059556131121004_o.jpg',
      }
    }, {
      src: 'gallery/19238031_1266964633431123_6298125257113661546_o.jpg',
      width: 640,
      height: 380,
      aspectRatio: 1.2,
      lightboxImage: {
        src: 'gallery/19238031_1266964633431123_6298125257113661546_o.jpg',
      }
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      totalPages: 1,
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);

  }

  openLightbox(index, event) {
    console.log(index, event);
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
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
          <p className="c-intro-logo-text">
            משחקי הכיף
          </p>
          <p className="c-intro-logo-subtext">
            שולחנות משחק ומשחקי מולטימדיה לאירועים
          </p>
          <p className="c-intro-phone">
            052-8842306
          </p>
        </div>
      </section>
      <Waypoint onEnter={() => {
        console.log('asdasda');
      }}
                onLeave={() => {
                  console.log('asdasda2');
                }}/>

      <section className="container-fluid text-center c-about-us fixed">
        <div className="row" style={{width: '100%'}}>
          <div className="col-xs-12">
            <h1> משחקי הכיף - שולחנות משחק ומולטימדיה לאירועים וימי הולדת</h1>
            <p >
              לכל אירוע- בר מצווה, בת מצווה, ימי הולדת ועוד..
              משחקי הכיף יהוו את מרכזו ולב ליבו של האירוע.

              סוללת המשחקים שיש לנו להציע מכילות בתוכן שולחנות משחק מהמתקדמים שיש:
              הוקי אוויר,
              כדורסל זוגי חוזר,
              ביליארד,
              שולחן כדורגל
              וקונסולות משחקי וידאו מהחדישים ביותר.
              <br/>
              המשחקים שלנו מספקים חווית משחק יוצאת דופן המבטיחה הנאה צרופה לילדים ולבוגרים כאחד...
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
              <li>
                <h3>טרמפולינות ומתנפחים</h3>
                <img src={IconJumping}/>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container c-gallery">
        <div>
          <h1>גלריות מאירועים</h1>
          <Lightbox
            theme={{container: {background: 'rgba(0, 0, 0, 0.85)'}}}
            images={HomeView.PHOTO_SET}
            backdropClosesModal={true}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            onClickPhoto={this.openLightbox}
            width={1600}
          />
          <Gallery photos={HomeView.PHOTO_SET} onClickPhoto={this.openLightbox}/>
        </div>
      </section>
      <section className="container-fluid text-center fixed c-recommendation">
        <div className="container contact-form">
          <h1>המלצות עלינו</h1>
          <div className="row">
            <div className="col-xs-6">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fyaniv.gibert%2Fposts%2F10154968441769362%3A0&width=500"
                width="500" height="335" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0"
                allowTransparency="true"/>
            </div>
            <div className="col-xs-6">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsharonadabush%2Fposts%2F10207041185148208%3A0&width=500"
                width="500" height="369" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0"
                allowTransparency="true"/>
            </div>

            <div className="col-xs-6">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftamar.benisty%2Fposts%2F10154687984239419%3A0&width=500"
                width="500" height="316" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0"
                allowTransparency="true"/>
            </div>
            <div className="col-xs-6">

              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fben.perry.5070%2Fposts%2F10154613585692808%3A0&width=500"
                width="500" height="335" style={{border: "none", overflow: "hidden"}} scrolling="no" frameBorder="0"
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
              <li className="icon-phone">חייגו אלינו: <a href="tel:052-8842306">052-8842306</a></li>
              <li className="icon-email">דוא"ל: 123123@asdada.com</li>
              <li className="icon-face"><a href="https://www.facebook.com/mishakeihakef/">פייסבוק</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  }
}

export default HomeView
