// import { useEffect, useState } from "react";
// import { fetchUser, User } from "./utils/utils";
// import SearchBar from "./components/SearchBar";
// import { useDebounced } from "./hooks/hooks";

import { useEffect, useState } from "react";
import { fetchUser, User } from "./utils/utils";
import SearchBar from "./components/SearchBar";
import { useDebounce } from "./hooks/hooks";

// const App = () => {
//   const [loading, setLoading] = useState(false);
//   const [search, setSearch] = useState("");
//   const debouncedSearch = useDebounced(search);
//   const [users, setUsers] = useState<User[]>([]);

//   useEffect(() => {
//     const loadUser = async () => {
//       setLoading(true);

//       const users = await fetchUser(debouncedSearch);

//       setUsers(users);
//       setLoading(false);
//     };

//     loadUser();
//   }, [debouncedSearch]);

//   return (
//     <div>
//       <SearchBar onChange={setSearch} />
//       {loading && <div>Loading...</div>}
//       {!loading && users.map((user) => <div key={user.id}>{user.name}</div>)}
//     </div>
//   );
// };
// export default App;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);

      const users = await fetchUser(debouncedSearch);

      setUsers(users);
      setLoading(false);
    };

    loadUser();
  }, [debouncedSearch]);

  return (
    <div>
      <SearchBar onChange={setSearch} />
      {loading && <div>Loading...</div>}
      {!loading && users.map((user) => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};
export default App;
