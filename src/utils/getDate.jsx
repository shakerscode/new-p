
//A function that return formatted date and time

function formatDateAndTime(dateTimeString) {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };

    const date = new Date(dateTimeString);
    const formattedDate = date.toLocaleDateString("en-US", options);

    const timeOptions = {
      hour12: true,
      hour: "numeric",
      minute: "numeric",
    };

    const formattedTime = date.toLocaleTimeString("en-US", timeOptions);

    return { formattedDate, formattedTime };
  }


  export default formatDateAndTime;