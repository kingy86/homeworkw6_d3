const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map( (journey) => {
    return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map( (journey) => {
    return journey.endLocation;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.find( (mode) => {
     if (mode.transport === transport) return mode;
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.find( (journey) =>{
    if (journey.distance > minDistance) return true;
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.map( (journey) => {
    return journey.distance;
  }).reduce( (acc, sum) => {
    return acc + sum
  });
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map( (journey) => {
    return journey.transport
  });
  return result
};


module.exports = Traveller;
