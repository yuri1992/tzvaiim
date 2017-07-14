import React from 'react'
import Gallery from 'react-photo-gallery'
import Waypoint from 'react-waypoint'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <section className="c-intro">
      <div className="c-intro-logo">
        <p className="c-intro-logo-text">
          משחקי הכיף
        </p>
        <p className="c-intro-logo-subtext">
          שולחנות משחק ומשחקי מולטימדיה לאירועים
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
      <div className="row">
        <div className="col-xs-12">
          <h1>משחקי הכיף</h1>
          <p>
            אנחנו מספקים מגוון רחב של פעילות והפעלות למגוון גדול של אירועים שדגשדג שדגשדג דשגדש גשדגדשגד ששדדג
            אנחנו מספקים מגוון רחב של פעילות והפעלות למגוון גדול של אירועים שדגשדג שדגשדג דשגדש גשדגדשגד ששדדג
            אנחנו מספקים מגוון רחב של פעילות והפעלות למגוון גדול של אירועים שדגשדג שדגשדג דשגדש גשדגדשגד ששדדג
            אנחנו מספקים מגוון רחב של פעילות והפעלות למגוון גדול של אירועים שדגשדג שדגשדג דשגדש גשדגדשגד ששדדג
            אנחנו מספקים מגוון רחב של פעילות והפעלות למגוון גדול של אירועים שדגשדג שדגשדג דשגדש גשדגדשגד ששדדג
            אנחנו מספקים מגוון רחב של פעילות והפעלות למגוון גדול של אירועים שדגשדג שדגשדג דשגדש גשדגדשגד ששדדג

          </p>
          <ul className="list-inline">
            <li>
              <h3>משחקי מולטימדיה</h3>
              <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/324809-200.png"/>
            </li>
            <li>
              <h3>משחקי שולחן</h3>
              <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/248669-200.png"/>
            </li>
            <li>
              <h3>טרמפולינות ומתנפחים</h3>
              <img src="https://d30y9cdsu7xlg0.cloudfront.net/png/64741-200.png"/>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section className="container c-gallery">
      <div>
        <h1>גלריות מאירועים</h1>
        <Gallery photos={PHOTO_SET}/>
      </div>
    </section>
    <section className="container text-center fixed">
      <div className="contact-form">
        <h1>צור קשר</h1>
        <div className="col-sm-6 col-xs-12">
          <form>
            <div className="form-group">
              <input className="form-control" name="full_name" placeholder="שם מלא*"/>
            </div>
            <div className="form-group">
              <input className="form-control" name="phone" placeholder="פלאפון*"/>
            </div>
            <div className="form-group">
              <textarea className="form-control" rows="7" name="details_msg" placeholder="פרטי האירוע">

              </textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-default submit">חזרו אלי</button>
            </div>
          </form>
        </div>
        <div className="col-sm-6 col-xs-12 contact-info">
          משחקי הכיף נותנים שירות בכל רחבי הארץ, מחדרה ועד גדרה
          גם אם אתם נמצאים רחוק יותר נשמח להגיע ולהעניק לכם חוויה מיוחדת במינה

          <br/>
          <ul className="contact-list">
            <li className="icon-phone">חייגו אלינו: 012313132</li>
            <li className="icon-email">דוא"ל: 123123@asdada.com</li>
            <li>פייסבוק</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

const PHOTO_SET = [
  {
    src: 'gallery/16114668_1121313257996262_2171923203546931495_n.jpg',
    width: 681,
    height: 1024,
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
    height: 600,
    aspectRatio: 1.2,
    lightboxImage: {
      src: 'gallery/16195696_1121313454662909_6227631864133038845_n.jpg',
    }
  },
  {
    src: 'gallery/16298482_1121313161329605_5923124723013358959_n.jpg',
    width: 600,
    height: 600,
    aspectRatio: 2,
    lightboxImage: {
      src: 'gallery/16298482_1121313161329605_5923124723013358959_n.jpg',
    }
  },
  {
    src: 'gallery/16195899_1121313327996255_6648788987918002375_n.jpg',
    width: 600,
    height: 600,
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
];

export default HomeView
