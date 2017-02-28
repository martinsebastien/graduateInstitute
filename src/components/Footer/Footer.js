import React, { Component } from 'react';

import style from './footer.scss';

import Container from '../Container';

export default class Footer extends Component {

  state = {};

  render() {
    return (
      <div className={style.footer}>
        <Container>
          <p>INSTITUT DE HAUTES ÉTUDES INTERNATIONALES ET DU DÉVELOPPEMENT</p>
          <p>GRADUTE INSTITUTE OF INTERNATIONAL AND DEVELOPMENT STUDIES</p>
          <p>Case postale 1672, 1211 Genève 1</p>
          <p>T +41 22 908 57 00 |</p>
          <p>&copy;The Graduate Institute, Geneva 2017</p>
        </Container>
      </div>
    );
  }

}
