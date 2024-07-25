import random_name from "node-random-name";

export default function generatePatient(conditon?: Object) {
  const gender = Math.random() > 0.5 ? "male" : "female";
  const age = Math.floor(Math.random() * 100);
  const name = getName(gender);
  return {
    name,
    age,
    gender,
    conditon: conditon ?? null,
  };
}

function getName(gender: string) {
  const first = random_name({ first: true, gender: gender });
  const last = random_name({ last: true });
  return first + " " + last;
}
