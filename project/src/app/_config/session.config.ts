export interface SessionToken {
  name: string;
  data: {
    uid: number;
    start: string;
  };
}
