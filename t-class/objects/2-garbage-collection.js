// Reachability

let temp = {
  email: "harsh@hello.com",
  valid: 5,
};

console.log(temp);

const movie = {
  title: "Ghosted",
  release: 2023,
  production: "Apple TV",
};

function coStar(actor, actress) {
  actor.coStar = actress;
  actress.coStar = actor;

  return {
    leading: actor,
    supporting: actress,
  };
}

movie.cast = coStar(
  { name: "Chris Evans", salary: 10_000_000 },
  { name: "Ana de Armas", salary: 2_000_000 },
);

console.log(movie);
