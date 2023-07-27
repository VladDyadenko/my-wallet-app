import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  IconInfo,
  IconWallet,
  ImegeMemaMask,
  InfoMetaMask,
  LinkMetaMask,
  LinkToWallet,
  MetaMaskDescr,
  OverlayModal,
  WrapperModal,
} from "./ModalWallet.styled";
import metaMaskImg from "../../assets/images/metamask.png";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

function ModalWallet({ isOpenModal, setIsOpenModal }) {
  useEffect(() => {
    setIsOpenModal(isOpenModal);
  }, [isOpenModal, setIsOpenModal]);

  if (!isOpenModal) {
    return null;
  }
  return (
    <>
      {createPortal(
        <OverlayModal>
          <WrapperModal>
            <ImegeMemaMask src={metaMaskImg} alt="fotoMetaMask" />
            <MetaMaskDescr>
              To continue working with the wallet, you need to install the
              extension MetaMask
            </MetaMaskDescr>
            <LinkMetaMask href="https://metamask.io/" target="_blank">
              <IconInfo />
              <InfoMetaMask>What do I need MetaMask and install</InfoMetaMask>
            </LinkMetaMask>
            <LinkToWallet
              onClick={() => setIsOpenModal(false)}
              href="http://localhost:5173/"
            >
              <IconWallet />I installed the extension MetaMask
            </LinkToWallet>
          </WrapperModal>
        </OverlayModal>,
        modalRoot
      )}
    </>
  );
}

export default ModalWallet;

ModalWallet.propTypes = {
  isOpenModal: PropTypes.bool,
  setIsOpenModal: PropTypes.func,
};
