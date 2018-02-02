const uuid = require('uuid');

//is this needed???
// function StorageException(message) {
//   this.message = message;
//   this.name = "StorageException";
// }

const Students = {
  create: function(first_name, last_name) {
    const student = {
      first_name: first_name,
      last_name: last_name,
      id: uuid.v4(),
    };
    this.students[student.id] = student;
    return student;
  },
  get: function() {
    return Object.keys(this.students).map(key => this.students[key]);
  },
  delete: function(studentId) {
    delete this.students[studentId];
  },
  update: function(updatedStudent) {
    const {id} = updatedStudent;
    if (!(id in this.students)) {
      throw StorageException(
        `Can't update student \`${id}\` because doesn't exist.`)
    }
    this.students[updatedStudent.id] = updatedStudent;
    return updatedStudent;
  }
};


function createStudent() {
  const storage = Object.create(Students);
  storage.students = {};
  return storage;
}

module.exports = {
  Students: createStudent()
}
