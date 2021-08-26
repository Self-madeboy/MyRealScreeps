interface CreepMemory {
  sourceId?: string
  targetId?:string
  role?: string;
  room?: string;
  working?: boolean;
}

type creepsRole =
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


