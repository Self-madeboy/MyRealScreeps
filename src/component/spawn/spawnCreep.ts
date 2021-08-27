import { CommonMethod } from "common/CommonMethod";

export default class spawnCreep {
  /**
   * 生成角色
   * @param body
   * @param role
   */
    public static spawn(body: Array<BodyPartConstant>, creepsRole: creepsRole) {
    Game.spawns[CommonMethod.SpawnOfMy].spawnCreep(body, `${Game.time}`, {
      memory: { role: creepsRole }
    });
  }
}
