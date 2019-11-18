class runDistanceCalc {
    constructor(startDistance, goalDistance) {
        this.startDistance = startDistance;
        this.goalDistance = goalDistance;
    }

    avgDistanceCalc() {
       const daysLeftInYear = this.dateCalc();
       let avgDistance = (this.goalDistance - this.startDistance) / daysLeftInYear;
       return avgDistance;
    }
    
    dateCalc() {
        const currentDate = new Date;
        const nextYear = currentDate.getFullYear() + 1;
        const finalDate = new Date(nextYear, 0, 1);
        const oneDay = 24 * 60 * 60 * 1000;
        const diffDays = Math.round(Math.abs((finalDate-currentDate) / oneDay));
        return diffDays;
    }
}
