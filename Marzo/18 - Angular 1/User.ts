class User {
    firstName: string;
    lastName: string;
    private credit: number;
    private callsNumber: number;
    private readonly callCost: number = 0.20;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.credit = 0;
        this.callsNumber = 0;
    }

    topUp(amount: number): void {
        this.credit += amount;
    }

    call(minutes: number): void {
        const costoTotale = minutes * this.callCost;
        if (this.credit >= costoTotale) {
            this.credit -= costoTotale;
            this.callsNumber++;
        } else {
            throw new Error('Insufficient credit.');
        }
    }

    call404(): number {
        return this.credit;
    }

    getCallsNumber(): number {
        return this.callsNumber;
    }

    resetCalls(): void {
        this.callsNumber = 0;
    }
}

const user = new User('Riccardo', 'Del Piccolo');
user.topUp(1);
try {
    user.call(10);
} catch (error) {
    console.error(error.message);
}
console.log(user.call404());
console.log(user.getCallsNumber());
user.resetCalls();