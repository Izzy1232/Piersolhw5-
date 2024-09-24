console.log("Piersol's Output from HW 5 Example 3");

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
const cLastNameResults = studentList.filter(x => x.lastName[0] === 'C').map(x => {
  let min = Math.min (...x.scores)
  let max = Math.max (...x.scores)
  let avg = x.scores.reduce((acc, value) => acc + value, 0) / x.scores.length

  return {
    firstName: x.firstName,
    lastName: x.lastName,
    min: min,
    max: max,
    avg: avg.toFixed(2)
  }
})

console.log(cLastNameResults)