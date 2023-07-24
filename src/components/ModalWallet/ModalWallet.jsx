import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import {
  IconInfo,
  ImegeMemaMask,
  InfoMetaMask,
  LinkDescr,
  LinkMetaMask,
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
              <LinkDescr
                onClick={() => setIsOpenModal(false)}
                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=uk"
                target="_blank"
              >
                extension MetaMask
              </LinkDescr>
            </MetaMaskDescr>
            <LinkMetaMask href="https://metamask.io/" target="_blank">
              <IconInfo />
              <InfoMetaMask>What do I need MetaMask</InfoMetaMask>
            </LinkMetaMask>
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
