export function add(a: number, b: number): number {
  return a + b;
}

const values: number[] = [1, 2, 3];
const total: number = values.reduce((accumulator, value) => accumulator + value, 0);

if (total === 6) {
  add(total, 1);
}
