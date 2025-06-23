function Basic() {
  const name = "John";
  const age = 25;
  const isAdmin = true;

  return (
    <>
      <p>Name: {name}</p>
      <p>Age next year: {age + 1}</p>
      <p>{name + " 's profile"}</p> {/* nmae 오타 수정 */}
      <p>{`${name} is ${age} years old`}</p>
      <p>Admin status: {String(isAdmin)}</p>
    </>
  );
}

function App() {
  return (
    <>
      <h1>JSX</h1>
      <Basic />
    </>
  );
}

export default App;
