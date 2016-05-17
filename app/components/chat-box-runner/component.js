import Ember from 'ember';

let scenarios = [{
  title: 'Bill Too High',
  steps: [
    ['I understand your bill was higher than expected.I can see that you haven\'t submitted a meter read for 3 months. An estimated bill could be higher than you expected to pay. Would you like to submit a meter read now?'],
    [
      'Ok. Great. Let’s start with your electricity. What is your meter reading?',
      'Ok. There are lots of reasons why bills might be higher than expected. Seasonal variations mean that winter months are often more expensive. If you still haven\'t got the answer you need then click below to talk to a human.'
    ],
    ['Ok. Thanks for that. Now can you give me your gas meter reading?'],
    ['Great. Got that. I\'m just working out your new bill amount.'],
    ['Your new bill will be approximately £81.'],
    ['Is there anything else I can help you with?'],
    [
      'Ok - thanks for chatting.',
      'Ok. Great. How can I help?'
    ]
  ]
}, {
  title: 'Change bank details',
  steps: [
    ['I understand you\'d like to change your bank details. I can help you with that. Can you start by giving me your new sort code?'],
    [
      'Ok. Thanks for that. Now what is your new account number?',
      'Sorry, I didn\'t recognise that. Please try again.'
    ],
    ['Great. Got that. Just to confirm your new sort code is 20-11-34 and your account number is 63742112. Is that correct?'],
    [
      'Perfect. I\'ll make those changes now.',
      'Ok. Sorry. Let\'s try again. What is your new sort code?'
    ],
    ['Ok. I\'ve updated your bank details. Your next payment is on the 17th June, and we\'ll use these new details to take your payment for this and all subsequent payments.'],
    ['Is there anything else I can help you with?'],
    [
      'Ok - thanks for chatting.',
      'Ok. Great. How can I help?'
    ]
  ]
}, {
  title: 'Can\'t Pay',
  steps: [
    ['I understand you\'re unable to pay your bill. I\'m here to help. Do you think you\'ll be able to pay in the next 7 days?'],
    [
      'Ok. Thanks for letting us know. This is something that would be best discussed with a human. Click the button below to see our contact options.',
      'Ok. That shouldn\'t be a problem. I\'ll look forward to seeing your payment in the next 7 days.'
    ]
  ]
}, {
  title: 'Review',
  steps: [
    ['Your feedback is really important to help me improve the service I can offer. On a scale of 1 - 5 (with 5 being the highest) how helpful have you found this service?'],
    ['Thanks. Do you have any comments you\'d like to leave?'],
    ['Thanks for that. Have a great day!']
  ]
}];

export default Ember.Component.extend({
  scenarios,
  step: Ember.computed('scenario', 'stepIndex', function() {
    return this.get('scenario.steps') && this.get('scenario.steps').objectAt(this.get('stepIndex'));
  }),
  next() {
    this.incrementProperty('stepIndex', 1);
    if (!this.get('step')) {
      this.set('scenario', null);
    }
  },
  actions: {
    selectScenario(scenario) {
      this.setProperties({
        scenario,
        stepIndex: 0
      });
    },
    next() {
      this.next();
    },
    previous() {
      this.incrementProperty('stepIndex', -1);
      if (!this.get('step')) {
        this.set('scenario', null);
      }
    },
    postMessage(message) {
      this.attrs.action(message);
      this.next();
    }
  }
});
