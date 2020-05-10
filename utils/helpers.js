import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

const createNotification = {
  title: "Come Back",
  body: "You have been in the app for a while",
  ios: {
    sound: true,
  },
  android: {
    sound: true,
    priority: "high",
    sticky: false,
    vibrate: true,
  },
};

export function clearLocalNotification(){
   return  Notifications.cancelAllScheduledNotificationsAsync();
}

export async function setLocalNotification() {
  let schedule = new Date();
  schedule.setSeconds(schedule.getTime() + 1000);

  const schedulingOptions = {
    time: schedule,
    repeat: "hour",
  };

  let notification = await Notifications.scheduleLocalNotificationAsync(
    createNotification,
    schedulingOptions
  );

  console.log(notification);
}

export async function obtainNotificationPermission() {
  Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
    if (status === "granted") {
      Notifications.cancelAllScheduledNotificationsAsync();
      setLocalNotification();
    }
  });
}
