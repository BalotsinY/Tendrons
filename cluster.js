class Cluster {
    constructor(len, x, y) {
        var stems = 7;
        this.tend = [];
        for (var i = 0; i < stems; i++) {
            this.tend.push(new Tendril(len, random(0, 2 * PI), x, y));
        }
    }
    show() {
        for (var i = 0; i < this.tend.length; i++) {
            this.tend[i].show();
        }
    }
}