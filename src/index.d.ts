interface CreepMemory {
  sourceId?: string
  targetId?:string
  role?: string;
  room?: string;
  working?: boolean;
}

type BodyAutoConfigConstant =
  | "harvester"
  | "worker"
  | "upgrader"
  | "manager"
  | "processor"
  | "reserver"
  | "attacker"
  | "healer"
  | "dismantler"
  | "remoteHarvester";
