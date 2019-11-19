var runDistanceCalc = function () {
    function runDistanceCalc(startDistance, goalDistance) {
      this.startDistance = startDistance;
      this.goalDistance = goalDistance;
    }
  
    runDistanceCalc.prototype.avgDistanceCalc = function avgDistanceCalc() {
      const daysLeftInYear = this.daysLeftCalc();
      const avgDistance = (this.goalDistance - this.startDistance) / daysLeftInYear;
      return avgDistance;
    };
  
    runDistanceCalc.prototype.daysLeftCalc = function daysLeftCalc() {
      const currentDate = new Date();
      const nextYear = currentDate.getFullYear() + 1;
      const finalDate = new Date(nextYear, 0, 1);
      const oneDay = 24 * 60 * 60 * 1000;
      const daysLeft = Math.round(Math.abs((finalDate - currentDate) / oneDay));
      return daysLeft;
    };
  
    return runDistanceCalc;
  }();
 