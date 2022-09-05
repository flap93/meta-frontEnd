// *ESTO SON SOLO EJEMPLOS

import Form from "./Form";

const movies = [
  { name: "Avenger", available: 5 },
  { name: "terminator", available: 3 },
];

// ?this a component:

export default function App() {
  return (
    <div>
      <h2>Peliculas</h2>
      {movies.map((movie) => (
        <Form {...movie} />
      ))}
    </div>
  );
}

// output del codigo de app y form :

//*Pelicuculas

//*Avenger

//*- 0  +    (el mas y el menos son botones)

//*Terminator
//*- 0  +    (el mas y el menos son botones)
