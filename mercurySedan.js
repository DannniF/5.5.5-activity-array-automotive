// moved the code from VehicleBaseClass.js due to an error on line 2 of the original code. 

class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}



//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...



class A28MercurySedan extends Vehicle {
    constructor(make,model,year,color,mileage){
        super(make,model,year,color,mileage)
            this.maximumPassenger = 4
            this. passengers = 5
            this. numberOfWheels = 1
            this.maximumSpeed = 130
            this.fuel = 10
            this.scheduleService = false
          
    }
    loadPassenger(){ //method 1 which checks the amount of 
        if(this.passengers >= this.maximumPassenger){
            console.log('not enough space in this car')
        } else {
            console.log('more passangers fit in car')
        }
    }
    start(){       // here we are making an if else statement which checks if fuel is greater than 0 .
        if (this.fuel > 0){
            console.log("Rev up your engines")    // im running into an issue where if i put the console.log after the return it is seen as unreachable code. 
            return this.started = true
           
        } else {
            console.log('what are you doing you forgot to put gas')
            return this.started = false
           
        }

    }
    scheduleServices(){  //in this method we want to check how many miles a car has to recomend if it needs service 
        if(this.mileage > 16000){
            this.scheduleService = true
            console.log('bring your car in for services')
            return this.scheduleService;
        } else {
            console.log('no schedual is needed')
            return this.schedule
        }


    }
}

let mercury = new A28MercurySedan('mercury','sedan','2012','black',5000)




mercury.start()
mercury.loadPassenger()
mercury.scheduleServices()
//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
