module.exports = {

  /**
   * A function to assert the fire of an event.
   *
   * @param contract
   * @param eventName
   * @param expectedValues
   */
  assertEvent: (contract, eventName, expectedValues) => {
    const event = contract[eventName]();
    event.watch((error, r) => {
      event.stopWatching();
      if(expectedValues)
        Object.keys(expectedValues).forEach(key => assert.equal(expectedValues[key], r.args[key].valueOf()));
      assert.equal(r.event, eventName);
    });
  }

};
