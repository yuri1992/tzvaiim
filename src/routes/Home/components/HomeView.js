import React from 'react'
import Gallery from 'react-photo-gallery'
import Waypoint from 'react-waypoint'
import Lightbox from 'react-images'
import StickyForm from './StickyForm'
import './HomeView.scss'

import IconJumping from './assets/icons/icon_jumping.png'
import IconMultimedia from './assets/icons/icon_multimedia.png'
import IconTable from './assets/icons/icon_table.png'
import ContactForm from './ContactForm'
import { PHOTO_SET } from './Photos'

class HomeView extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      totalPages: 1,
      lightboxIsOpen: false,
      currentImage: 0
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)

  }

  openLightbox (index, event) {
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    })
  }

  closeLightbox () {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    })
  }

  gotoPrevious () {
    this.setState({
      currentImage: this.state.currentImage - 1
    })
  }

  gotoNext () {
    this.setState({
      currentImage: this.state.currentImage + 1
    })
  }

  render () {
    return <div>
      <StickyForm/>
      <section className="c-intro">
        <div className="c-intro-logo">
          <h1 className="c-intro-logo-text">
            צבעים בפארק
          </h1>
          <h2 className="c-intro-logo-subtext">
            בית קפה חברתי מבית שירת הפארק
          </h2>
          <p className="c-intro-phone">
            כשר חלבי | 097717485
          </p>
        </div>
      </section>
      <Waypoint/>
      <section className="container-fluid text-center c-about-us fixed">
        <div className="row" style={{width: '100%'}}>
          <div className="col-xs-12">
            <h1>צבעים בפארק - בית קפה ואירועים בטעם אחר בפארק בכפר סבא</h1>
            <p>
              בפארק כפר סבא הפסטורלי והירוק נמצאת מסעדת צבעים בפארק, בית קפה לאירועים קטנים מבית שירת הפארק, מעניק לכם אווירה מושלמת לאירועים קטנים במסעדה, עם תפריט כשר חלבי, עד 100 אורחים.
            <br/>
              תפריט האירועים בניצוחו של השף משה מנור כולל דגים טריים במגוון צורות בישול, פסטות ומנות יצירתיות מהמטבח האיטלקי, קינוחים מרהיבים ועוד.
            <br/>
              צוות האירועים עם רזומה של שנים רבות בתחום האירועים הינו קשוב, חם, ומקצועי מאוד.
            <br/>
              כאן תחגגו אירועי בראנץ מושלמים באוויר הפתוח עם ציוצי הציפורים או אירועי ערב עם מפות לבנות, יין משובח, טעמים נדירים, ואווירה שלווה ומרגשת.
              <br/>
              לפרטים נוספים התקשרו : 097717485
            </p>
            <ul className="list-inline">
              <li className="banner banner-green">
                כשר חלבי
              </li>

              <li className="banner banner-red">
              אירועים עד 100 איש
              </li>

              <li className="banner banner-blue">
                תפריט עשיר
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
            images={PHOTO_SET.map((i) => ({src: i.lightboxImage.src}))}
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
               src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fshamir.mor%2Fposts%2F10156119438183516%3A0&width=500"
               width="500" height="375"
               style={{border: 'none', overflow: 'hidden'}} scrolling="no"
               frameBorder="0"
               allowTransparency="true"
               allow="encrypted-media"/>
            </div>
            <div className="col-xs-6">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fstephietaylor%2Fposts%2F10156353186729575%3A0&width=500"
                width="500" height="375"
                style={{border: 'none', overflow: 'hidden'}} scrolling="no"
                frameBorder="0"
                allowTransparency="true" allow="encrypted-media"/>
            </div>
            <div className="col-xs-6">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fadielazari%2Fposts%2F10159701579305526%3A0&width=500"
                width="500" height="375"
                style={{border: 'none', overflow: 'hidden'}} scrolling="no"
                frameBorder="0"
                allowTransparency="true" allow="encrypted-media"/>
            </div>
            <div className="col-xs-6">
              <iframe
                src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D1569347953124897%26id%3D100001491217392%26substory_index%3D0&width=500"
                width="500" height="375"
                style={{border: 'none', overflow: 'hidden'}} scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"/>
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
            צבעים בפארק בית קפה לאירועים קטנים מבית שירת הפארק, מעניק לכם אווירה מושלמת לאירועים קטנים במסעדה, עם תפריט כשר חלבי, עד 80 אורחים.
            <br/>
            תפריט האירועים בניצוחו של השף משה מנור כולל דגים טריים במגוון צורות בישול, פסטות ומנות יצירתיות מהמטבח האיטלקי, קינוחים מרהיבים ועוד.
            <br/>
            <ul className="contact-list">
              <li className="icon-phone">חייגו אלינו: <a href="tel:097717485">097717485</a>
              </li>
              <li className="icon-email"> דוא"ל:<a
                href="mailto:amitmanirr@gmail.com">amitmanirr@gmail.com</a></li>
              <li className="icon-face"><a
                href="https://www.facebook.com/%D7%A6%D7%91%D7%A2%D7%99%D7%9D-%D7%91%D7%A4%D7%90%D7%A8%D7%A7-1645849635717807/">פייסבוק</a></li>
            </ul>
          </div>

          <div className="col-xs-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4639.541798303267!2d34.922659533653935!3d32.18315635287531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2f752f52bf03c98a!2z16bXkdei15nXnSDXkdek15DXqNenLSDXpNeQ16jXpyDXm9ek16gg16HXkdeQ!5e0!3m2!1sen!2sil!4v1523699475205"
               height="450" frameBorder="0" style={{width: '100%', border: 0}} allowFullScreen/>
          </div>
        </div>
      </section>
    </div>
  }
}

export default HomeView
