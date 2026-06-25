export async function fetchNotifications() {
  return {
    notifications: [
      {
        id: 1,
        title: "Placement Drive",
        message: "TCS hiring started",
        type: "Placement",
      },
      {
        id: 2,
        title: "Exam Result",
        message: "Results published",
        type: "Result",
      },
      {
        id: 3,
        title: "College Event",
        message: "Hackathon this weekend",
        type: "Event",
      },
      {
        id: 4,
        title: "Welcome",
        message: "Notification system running",
        type: "All",
      },
    ],
  };
}