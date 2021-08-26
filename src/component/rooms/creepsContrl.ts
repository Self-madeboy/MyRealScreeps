import spawnCreep from "component/spawn/spawnCreep";

export default class CreepsContrl {
private minNumberOfHarvesters=3
  public judgeScreep() {
      let numberOfHarvesters = _.sum(Game.creeps, 'harvester');
      if (this.minNumberOfHarvesters > numberOfHarvesters) {
        // spawnCreep.spawn()
      }

    }

}
