class Tendril {
    constructor(len, theta, x, y) {
        this.segLen = 5;
        this.len = len;
        this.theta = theta;
        this.x = x;
        this.y = y;
    }
    show() {
        if (this.len > 40) {
            stroke(50);
            strokeWeight(20);
        } else if (this.len > 30) {
            stroke(100);
            //stroke(255, 0, 0);
            strokeWeight(10);
        } else if (this.len > 20) {
            stroke(150);
            //stroke(0, 255, 0);
            strokeWeight(5);
        } else if (this.len > 10) {
            stroke(200);
            //stroke(0, 0, 255);
            strokeWeight(3);
        } else
            stroke(255);
        //stroke(255, 255, 0);

        this.startX = this.x;
        this.startY = this.y;
        for (var i = 0; i < this.len; i++) {
            this.theta += random(-PI / 8, PI / 8);
            this.endX = this.startX + cos(this.theta) * this.segLen;
            this.endY = this.startY + sin(this.theta) * this.segLen;
            line(this.startX, this.startY, this.endX, this.endY);
            this.startX = this.endX;
            this.startY = this.endY;
        }
        if (this.len > 3) {
            var temp = new Cluster(this.len - 20, this.startX, this.startY);
            temp.show();
        }
    }
}