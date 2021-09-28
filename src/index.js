import React from 'react';
import ReactDOM from 'react-dom';

import { JournalApp } from './JournalApp';
import './firebase/firebase-config';
import './styles/styles.scss';

ReactDOM.render(

    <JournalApp />,

  document.getElementById('root')
);

