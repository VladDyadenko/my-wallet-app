import styled from "styled-components";
import { VscGithubInverted } from "react-icons/vsc";

export const FooterContainer = styled.div`
  width: 100%;
  margin-top: 70px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 5px;
  background-color: #fff;
  border-radius: 8px;
`;
export const FooterDescr = styled.h4`
  font-family: Inter, system-ui;
  font-size: 15px;
  font-weight: 500;
  margin-right: 20px;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const IconGit = styled(VscGithubInverted)`
  width: 24px;
  height: 24px;
  color: #2a2a2a;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;
`;

export const LinkGit = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  width: 70px;
  height: 44px;
  border-radius: 5px;
  border: 1px solid #2a2a2a;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 250ms;

  &:hover {
    border: 1px solid #2e8b57;
    ${IconGit} {
      color: #1c704b;
      transform: scale(1.1);
    }
  }
`;
