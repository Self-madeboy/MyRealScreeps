/**
 * 角色工作公共方法
 */
export class CommonMethod {
  /**
   * 获取资源id
   * @param creep
   * @returns Source
   */
  public static getSource(creep: Creep): Source | null {
    let source: Source | null = null;
    if (creep.memory.sourceId) {
      source = Game.getObjectById<Source>(creep.memory.sourceId);
    } else {
      creep.memory.sourceId = creep?.pos?.findClosestByRange(FIND_SOURCES)?.id;
      source = Game.getObjectById<Source>(creep.memory.sourceId ?? "");
    }
    return source;
  }
  /**
   * 传送energy
   * @param creep
   *
   */
  public static goTarget(creep: Creep, roomPosition: Structure): void {
    const code = creep.moveTo(roomPosition, {
      reusePath: 6,
      visualizePathStyle: { fill: "#4e6ef2", lineStyle: "dotted" }
    });
    if (code === OK) {
      creep.transfer(roomPosition,RESOURCE_ENERGY);
    }
  }
  /**
   * build建筑
   * @param creep
   * @param structure 需要buil的建筑
   */
  public static buildTarget(creep: Creep, structure:ConstructionSite):void {
    const code = creep.moveTo(structure, {
      reusePath: 6,
      visualizePathStyle: { fill: "#4e6ef2", lineStyle: "dotted" }
    });
    if (code === OK) {
      creep.build(structure);
    }
  }
  /**
   * harvest energy
   * @param creep
   * @param source
   */
  public static haverst(creep: Creep,source:Source):void {
    const code = creep.moveTo(source, {
      reusePath: 6,
      visualizePathStyle: { fill: "#4e6ef2", lineStyle: "dotted" }
    });
    if (code === OK) {
      creep.harvest(source);
    }
  }

}
