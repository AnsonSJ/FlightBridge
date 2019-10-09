import { Flight } from './flight';
import { Passenger } from './passenger';

export class Buchung {
    id: number;
    pnr: string;
    creationTimestamp: string;
    modificationTimestamp: string;
    originAirport: string;
    destinationAirport: string;
    departureDate: Date;
    returnDate: Date;
    invoice: string;
    flights: Flight[];
    passengers: Passenger[];
}