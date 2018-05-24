export class CounterService {

    ActiveToInactive:number = 0;
    InactiveToActive:number = 0;

    switchToActive(){
        this.InactiveToActive++;
        console.log(`Number of inactive to active switches ${this.InactiveToActive}`);
    }

    switchToInactive(){
        this.ActiveToInactive++;
        console.log(`Number of active to inactive switches ${this.ActiveToInactive}`);
    }
}