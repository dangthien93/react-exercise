import { Button } from "antd";
import { PureComponent, ReactNode } from "react";

//interface UserLogoutButtonState {
//  textValue: string;
//}

interface UserLogoutButtonProps {
  userName?: string;
  onLogout: () => void;
}

export default class UserLogoutButton extends PureComponent<UserLogoutButtonProps> {

  private logOut = () => {
    this.props.onLogout();
  }

  render(): ReactNode {
    const { userName, onLogout } = this.props;
    return (
    <Button type={"primary"} onClick={this.logOut}>
      Logout[{this.props.userName}]
    </Button>
    );
  }
}
