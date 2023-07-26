import { ethers } from "ethers";

export const isAddressValid = (address) => {
  const addressRegex = /^0x[0-9a-fA-F]{40}$/;
  const trimmedAddress = address.trim();
  const res = addressRegex.test(trimmedAddress);
  return res;
};

export const isChecksumValid = (address) => {
  const checksumAddress = ethers.getAddress(address);
  const res = checksumAddress === address;
  return res;
};
