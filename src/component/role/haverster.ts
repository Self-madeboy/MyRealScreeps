import { CommonMethod } from "common/CommonMethod";

export default class SpwanCreep extends BaseRole {
  private role = "harvester";
  public run(): void {
    /**
     * 判断该角色存储能量
     */
    if (this.creep.store.getFreeCapacity() == this.creep.store.getCapacity()) {
      this.goHarvest();
    } else {
      this.goBuild();
    }
  }
  /**
   * 填充spawn
   */
  goBuild() {
    const spwawn = Game.spawns[SpawnOfMy];
    CommonMethod.goTarget(this.creep, spwawn);
  }
  /**
   * 挖
   */
  goHarvest() {
    const source = CommonMethod.getSource(this.creep);
    if (source) {
      CommonMethod.haverst(this.creep, source);
    }
  }
}
