// import { faker } from "@faker-js/faker"; //https://fakerjs.dev/api/faker.html

// export interface User {
//   id: number;
//   name: string;
// }

// // https://medium.com/@ssubin615/create-an-array-from-0-to-1000-with-style-in-javascript-js-38b8a8c1d9ec

// export const users = Array(1000)
//   .fill(0)
//   .map((_, i) => ({
//     id: i,
//     name: faker.person.fullName(), // https://fakerjs.dev/api/person.html#fullname
//   }));

// export const fetchUser = async (search: string) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // https://medium.com/@sharareshaddev/understanding-promises-in-javascript-and-their-use-in-react-a77564aae576

//   return users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase())
//   );
// };

// //https://fakerjs.dev/api/faker.html
// // https://medium.com/@ssubin615/create-an-array-from-0-to-1000-with-style-in-javascript-js-38b8a8c1d9ec
// // https://fakerjs.dev/api/person.html#fullname
// // https://medium.com/@sharareshaddev/understanding-promises-in-javascript-and-their-use-in-react-a77564aae576

import { faker } from "@faker-js/faker";

export interface User {
  id: number;
  name: string;
}

export const users = Array(1000)
  .fill(0)
  .map((_, i) => ({
    id: i,
    name: faker.person.fullName(),
  }));

export const fetchUser = async (search: string) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
};
