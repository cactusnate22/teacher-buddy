var MOCK_STUDENTS = {
    "students": [
        {
            "first_name": "Jim",
            "last_name": "James",
            "studentId": "aaaaaa"
        },
        {
            "first_name": "Jan",
            "last_name": "Janson",
            "studentId": "bbbbbb"
        },

        {
            "first_name": "Jack",
            "last_name": "Jackson",
            "studentId": "cccccc"
        }
    ]
};

function getStudents(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_STUDENTS)}, 100);
}

// this function stays the same when we connect
// to real API later
function displayStudents(data) {
    for (index in data.studentList) {
       $('body').append(
        '<p>' + data.studentList[index].text + '</p>');
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayStudents() {
    getStudents(displayStudents);
}

$(function() {
    getAndDisplayStudents();
})
