import { filter } from "lodash";

export default class CreepsContrl {
  public static minNumberOfHarvesters = 5;
  public static judgeScreep(role: string): boolean {
    //TODO  测试是否准确
    let roleOfHarvesters = _.filter(Game.creeps, c => c.memory.role === role);
    let numberOfHarvesters = roleOfHarvesters.length;
    console.log(numberOfHarvesters);
    if (this.minNumberOfHarvesters > numberOfHarvesters) {
      // spawnCreep.spawn()
      return true;
    }
    return false;
  }
}
