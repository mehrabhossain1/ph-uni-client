import { jwtDecode } from 'jwt-decode';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJBLTAwMDEiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MDc4MTYxMzUsImV4cCI6MTcwODY4MDEzNX0.9WsSxmW-4NNhCw5B-poUspgaHianbIk1yKc0sa_XdpU';
const decoded = jwtDecode(token);

console.log(decoded);
