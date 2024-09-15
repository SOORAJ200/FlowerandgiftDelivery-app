const jwt = require('jsonwebtoken');

const response = {
  "user": {
    "_id": "64b20e1bc710d238cdf69ad5",
    "firstname": "Tranquil",
    "lastname": "Haven",
    "username": "Shoppy",
    "email": "shoppy@gmail.com",
    "password": "$2b$10$s.VkBdm6BPJkEBhVTK0ageWnWkK1KRZYMeNztAxifiu/Le0ACAuPm",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGIyMGUxYmM3MTBkMjM4Y2RmNjlhZDUiLCJpYXQiOjE2ODk0MDI0NzN9.VTQjn950vlXiUey0DVXXrUFrsxZot0fD-dFSx5__z7A"
};

const jwtToken = jwt.sign({ userId: response.user._id }, 'mysecretkey');
console.log(jwtToken);
