import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
export const WalletTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Form = styled.form`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #2e8b57;
  border-radius: 10px;
  background-color: #ffffff;

  @media (min-width: 768px) {
    width: 600px;
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
`;
