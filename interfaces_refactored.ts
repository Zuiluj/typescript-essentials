// Enter the power of interfaces!
// With such generalization, we can reuse it however we want!
// Back in interfaces, we defined it as a Vehicle only
// But notice that it will not check the 'extra' fields
// TypeScript will return true if the object passed has the
// field it needs but not if the fields are exactly there
// We can use that for general refactor!

// Now our interface is reduced to this:
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

// We can use a single interface to use
// for other objects!
printSummary(oldCivic);
printSummary(drink);
