import axios from "axios";

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

export const formatPostDate = (payload: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const inputDate: any = new Date(payload);

  if (!payload || payload?.length == 0 || isNaN(inputDate)) {
    return "-";
  }

  const day = inputDate.getDate();
  const monthIndex = inputDate.getMonth();
  const year = inputDate.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return formattedDate;
};

export const getLastUploadTime = (uploadTime: any) => {
  if (uploadTime) {
    const currentTime: any = new Date();
    const activeTime: any = new Date(uploadTime);

    const timeDifference = currentTime - activeTime;
    const minutes = Math.floor(timeDifference / (1000 * 60));

    if (minutes == 0) {
      return "Just now";
    } else {
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (minutes < 60) {
        return minutes + "m ago";
      } else if (hours < 24) {
        return hours + "h ago";
      } else if (days < 7) {
        return days + "d ago";
      } else {
        const formattedDate = activeTime.toLocaleDateString(undefined, {
          year: "numeric",
          month: "short",
          day: "numeric",
        });
        return formattedDate;
      }
    }
  } else {
    return "-";
  }
};

export const getRouteLink = (sentence: string) => {
  try {
    if (sentence && sentence?.length > 0) {
      const cleanedText = sentence
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, " ")
        .toLowerCase();

      const dashSeparatedText = cleanedText.split(" ").join("-");

      return dashSeparatedText;
    } else {
      return sentence ?? "-";
    }
  } catch (err: any) {
    console.log(err);
    return sentence ?? "-";
  }
};

export const getIpAndCountry = () => {
  return new Promise((res: any, rej: any) => {
    axios.get("https://get.geojs.io/v1/ip/geo.js").then((response: any) => {
      res({
        country: response.data.match(/"country":"([^"]+)"/)[1],
        ip: response.data.match(/"ip":"([^"]+)"/)[1],
        city: response.data.match(/"city":"([^"]+)"/)[1],
      });
    });
  });
};
