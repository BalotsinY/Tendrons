class Tendril {
    constructor(len, theta, x, y) {
        this.segLen = random(3, 5);
        this.len = len;
        this.theta = theta;
        this.x = x;
        this.y = y;
    }
    show() {
        if (this.len > 30) {
            stroke(10);
            strokeWeight(10);
        } else if (this.len > 25) {
            stroke(20);
            strokeWeight(7);
        } else if (this.len > 20) {
            stroke(30);
            strokeWeight(4);
        } else if (this.len > 10) {
            stroke(40);
            strokeWeight(3);
        } else
            stroke(50);

        this.startX = this.x;
        this.startY = this.y;
        for (var i = 0; i < this.len; i++) {
            if (this.theta - PI > 0 || this.theta < 0)
                this.theta = random(PI/4, 3*PI/4);
            this.theta += random(-PI / 8, PI / 8);
            this.endX = this.startX + cos(this.theta) * this.segLen;
            this.endY = this.startY + sin(this.theta) * this.segLen;
            line(this.startX, this.startY, this.endX, this.endY);
            this.startX = this.endX;
            this.startY = this.endY;
        }
        if (this.len > 3) {
            var temp = new Cluster(this.len - 7, this.startX, this.startY);
            temp.show();
        }
    }
}