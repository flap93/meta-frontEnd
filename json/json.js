const jsonStr = '{"greeting": "hello"}';

const plainObj = JSON.parse(jsonStr);

console.log(plainObj);

console.log(plainObj.greeting);

const data = {
  firstName: "Jhon",
  lastName: "Doe",
  greeting: "Hello",
};

JSON.stringify(data);
