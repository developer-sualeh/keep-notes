const userCreateDate = () => {
  const dateObj = new Date();
  const currentDate = dateObj.getDate();
  const month = dateObj.getMonth();

  let timeObj = dateObj.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  let monthName;
  switch (month) {
    case 0:
      monthName = "Jan";
      break;
    case 1:
      monthName = "Feb";
      break;
    case 2:
      monthName = "Mar";
      break;

    case 3:
      monthName = "Apr";
      break;

    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "June";
      break;
    case 6:
      monthName = "July";
      break;
    case 7:
      monthName = "Aug";
      break;
    case 8:
      monthName = "Sep";
      break;
    case 9:
      monthName = "Oct";
      break;
    case 10:
      monthName = "Nov";
      break;
    case 11:
      monthName = "Dec";
      break;
    default:
      break;
  }
  const date = `${currentDate}  ${monthName}, ${dateObj.getFullYear()}, ${timeObj}`;
  return date;
};

export default userCreateDate;
