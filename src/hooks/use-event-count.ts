import { useMappedQuery } from "./use-mapped-query";
import { getEventCount } from "../services/getEventCount";
import { ApiResponse, DateEventMap } from "../types/api";

const mapUniqueEventCount = (response?: ApiResponse): DateEventMap => {
  const map: DateEventMap = {};

  response?.data?.rows.forEach((row) => {
    map[row[0]] = row[1];
  });

  return map;
};

const mapTotalEventCount = (response?: ApiResponse): DateEventMap => {
  const map: DateEventMap = {};

  response?.data?.rows.forEach((row) => {
    map[row[0]] = row[2];
  });

  return map;
};

export const useUniqueEventCountQuery = () => {
  return useMappedQuery<ApiResponse, DateEventMap>(
    "event-count",
    "unique-view",
    getEventCount,
    mapUniqueEventCount
  );
};

export const useTotalEventCountQuery = () => {
  return useMappedQuery<ApiResponse, DateEventMap>(
    "event-count",
    "page-view",
    getEventCount,
    mapTotalEventCount
  );
};
