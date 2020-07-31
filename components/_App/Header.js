import { Menu, Container, Image, Icon } from "semantic-ui-react";
import Link from "next/link";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  console.dir(router);

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <Menu fluid={true} id="menu" inverted={true}>
      <Container text>
        <Link href="/">
          <Menu.Item header active={isActive("/")}>
            <Image
              size="mini"
              src="/static/logo.svg"
              style={{ marginRight: "1em" }}
            />
            ReactReserve
          </Menu.Item>
        </Link>

        <Link href="/create">
          <Menu.Item header active={isActive("/create")}>
            <Icon name="add square" size="large" />
            Create
          </Menu.Item>
        </Link>

        <Link href="/account">
          <Menu.Item header active={isActive("/account")}>
            <Icon name="user" size="large" />
            account
          </Menu.Item>
        </Link>

        <Menu.Item>
          <Icon name="sign out" size="large" /> Sign out
        </Menu.Item>

        <Menu.Item>
          <Icon name="sign in" size="large" /> Sign in
        </Menu.Item>

        <Menu.Item>
          <Icon name="signup" size="large" /> Sign up
        </Menu.Item>
      </Container>
    </Menu>
  );
}

export default Header;
