import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import WalletForm from "../../components/WalletForm/WalletForm";
import ModalWallet from "../../components/ModalWallet/ModalWallet";

function HomePage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  useEffect(() => {
    if (typeof window.ethereum === "undefined") {
      setIsOpenModal(true);
    } else {
      setIsOpenModal(false);
    }
  }, []);

  return (
    <>
      {isOpenModal && (
        <ModalWallet
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
        />
      )}
      <Header />
      <WalletForm />
      <Footer />
    </>
  );
}

export default HomePage;
