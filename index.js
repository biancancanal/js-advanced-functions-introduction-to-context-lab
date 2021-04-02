

    


function createEmployeeRecord(employeeRowData) {
    let object = {
        firstName: employeeRowData[0], 
        familyName: employeeRowData[1], 
        title: employeeRowData[2], 
        payPerHour: employeeRowData[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return object;
}

function createEmployeeRecords(array) {
    console.log(array)
    let records = {
        firstName: array[0], 
        familyName: array[1], 
        title: array[2], 
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return records;
}