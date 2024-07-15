import timezonesList from "../../data/timezones.json";
import { findEntryByField, sortData } from "./utils";
import { ITimeZone } from "./interface";

// Get a list of all regions.
function getAllTimezones(): ITimeZone[] {
  return timezonesList;
}

function sortedTimezones(field: string): ITimeZone[] | undefined {
  if (!field) return undefined;

  return sortData(timezonesList, field);
}

function getFiltedTimezones(
  field: string,
  value: string | number,
  sort?: string
): ITimeZone[] | undefined {
  if (!field || !value) return undefined;

  const data = findEntryByField(timezonesList, field, value);
  if (sort) return sortData(data, sort);
  else return data;
}

export default {
  getAllTimezones,
  sortedTimezones,
  getFiltedTimezones,
};
