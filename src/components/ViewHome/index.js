'use strict'
'use extensible'

import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import styles from './style.scss';
import ScrollPilot from '../../lib/ScrollPilot';
import SectionFiktion from '../SectionFiktion';
import SectionWeapon from '../SectionWeapon';
import SectionFrauen from '../SectionFrauen';
import SectionKontakt from '../SectionKontakt';
import SectionLust from '../SectionLust';
import SectionStart from '../SectionStart';
import SectionTermine from '../SectionTermine';
import zenscroll from 'zenscroll';

export default class ViewHome extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const params = this.context.router.params;
    if(params.state=="details"){
      window.preventScroll = true;
    }
    if(params.state==undefined ) {
      window.preventScroll = false;
    }
    this._scrollToSection(params);
  }

  componentDidUpdate(){
    const params = this.context.router.params;
    if(params.state=="details"){
      window.preventScroll = true;
    }
    if(params.state==undefined ) {
      window.preventScroll = false;
    }
    this._scrollToSection(params);
  }

  _scrollToSection = (params) => {
    const {section} = params;
    const ref = this.refs[section];
    if(ref == undefined || section === this.lastSection) return;
    zenscroll.to(ReactDOM.findDOMNode(ref),1000);
    this.lastSection = section;
  }

  render() {
    const componentClass = classnames(styles.component);
    const params = this.context.router.params;
    return (
      <div className={componentClass}>
        <section ref="start" className={styles.start}>
          <SectionStart/>
        </section>
        <section ref="weapon" className={styles.weapon}>
          <SectionWeapon overlayOpen={params.section=="weapon" && params.state=="details"} galleryOpen={params.id != undefined}/>
        </section>
        <section ref="lust" className={styles.lust}>
          <SectionLust overlayOpen={params.section=="lust" && params.state=="details"}  galleryOpen={params.id != undefined}/>
        </section>
        <section ref="fiktion" className={styles.fiktion}>
          <SectionFiktion overlayOpen={params.section=="fiktion" && params.state=="details"} galleryOpen={params.id != undefined}/>
        </section>
        <section ref="frauen">
          <SectionFrauen/>
        </section>
        <section ref="termine">
          <SectionTermine/>
        </section>
        <section ref="kontakt">
          <SectionKontakt/>
        </section>
      </div>
    );
  }
};

ViewHome.contextTypes = {
  router: React.PropTypes.object,
}