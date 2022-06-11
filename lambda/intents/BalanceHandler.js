"use strict";

const Alexa = require("ask-sdk-core");

module.exports = {
  BalanceIntentHandler: {
    canHandle(handlerInput) {
      return (
        Alexa.getRequestType(handlerInput.requestEnvelope) ===
          "IntentRequest" &&
        Alexa.getIntentName(handlerInput.requestEnvelope) === "BalanceIntent"
      );
    },
    handle(handlerInput) {
      console.log(handlerInput.request)
      const accountType = handlerInput.request.intent.slots.account_type.value;
      let speakOutput = null;
      if (accountType === "savings") {
        speakOutput = "Your savings account balance is $300";
      } else {
        speakOutput = "Your current account balance is $3000";
      }

      return (
        handlerInput.responseBuilder
          .speak(speakOutput)
          // .reprompt('add a reprompt if you want to keep the session open for the user to respond')
          .getResponse()
      );
    },
  },
};
