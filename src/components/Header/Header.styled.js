import styled from "styled-components";

export const HeaderLogo = styled.p`
  font-family: Inter, system-ui;
  font-size: 20px;
  font-weight: 500;
`;
export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const LogoContainer = styled.div`
  padding: 5px;
  background-color: #ffffff;
  border-radius: 8px;
  width: 80%;
  text-align: center;

  @media (min-width: 768px) {
    width: 20%;
  }
`;

export const WalletInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  background-color: #ffffff;
  justify-content: space-between;
  border: 1px solid #2a2a2a;
  border-radius: 8px;
  margin: 15px 0;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
export const ConnectWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  padding: 5px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 70%;
  }
`;
export const WalletDescr = styled.span`
  font-family: Inter, system-ui;
  font-size: 18px;
  font-weight: 500;
  display: inline-block;
  color: #2a2a2a;
`;
