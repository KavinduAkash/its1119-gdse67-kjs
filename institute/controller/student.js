import StudentModel from "../model/StudentModel.js";
import {students} from "../db/db.js";

var recordIndex;

$('#student-section').css({display: 'block'});
$('#course-section').css({display: 'none'});

// student nav management
$('#nav-student').on('click', () => {
    $('#student-section').css({display: 'block'});
    $('#course-section').css({display: 'none'});
});

// course nav management
$('#nav-course').on('click', () => {
    $('#student-section').css({display: 'none'});
    $('#course-section').css({display: 'block'});
});

function loadTable() {

    $("#student-tbl-tbody").empty();

    students.map((item, index) => {
        console.log(item)
        let record = `<tr>
                <td class="student-id-value">${item.id}</td>
                <td class="student-firstname-value">${item.firstName}</td>
                <td class="student-lastname-value">${item.lastName}</td>
                <td class="student-address-value">${item.address}</td>
                <td class="student-program-value">${item.program}</td>
            </tr>`;
        $("#student-tbl-tbody").append(record);
    });
}

$("#student-submit").on('click', () => {

    var studentId = $('#student-id').val();
    var studentFirstName = $('#first-name').val();
    var studentLastName = $('#last-name').val();
    var studentAddress = $('#address').val();
    var program = $('input[name="flexRadioDefault"]:checked').val();

    // create an object - Object Literal
    // let student = {
    //     id: studentId,
    //     firstName: studentFirstName,
    //     lastName: studentLastName,
    //     address: studentAddress,
    //     program: program
    // }

    // create an object - Class Syntax
    let student = new StudentModel(
        studentId, studentFirstName, studentLastName, studentAddress, program
    );

    // push to the array
    students.push(student);

    loadTable();
    $("#student-reset").click();
});

$("#student-update").on('click', () => {
    var studentId = $('#student-id').val();
    var studentFirstName = $('#first-name').val();
    var studentLastName = $('#last-name').val();
    var studentAddress = $('#address').val();
    var program = $('input[name="flexRadioDefault"]:checked').val();

    let studentObj = students[recordIndex];
    // let studentObj = {...students[recordIndex]}; // clone object
    studentObj.id = studentId;
    studentObj.firstName = studentFirstName;
    studentObj.lastName = studentLastName;
    studentObj.address = studentAddress;
    studentObj.program = program;

    // console.log("S1: ", studentObj);
    // console.log("S2: ", students[recordIndex]);

    loadTable();
    $("#student-reset").click();
});

$("#student-delete").on('click', () => {
    students.splice(recordIndex, 1);
    loadTable();
    $("#student-reset").click();
});

$("#student-tbl-tbody").on('click', 'tr', function() {
    let index = $(this).index();
    recordIndex = index;

    console.log("index: ", index);

    let id = $(this).find(".student-id-value").text();
    let firstname = $(this).find(".student-firstname-value").text();
    let lastname = $(this).find(".student-lastname-value").text();
    let address = $(this).find(".student-address-value").text();
    let program = $(this).find(".student-program-value").text();


    $("#student-id").val(id);
    $("#first-name").val(firstname);
    $("#last-name").val(lastname);
    $("#address").val(address);
    $(`input[name="flexRadioDefault"][value=${program}]`).prop('checked', true);

})
