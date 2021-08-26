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
   * 去指定建筑工作
   * @param creep
   *
   */
  public static getTarget(creep: Creep, structure: ConstructionSite): void {
    const code = creep.moveTo(structure, {
      reusePath: 6,
      visualizePathStyle: { fill: "#4e6ef2", lineStyle: "dotted" }
    });
    if (code === OK) {
      creep.build(structure);
    }
  }
}
