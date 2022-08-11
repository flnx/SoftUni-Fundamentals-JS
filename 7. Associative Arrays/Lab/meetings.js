function meetings(arr) {
  let meetings = {};

  for (let el of arr) {
    let [day, name] = el.split(' ');

    if (!meetings.hasOwnProperty(day)) {
      meetings[day] = name;
      console.log(`Scheduled for ${day}`);
    } else {
      console.log(`Conflict on ${day}!`);
    }
  }

  for (let [key, value] of Object.entries(meetings)) {
    console.log(`${key} -> ${value}`);
  }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim']);
