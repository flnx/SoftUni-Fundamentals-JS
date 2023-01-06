function wildZoo(arr) {
  const commands = {
    Add: add,
    Feed: feed,
  };

  const animals = {};

  let n = 0;

  while (arr[n] !== 'EndDay') {
    let [action, animalName, t1, t2] = arr[n].split(/[:-]/);
    t1 = Number(t1);

    const fn = commands[action];
    fn(animalName, t1, t2);
    n++;
  }

  console.log(`Animals:`);

  Object.entries(animals).forEach(([animal, animalInfo]) => {
    console.log(`${animal} -> ${animalInfo.foodNeeded}g`);
  });

  const areas = {};

  Object.values(animals).forEach((info) => {
    if (!areas[info.area]) {
      areas[info.area] = 0;
    }

    areas[info.area]++;
  });

  console.log('Areas with hungry animals:');

  Object.keys(areas).forEach((area) => {
    console.log(` ${area}: ${areas[area]}`);
  });

  function add(name, foodNeeded, area) {
    if (!animals[name]) {
      return (animals[name] = { foodNeeded, area });
    }

    animals[name].foodNeeded += foodNeeded;
    animals[name].area = area;
  }

  function feed(name, food) {
    if (animals[name]) {
      animals[name].foodNeeded -= food;

      if (animals[name].foodNeeded <= 0) {
        delete animals[name];
        console.log(`${name} was successfully fed`);
      }
    }
  }
}

wildZoo([
  'Add: Adam-4500-ByTheCreek',
  'Add: Maya-7600-WaterfallArea',
  'Add: Maya-1230-WaterfallArea',
  'Feed: Jamie-2000',
  'EndDay',
]);

// Animals:
//  Adam -> 4500g
//  Maya -> 8830g
// Areas with hungry animals:
//  ByTheCreek: 1
//  WaterfallArea: 1

console.log();

wildZoo([
  'Add: Jamie-600-WaterfallArea',
  'Add: Maya-6570-WaterfallArea',
  'Add: Adam-4500-ByTheCreek',
  'Add: Bobbie-6570-WaterfallArea',
  'Feed: Jamie-2000',
  'Feed: Adam-2000',
  'Feed: Adam-2500',
  'EndDay',
]);

// Jamie was successfully fed
// Adam was successfully fed
// Animals:
//  Maya -> 6570g
//  Bobbie -> 6570g
// Areas with hungry animals:
//  WaterfallArea: 2
