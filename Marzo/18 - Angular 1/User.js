var User = /** @class */ (function () {
    function User(firstName, lastName) {
        this.callCost = 0.20;
        this.firstName = firstName;
        this.lastName = lastName;
        this.credit = 0;
        this.callsNumber = 0;
    }
    User.prototype.topUp = function (amount) {
        this.credit += amount;
    };
    User.prototype.call = function (minutes) {
        var costoTotale = minutes * this.callCost;
        if (this.credit >= costoTotale) {
            this.credit -= costoTotale;
            this.callsNumber++;
        }
        else {
            throw new Error('Insufficient credit.');
        }
    };
    User.prototype.call404 = function () {
        return this.credit;
    };
    User.prototype.getCallsNumber = function () {
        return this.callsNumber;
    };
    User.prototype.resetCalls = function () {
        this.callsNumber = 0;
    };
    return User;
}());
var user = new User('Riccardo', 'Del Piccolo');
user.topUp(1);
try {
    user.call(10);
}
catch (error) {
    console.error(error.message);
}
console.log(user.call404());
console.log(user.getCallsNumber());
user.resetCalls();
