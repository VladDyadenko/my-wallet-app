import { ethers } from "ethers";

export const getAccount = async () => {
  let value = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  return value;
};

export const getBalance = async (account) => {
  let balance = await window.ethereum.request({
    method: "eth_getBalance",
    params: [account[0]],
  });
  console.log("ethers.utils ", ethers.utils);
  console.log("ethers ", ethers);
  const res = ethers.utils.formatUnits(balance, "ether");
  return res;
};
