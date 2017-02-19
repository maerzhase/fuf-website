'use strict'
'use extensible'

import React from 'react';
import ReactDOM from 'react-dom';
import autobind from 'autobind-decorator';
import classnames from 'classnames';
import styles from './style.scss';
import ScrollPilot from '../../lib/ScrollPilot';
import SectionFiktion from '../SectionFiktion';
import SectionFrauen from '../SectionFrauen';
import SectionKontakt from '../SectionKontakt';
import SectionLust from '../SectionLust';
import SectionStart from '../SectionStart';
import SectionTermine from '../SectionTermine';


export default class ViewHome extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const params = this.context.router.params;
    if(params.state=="details") document.body.style.overflowY ="hidden";
    this._scrollToSection(params);
  }

  componentDidUpdate(){
    const params = this.context.router.params;
    if(params.state=="details") document.body.style.overflowY ="hidden";
    this._scrollToSection(params);
  }

  @autobind
  _scrollToSection(params){
    const {section} = params;
    const ref = this.refs[section];
    if(ref == undefined) return;
    ScrollPilot.scrollTo(ref,500);
  }

  render() {
    const componentClass = classnames(styles.component);
    const params = this.context.router.params;
    return (
      <div className={componentClass}>
        <section ref="start" className={styles.start}>
          <SectionStart/>
        </section>
        <section ref="lust" className={styles.lust}>
          <SectionLust overlayOpen={params.section=="lust" && params.state=="details"}/>
        </section>
        <section ref="fiktion" className={styles.fiktion}>
          <SectionFiktion overlayOpen={params.section=="fiktion" && params.state=="details"}/>
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