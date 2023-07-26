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
  const res = ethers.formatUnits(balance, "ether");
  return res;
};
