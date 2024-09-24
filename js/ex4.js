console.log("Piersol's Output from HW 5 Example 4");

const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];
studentList.forEach(x => {
  x.scores = x.scores.map(x => x + 5)
})
studentList.forEach(x => {
  let sum = x.scores.reduce((acc,value) => acc + value, 0)
  let avg = sum / x.scores.length
  x.scores.push (avg)
})

studentList.forEach(x => {
  console.log(`Name: ${x.firstName} ${x.lastName}`);
  console.log(`Updated scores are: ${x.scores.join(", ")}`);
})