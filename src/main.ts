import { ErrorMapper } from "utils/ErrorMapper";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    let creep = Game.creeps[name];
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }

    //采集能量
    if (creep.memory.role == "harvester") {
      // roleHarvester.run(creep);
    } // if creep is upgrader, call upgrader script
    else if (creep.memory.role == "upgrader") {
      // roleUpgrader.run(creep);
    }
  }
});
