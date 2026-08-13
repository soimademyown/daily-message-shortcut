const url =
  "https://raw.githubusercontent.com/soimademyown/daily-message-shortcut/main/messages.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // get todays date
    const today = new Date();

    const dateStr =
      today.getFullYear() +
      "-" +
      String(today.getMonth() + 1).padStart(2, "0") +
      "-" +
      String(today.getDate()).padStart(2, "0");

    // get todays messsage
    const todayMessage = data.messages.find(function (msg) {
      return msg.date === dateStr;
    });

    // return the result
    return todayMessage
      ? todayMessage.text
      : "hmmm i probably messed something up. please lmk ";
  })
  .catch(function (error) {
    return "error fetching messages. pls try again later ";
  });
