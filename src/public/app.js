var MOCK_STUDENTS = {
    "students": [
        {
            "name": "Jim James",
            "id": "aaaaaa"
        },
        {
            "name": "Jan Janson",
            "id": "bbbbbb"
        },

        {
            "name": "Jack Jackson",
            "id": "cccccc"
        }
    ]
};

function getStudents(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_STUDENTS)}, 100);
}

// this function stays the same when we connect
// to real API later
function displayStudents(data) {
    for (index in data.students) {
       $('body').append(
        '<p>' + data.students[index].text + '</p>');
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
