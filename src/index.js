import { render } from '@testing-library/react';
import React, { useEffect, useState, useLayoutEffect }  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './Game';

 // ========================================

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);

 
