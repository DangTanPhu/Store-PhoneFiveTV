import React from 'react';
import AppRouters from './AppRouters';

const paypalOptions = {
  "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
  currency: "USD"
};

function App() {
  return (
    <PayPalScriptProvider options={paypalOptions}>
      <AuthProvider>
        <CartProvider>
          <Router>
            <MainLayout>
              <AppRouters />
            </MainLayout>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </Router>
        </CartProvider>
      </AuthProvider>
    </PayPalScriptProvider>
  );
}

export default App;