export interface dst {
  startDate?: Date;
  endDate?: Date;
  offset?: string;
  shift?: string;
}

export interface ITimeZone {
  id: number;
  tzCode: string;
  area: string;
  gmt: string;
  utc: string;
  dst: dst | null;
}
