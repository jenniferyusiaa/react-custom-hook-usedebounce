# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

## Dependencies

- Faker.js: https://fakerjs.dev/

## App.tsx

- Add useState loading boolean with false as initial value, useState search empty string, useState users empty Array with type Array of User
- Add useEffect: loadUser function which is an async function containing setLoading to true, define users that await fetchUser function which pass search, setUsers to users, and setLoading to false, call the function at useEffect also add dependency to search
- return SearchBar component with props onChange

## utils.ts (/src/utils/utils.ts)

- Add faker.js: https://fakerjs.dev/
- import faker
- Define type of User with id number and name string, also export it
- Define users is Array of 1000, then fill with 0, then map that has parameter current value \_ and i (as index) with return object of id i and name faker person fullname, also export it (Reference: https://medium.com/@ssubin615/create-an-array-from-0-to-1000-with-style-in-javascript-js-38b8a8c1d9ec)
- fetchUser async function pass search type string: await new Promise with setTimeout, resolve, and delay 1000 ms --> return users with filter with parameter current value user and return user name toLowercase includes search toLowerCase, also export it

## SearchBar.tsx (/src/components/SearchBar.tsx)

- Define type SearchBarProps which onChange with parameter is value typed string return void
- export default SearchBar with props onChange return input with attributes type text, onChange that is a function with e parameter and return e target value, and placeholder Search user...
