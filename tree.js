class Tree {
    constructor() {}
    show(theta, len) {
        stroke(255);
        if (len > 70) {
            strokeWeight(10);
            stroke(175);
        } else if (len > 50) {
            strokeWeight(7);
            stroke(195);
        }
        else if (len > 30) {
            strokeWeight(4);
            stroke(215);
        }
        else {
            strokeWeight(2);
            stroke(255);
        }
        line(0, 0, 0, -len);
        translate(0, -len);
        if (len > 5) {
            push();
            rotate(theta);
            this.show(theta, len * .7);
            pop();
            push();
            rotate(-theta);
            this.show(theta, len * .7);
            pop();
        }
    }
}