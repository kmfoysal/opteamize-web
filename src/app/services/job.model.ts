export interface Job {
  id?: number;
  calculationName: string;
  calculationDesc: string;
  roadNetwork: string;
  startingLocation: string;
  publicDomainOccupancy: string;
  parkingZone: string;
  parkingLane: string;
  parkingPressure: string;
  bycycleParking: string;
  publicToilet: string;
  numberOfTeams: number;
  peopleOfTeam: number;
  startDate: string;
  endDate: string;
  lengthOfShift: string;
  tolerance: number;
  minNumBuys: number;
  maxNumBuys: number;
  reachableOnFoot: string;
  reachableOnbike: string;
  mixParkingtriff: boolean;
  minNumToilets: number;
  walkingSpeed: number;
  bikingSpeed: number;
  timeToCheck: string;
  timeToWrite: string;
  myYear: number;
  myMonth: number;
  myDay: number;
}


