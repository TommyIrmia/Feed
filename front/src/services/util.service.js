export const utilService = {
    getTime,
}

function getTime(timestamp) {
    let amPm = 'am';
    const date = new Date(timestamp*1000);
    const hours = date.getHours();
    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    if (hours <= 12 ) amPm = 'am';
    else amPm = 'pm'
    return `${hours}:${minutes}${amPm}`
}

