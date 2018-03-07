const Adder = artifacts.require('./Adder.sol');
const { assertEvent } = require('./utilities');

contract('Adder', async () => {

  it('0 is 0', async () => {
    const adderContract = await Adder.deployed();
    const result = await adderContract.getA.call();
    assert.equal(result.valueOf(), 0);
  });

  it('2 is added', async () => {
    const adderContract = await Adder.deployed();
    await adderContract.add(2);
    const result = await adderContract.getA.call();
    assert.equal(result.valueOf(), 2);
  });

  it('ANumberIsAdded event is fired', async () => {
    const adderContract = await Adder.deployed();
    assertEvent(adderContract, 'ANumberIsAdded', { value: 10 });
    await adderContract.add(10);
  });

});
