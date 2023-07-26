import { ethers } from "ethers";

export const sendEther = async (amount, receiverAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const SIGNER_PRIVATE_KEY =
      "7ed847d4a8770a9e7bfe051e430bba64200c70124eef5626853f87266f8e4309";
    const signer = new ethers.Wallet(SIGNER_PRIVATE_KEY, provider);
    const tx = await signer.sendTransaction({
      to: receiverAddress,
      value: ethers.parseEther(amount),
    });
    console.log("Mining transaction...");
    const receipt = await tx.wait();
    console.log(`Mined in block ${receipt.blockNumber}`);
  } catch (err) {
    console.error(err);
  }
};
