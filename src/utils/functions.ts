export function slowComputation(
  number: Number | undefined
): Number | undefined {
  for (let i = 0; i < 10000; i++) {}

  return number;
}

export function incrementNumber(number: Number, setFunction: Function): void {
  setFunction();
}
