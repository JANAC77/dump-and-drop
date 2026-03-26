# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



AIzaSyBB1nInTVCBvXEel1Gqx8rNpoEvEIIYda8

const BASE_URL = 'http://192.168.1.4:5000';

// Helper: get stored token
const getToken = () => localStorage.getItem('token');

// 1. Send OTP
async function sendOTP(phone) {
  const res = await fetch(${BASE_URL}/api/auth/send-otp, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone })
  });
  return res.json();
}

// 2. Verify OTP & Login
async function verifyOTP(phone, otp) {
  const res = await fetch(${BASE_URL}/api/auth/verify-otp, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ phone, otp, role: 'customer' })
  });
  const data = await res.json();
  if (data.success) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('user', JSON.stringify(data.user));
  }
  return data;
}

// 3. Search Rides
async function searchRides(from, to, seats = 1) {
  const res = await fetch(
    ${BASE_URL}/api/ride/search?from=${from}&to=${to}&seats=${seats},
    {
      headers: { 'Authorization': Bearer ${getToken()} }
    }
  );
  return res.json();
}

// 4. Book a Ride
async function bookRide(rideId, fromCity, toCity, seats, pickupIndex, dropIndex) {
  const res = await fetch(${BASE_URL}/api/ride/${rideId}/book, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Bearer ${getToken()}
    },
    body: JSON.stringify({ rideId, fromCity, toCity, seats, pickupIndex, dropIndex })
  });
  return res.json();
}

// 5. Get My Bookings
async function getMyBookings() {
  const res = await fetch(${BASE_URL}/api/ride/bookings/my, {
    headers: { 'Authorization': Bearer ${getToken()} }
  });
  return res.json();
}




call the apis and show it in website thats it it will work