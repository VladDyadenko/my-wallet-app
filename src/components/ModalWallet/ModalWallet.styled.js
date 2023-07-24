import styled from "styled-components";
import { BsSkipForward } from "react-icons/bs";

export const OverlayModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 800;
  overflow-y: auto;
  opacity: 1;
`;
export const WrapperModal = styled.div`
  width: 300px;
  padding: 20px;
  background-color: #fff;

  @media (min-width: 768px) {
    width: 500px;
  }

  @media (min-width: 1280px) {
    width: 800px;
  }
`;
export const ImegeMemaMask = styled.img`
  display: block;
  width: 100%;
`;

export const InfoMetaMask = styled.h4`
  font-family: Inter, system-ui;
  font-size: 16px;
  font-weight: 500;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;
export const MetaMaskDescr = styled.p`
  font-family: Inter, system-ui;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 16px;
  }

  @media (min-width: 1280px) {
    font-size: 22px;
  }
`;
export const LinkDescr = styled.a`
  margin-left: 10px;
  color: blue;
  cursor: pointer;

  @media (min-width: 768px) {
    font-size: 18px;
  }
  @media (min-width: 1280px) {
    font-size: 22px;
  }

  &:hover {
    color: green;
  }
`;
export const LinkMetaMask = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2a2a2a;
  cursor: pointer;

  &:hover {
    color: green;
  }
`;
export const IconInfo = styled(BsSkipForward)`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
