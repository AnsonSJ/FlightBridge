import { Segment } from './segment';

export class Flight {
    bookingTimestamp: string;
    depAirport: string;
    arrAirport: string;
    depDate: string;
    retDate: string;
    providerPnr: number;
    marketingCarrier: string;
    carrierPnr: string;
    price: number;
    roundTrip: boolean;
    segments: Segment[];
}