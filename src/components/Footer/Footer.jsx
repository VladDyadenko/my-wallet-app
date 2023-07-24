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
        <FooterDescr>Designed in summer 2023</FooterDescr>
        <LinkGit>
          <IconGit />
        </LinkGit>
      </FooterContainer>
    </section>
  );
}

export default Footer;
