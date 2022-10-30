import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider } from '@chakra-ui/react';

import { FirebaseAppProvider } from 'reactfire';
import { firebaseConfig } from './firebase/config';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<p>Loading...</p>}>
      <ChakraProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ChakraProvider>
    </Suspense>
  </FirebaseAppProvider>
);
