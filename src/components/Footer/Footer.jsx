import {
  FooterContainer,
  FooterDescr,
  IconGit,
  LinkGit,
} from "./Footer.styled";

function Footer() {
  return (
    <section>
      <FooterContainer>
        <FooterDescr>Designed Vladimir Dyadenko in summer 2023</FooterDescr>
        <LinkGit
          href="https://github.com/VladDyadenko/my-wallet-app"
          target="_blank"
        >
          <IconGit />
        </LinkGit>
      </FooterContainer>
    </section>
  );
}

export default Footer;
