function setup() {
    createCanvas(windowWidth, windowHeight);

    background(0);
    fill(120);
    noStroke();
    rect(0, windowHeight/2, windowWidth, windowHeight/2);

    this.tendron = new Cluster(35, windowWidth / 2, windowHeight / 2);
    this.tendron.show();

    stroke(60);
    strokeWeight(30);
    line(-10, windowHeight/2, windowWidth+10, windowHeight/2);   

    this.tree = new Tree();
    translate(windowWidth/2, windowHeight/2);
    this.tree.show(random(PI/8, PI/4), random(100, 125));
}

function mouseClicked() {
    setup();
}