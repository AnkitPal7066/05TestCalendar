https://ankitpal7066.github.io/05TestCalendar/             

Current Date Retrieval:
started by getting the current date, month, and year using the Date object. These values are stored in the date, month, and year variables.


Selecting .days Elements:
then selecting all elements with the class name .days and store them in the daysList variable. These elements are used to display the dates in the calendar.


dateOfFirstDay Function:
This function is responsible for initializing the calendar.
It clears the content of all .days elements by setting their innerHTML to an empty string.
It calculates the day of the week for the first day of the selected month using the getDay method.
Then, it calls the fillDates function with the calculated day, month, and year as arguments.


fillDates Function:
This function populates the .days elements with dates for the selected month.
It checks the selected month to determine the number of days it has (taking leap years into account for February).
It iterates over the .days elements and sets their innerText to the appropriate date within the month.
After filling the dates, it calls the highLightColor function to highlight the current date.


highLightColor Function:
This function removes the "active" class from all .days elements and then adds the "active" class to the element that matches the current date.


fillingYears Function:
This function is responsible for populating the <select> element with id selectYear with a range of years from 1950 to 2099.


takeinputs Function:
This function is called when the user selects a new month or year from the respective <select> elements.
It retrieves the selected month and year values from the dropdowns.
If the month is "Select Month," it gets the current month. If the year is "Select Year," it gets the current year.
It then calls dateOfFirstDay with the updated month and year values.


Event Listeners:
Event listeners are added to the <select> elements with ids selectMonth and selectYear. These listeners call the takeinputs function when the 
user changes their selection.
An event listener is also added to the submit button. When clicked, it retrieves the value of the input field with the id enterDate, and then 
calls highLightColor to highlight the entered date.


This code essentially creates an interactive calendar where users can select a month and year, and it displays the corresponding dates in the calendar.
Users can also enter a specific date to highlight it. The calendar is initialized with the current month and year.





