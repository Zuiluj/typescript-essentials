const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  },
};

// Typed params are too long!
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);

// Solution: interfaces
// Take note: The name is in uppercase. The name is also generic.
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

// Now we can do it prettier:
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};
printVehicle(oldCivic);
