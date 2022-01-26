export function formatDate(yyyymmdd) {
  if (yyyymmdd === null || yyyymmdd === "") return "";

  const dateArr = yyyymmdd.split("-");

  // const months = {
  //   1: "January",
  //   2: "February",
  //   3: "March",
  //   4: "April",
  //   5: "May",
  //   6: "June",
  //   7: "July",
  //   8: "August",
  //   9: "September",
  //   10: "October",
  //   11: "November",
  //   12: "December",
  // };

  const months = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  // let suffix = "";
  // switch (dateArr[1]) {
  //   case (1, 21, 31):
  //     suffix = "st";
  //     break;
  //   case (2, 22):
  //     suffix = "nd";
  //     break;
  //   case (3, 22):
  //     suffix = "rd";
  //     break;
  //   default:
  //     suffix = "th";
  // }
  // let day = dateArr[2].replace(/^0/, "") + suffix;
  // let month = months[dateArr[1]];
  // let year = dateArr[0];
  // return `${message}${day} of ${month}, ${year}`;

  const year = dateArr[0];
  const month = months[dateArr[1].replace(/^0/, "")];
  const day = dateArr[2].replace(/^0/, "");

  return `${month} ${day}, ${year}`;
}
