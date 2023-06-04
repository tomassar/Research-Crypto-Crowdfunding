import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const SEPOLIA_CHAIN_ID = 11155111
root.render(
    <ThirdwebProvider desiredChainId={ChainId.SEPOLIA_CHAIN_ID}> 
      <Router>
          <App />
      </Router>
    </ThirdwebProvider> 
  )