export interface ActionI {
  id: number;
  actor_name: string| null;
  verb: string| null;
  target_name: string| null;
  timestamp: string ; // ISO datetime string
  model_name: string ;
}
