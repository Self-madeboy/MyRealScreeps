import { CommonMethod } from "common/CommonMethod";
import CreepsContrl from "component/rooms/creepsContrl";
import spawnCreep from "component/spawn/spawnCreep";

export default class SpwanCreep implements BaseRoles {
  /**
   * creep body
   */
  baseBody: BodyPartConstant[] = [MOVE, WORK, CARRY];
  /**
   * Creep
   */
  public creep: Creep;
  /**
   * role
   */
  public role: creepsRole = "harvester";
  /**
   *
   * @param creep 构造函数
   */
  constructor(creep: Creep) {
    this.creep = creep;
  }
  /**
   * 该函数完成判断和生成角色任务
   */
  public run(): void {
    /**
     * 判断该角色存储能量
     */
    if (this.creep.store.getUsedCapacity() == this.creep.store.getCapacity()) {
      this.goBuild();
    } else {
      this.goHarvest();
    }
    /**
     * 自动生成角色
     */
    if (CreepsContrl.judgeScreep(this.role)) {
      spawnCreep.spawn(this.baseBody, this.role);
    }
  }
  /**
   * 填充spawn
   */
  goBuild() {
    const spwawn = Game.spawns[CommonMethod.SpawnOfMy];
    CommonMethod.goTransfer(this.creep, spwawn);
  }
  /**
   * 挖
   */
  goHarvest() {
    const source = CommonMethod.getSource(this.creep);
    if (source) {
      CommonMethod.haverstSource(this.creep, source);
    }
  }
}
