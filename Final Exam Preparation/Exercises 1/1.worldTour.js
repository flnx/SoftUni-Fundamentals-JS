function worldTour(input) {
  let commands = {
    'Add Stop': addStop,
    'Remove Stop': removeStop,
    Switch: swapPlaces,
  };

  let vacationStops = input.shift();

  while (input[0] !== 'Travel') {
    let [command, positionOne, positionTwo] = input.shift().split(':');
    let action = commands[command];
    action(positionOne, positionTwo);
    console.log(vacationStops);
  }

  console.log(`Ready for world tour! Planned stops: ${vacationStops}`);

  // Add Stop: - index - text) > Insert the given string IF the index is valid
  function addStop(index, text) {
    index = Number(index);
    if (index >= 0 && index <= vacationStops.length) {
      let leftHalf = vacationStops.substring(0, index);
      let rightHalf = vacationStops.substring(index);
      return (vacationStops = leftHalf + text + rightHalf);
    }
  }

  // Remove Stop: - start index, end index > Remove the elemnts of the string from start to end index if both valid
  function removeStop(startIndex, endIndex) {
    startIndex = Number(startIndex);
    endIndex = Number(endIndex);
    if (vacationStops[startIndex] && vacationStops[endIndex]) {
      let wordToRemove = vacationStops.substring(startIndex, endIndex + 1);
      return (vacationStops = vacationStops.replace(wordToRemove, ''));
    }
  }

  // Switch: If the old string is in the initial string, replace it with the new one (all occurrences)
  function swapPlaces(oldPlace, newPlace) {
    let pattern = new RegExp(oldPlace, 'g');
    return (vacationStops = vacationStops.replace(pattern, newPlace));
  }
}
worldTour([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel',
]);
