function Calculator(){

    this.addition = function(x,y){
        if (typeof x === 'number' && typeof y === 'number') {
            return x+y;
        } else {
            return false;
        }
    };

    this.subtract = function(x,y) {
        if (typeof x === 'number' && typeof y === 'number') {
            return x-y;
        } else {
            return false;
        }
    };

    this.multiply = function(x,y) {
        if (typeof x === 'number' && typeof y === 'number') {
            return x*y;
        } else {
            return false;
        }
    };

    this.devide = function(x,y) {
        if (typeof x === 'number' && typeof y === 'number') {
            return x/y;
        } else {
            return false;
        }
    };

}
