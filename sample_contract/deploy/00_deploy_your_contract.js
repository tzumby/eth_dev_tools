module.exports = async ({ethers, getNamedAccounts, deployments, getChainId}) => {
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_MINUTE_IN_SECS = 60;
  const unlockTime = currentTimestampInSeconds + ONE_MINUTE_IN_SECS

  const lockedAmount = ethers.utils.parseEther("1");

  const {deploy, execute} = deployments;
  const {deployer} = await getNamedAccounts();

  console.log("deployer address: ", deployer)

  await deploy('Lock', {
      from: deployer,
      args: [unlockTime],
      value: lockedAmount,
      log: true
    });

};
module.exports.tags = ['Lock'];
