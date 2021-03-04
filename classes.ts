class Vehicle {
    constructor(public color: string) {}

    // Can only use within class and children
    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color); // orange

class Car extends Vehicle {
    // Mind that, the 'color' isn't explicitly typed
    // That's because we don't want to reassign a new field
    // Since it is already defined in parent 'Vehicle' class
    constructor(public wheels: number, color: string) {
        super(color);
    }

    // if no type is defined, a method will
    // automatically be 'public
    drive(): void {
        console.log('vroom');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }
}

const workingCar = new Car(4, 'orange');
workingCar.startDrivingProcess();
