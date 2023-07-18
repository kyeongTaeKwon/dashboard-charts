interface Header {
  idx: number;
  key: string;
  label: string;
  description: string;
  property_type: string;
  value_type: string;
}

type Row = string[];

interface Data {
  headers: Header[];
  rows: Row[];
}

export interface ApiResponse {
  data: Data;
  result: boolean;
  message: string;
  version: string;
  last_compile_time: string;
}

export interface DateEventMap {
  [date: string]: string;
}
