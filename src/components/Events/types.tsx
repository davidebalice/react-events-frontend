export interface Location {
  description: string;
  type: string;
  coordinates: number[];
}

export interface Event {
  _id: string;
  name: string;
  ratingsAverage: number;
  ratingsQuantity: number;
  summary: string;
  description: string;
  images: string[];
  imageCover: string;
  typeDate: string;
  startDate: string;
  endDate: string | null;
  slug: string;
  __v: number;
  id: string;
  location: Location;
}

export interface EventData {
  events: any;
  status: string;
  results: number;
  data: {
    events: Event[];
  };
}

export interface CardProps {
  event: Event;
  delay: Number;
}