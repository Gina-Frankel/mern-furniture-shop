import { Menu, Container, Image, Icon } from "semantic-ui-react";
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

        <Link href="/create">
          <Menu.Item header>
            <Icon name="add square" size="large" />
            Create
          </Menu.Item>
        </Link>
        <Link href="/account">
          <Menu.Item header>
            <Icon name="user" size="large" />
            account
          </Menu.Item>
        </Link>
      </Container>
    </Menu>
  );
}

export default Header;
