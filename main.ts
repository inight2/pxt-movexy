class MoveXY {
    x1: number;
    y1: number;
    constructor(x1: number, y1: number){
        this.x1 = x1;
        this.y1 = y1;
    }
    distanceTo(x2: number, y2: number){
        return Math.sqrt(Math.pow((this.x1 - x2), 2) + Math.pow(this.y1-y2, 2));
    }

    steerTo() {
        return 45;
    }
}
