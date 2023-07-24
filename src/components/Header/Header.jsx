import { HeroContainer, WalletDescr, WalletInfoWrapper } from "./Header.styled";

function Header() {
  return (
    <section>
      <HeroContainer>
        <p>LOGO</p>
        <WalletInfoWrapper>
          <WalletDescr>Balans</WalletDescr>
          <WalletDescr>Address wallet</WalletDescr>
        </WalletInfoWrapper>
      </HeroContainer>
    </section>
  );
}

export default Header;
