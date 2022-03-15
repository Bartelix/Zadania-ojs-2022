const Mailer = require("./mailer");
const smsService = require("./sms-service");
const PushNotification = require("./push-notification");

class Context {
  setStrategy(strategy) {
    this.strategy = strategy;
  }

  send(message) {
    this.strategy.sendMessage(message);
  }
}

const contextMailer = new Context();
contextMailer.setStrategy(new Mailer());
contextMailer.send("Hello world!");

const contextSMSService = new Context();
contextSMSService.setStrategy(smsService);
contextSMSService.send("Hello world!");

const contextPushNotification = new Context();
contextPushNotification.setStrategy(new PushNotification());
contextPushNotification.send("Hello world!");
