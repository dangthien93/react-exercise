import "./App.css";

import { Layout, message } from "antd";
import { PureComponent, ReactNode } from "react";

import { BodyContent } from "./components/BodyContent";
import HeaderContainer from "./components/Header";
import SearchInput from "./components/Header/SearchInput";
import UserLoginButton from "./components/Header/UserLoginButton";
import UserLogoutButton from "./components/Header/UserLogoutButton";

const { Footer } = Layout;

interface AppState {
  user?: string;
  isLoggedIn: boolean;
}

export default class App extends PureComponent {
  state: AppState = {
    user: undefined,
    isLoggedIn: false
  };
  private userLogin = (username: string) => {
    this.setState({ user: username });
    this.setState({ isLoggedIn: true });
    message.success(`Login successfully: ${username}`);
  };

  private userLogout = () => {
    this.setState({ user: null });
    this.setState({ isLoggedIn: false });
    message.success(`Logout successfully: ${this.state.user}`);
  };

  render(): ReactNode {
    return ( this.state.isLoggedIn ?
      <Layout>
        <HeaderContainer>
          <SearchInput placeholderText={"search anime"} />   
          <UserLogoutButton userName={this.state.user} onLogout={this.userLogout} />
        </HeaderContainer>
        <BodyContent showLogo />
        <Footer className="appFooter">Footer</Footer>
      </Layout>
      :
      <Layout>
        <HeaderContainer>
          <SearchInput placeholderText={"search anime"} />          
          <UserLoginButton onLogin={this.userLogin} />
        </HeaderContainer>
        <BodyContent showLogo>Children Test</BodyContent>
        <Footer className="appFooter">Footer</Footer>
      </Layout>
    );
  }
}
