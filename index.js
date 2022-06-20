// Your code here

function createEmployeeRecord(employee) {
    return {
        firstName: employee[0],
        familyName: employee[1],
        title: employee[2],
        payPerHour: employee[3],
        timeInEvents: [],
        timeOutEvents: [],

    }
};

function createEmployeeRecords(arrayArrays) {
    return arrayArrays.map(employee => createEmployeeRecord(employee))
};

function createTimeInEvent(employeeRecord, dateStamp) {
    const [date, hour] = dateStamp
    
    const eventObj = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    }
    employeeRecord.timeInEvents.push(eventObj);
    
    
    // const [date, hour] = dateStamp.split(' ')
    // const eventObj = {
    //     type: "TimeIn",
    //     hour: parseInt(hour, 10),
    //     date: date
    // }

    // this.timeInEvents.push(eventObj)
    // return this
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    const eventObj = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    }
    
    this.timeOutEvents.push(eventObj)
    return this
}

function hoursWorkedOnDay() {
    
}
