export default class Havster extends Role {
  public run(): boolean | void {
    /**
     * 判断该角色存储能量
     */
    if (this.creep.store.getFreeCapacity() == this.creep.store.getCapacity()) {
      this.goHarvest();
    } else {
      this.goBuild()
    }
  }
  goBuild() {
    throw new Error("Method not implemented.");

  }
  goHarvest() {
    throw new Error("Function not implemented.");
  }
}
