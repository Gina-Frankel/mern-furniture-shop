import { Menu, Container, Image } from "semantic-ui-react";
import Link from "next/link";

function Header() {
  return (
    <Menu fluid={true} id="menu" inverted={true}>
      <Container text>
        <Link href="/">
          <Menu.Item header>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRight: "1em" }}
            />
            ReactReserve
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
}

export default Header;
