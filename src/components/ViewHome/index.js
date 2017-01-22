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
    this._scrollToSection();
  }

  componentDidUpdate(){
    this._scrollToSection();
  }

  @autobind
  _scrollToSection(){
    const params = this.context.router.params;
    const {section} = params;
    const ref = this.refs[section];
    const offset = ref.getBoundingClientRect().top;
    ScrollPilot.scrollTo(offset,200);
  }

  render() {
    const componentClass = classnames(styles.component);
    return (
      <div className={componentClass}>
        <section ref="start">
          <SectionStart/>
        </section>
        <section ref="lust">
          <SectionLust/>
        </section>
        <section ref="fiktion">
          <SectionFiktion/>
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