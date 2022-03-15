const Mailer = require("./mailer");
const smsService = require("./sms-service");
const PushNotification = require("./push-notification");

function send(message) {
  this.sendMessage(message);
}

const sendMail = send.bind(new Mailer());
const sendSMS = send.bind(smsService);
const sendPush = send.bind(new PushNotification());

sendMail("Hello world!");
sendSMS("Hello world!");
sendPush("Hello world!");
