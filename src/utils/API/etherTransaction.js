import { ethers } from "ethers";
import { Notify } from "notiflix";

export const sendEther = async (amount, receiverAddress) => {
  try {
    const provider = new ethers.BrowserProvider(window.ethereum);

    const signer = new ethers.Wallet(
      import.meta.env.VITE_SIGNER_PRIVATE_KEY,
      provider
    );
    const tx = await signer.sendTransaction({
      to: receiverAddress,
      value: ethers.parseEther(amount),
    });

    const receipt = await tx.wait();
    Notify.success(`Mined in block ${receipt.blockNumber}`);
  } catch (err) {
    console.error(err);
  }
};
