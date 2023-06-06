let hours = prompt("Please enter  quantity of hours", "hours");
if (hours.includes(','))
    hours = hours.replace(',','.')
seconds = hours * 3600
alert('This quantity of hours has '+seconds+' sec. in it')