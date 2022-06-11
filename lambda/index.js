const Alexa = require("ask-sdk-core");
const { BalanceIntentHandler } = require("./intents/BalanceHandler");
const { LaunchRequestHandler } = require("./intents/LaunchHandler");
const { SessionEndedRequestHandler } = require("./intents/SessionEndedHandler");

/**
 * This handler acts as the entry point for your skill,
 * */
exports.handler = Alexa.SkillBuilders.custom()
  .addRequestHandlers(LaunchRequestHandler, BalanceIntentHandler, SessionEndedRequestHandler)
  .lambda();
