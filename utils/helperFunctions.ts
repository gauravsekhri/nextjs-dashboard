export const formatDate = (payload: any) => {
  try {
    const date: any = new Date(payload);

    if (!payload || payload?.length == 0 || isNaN(date)) {
      return "-";
    }

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    var strTime = hours + ":" + minutes + " " + ampm;
    return (
      date.getMonth() +
      1 +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      " " +
      strTime
    );
  } catch (err: any) {
    console.log(err);
    return "- -";
  }
};
