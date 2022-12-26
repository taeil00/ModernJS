class Lecture {
  constructor(hasTutor, lectID, members) {
    this.hasTutor = hasTutor;
    this.lectID = lectID;
    this.members = members;
  }
}

function getStudents(obj) {
  let { hasTutor, lectID, members } = obj;
  let tutor;
  let students;

  hasTutor ? ([tutor, ...students] = members) : ([...students] = members);
  return students;
}

const L001 = new Lecture(false, "L001", ["Ahn", "Han", "Park"]);
const L002 = new Lecture(true, "L002", ["Lee", "Choi", "Kim"]);

console.log(`강의: ${L001.lectID}, 수강생 : ${getStudents(L001)}`);
console.log(`강의: ${L002.lectID}, 수강생: ${getStudents(L002)}`);
