import './index.css';
import 'normalize.css';

import React from 'react';
import { createRoot } from 'react-dom/client';


import App from './components/App';

const root = createRoot(document.getElementById('root'));

root.render(<App />);

