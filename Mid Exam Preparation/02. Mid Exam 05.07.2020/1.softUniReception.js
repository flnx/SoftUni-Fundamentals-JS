function softUniReception(arr) {
  const employees = arr.map(Number);
  let [empOne, empTwo, empThree, students] = employees;
  const answersPerHour = empOne + empTwo + empThree;
  let hours = 0;

  while (students > 0) {
    hours++;
    
    if (hours % 4 == 0) {
      continue;
    }
    students -= answersPerHour;
  }
  
  console.log(`Time needed: ${hours}h.`);
}
softUniReception(['5','6','4','20']) // Time needed: 2h.
softUniReception(['1','2','3','45']) // Time needed: 10h.
softUniReception(['3','2','5','40']) // Time needed: 5h.
