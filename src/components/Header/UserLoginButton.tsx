import { UserOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";
import { PureComponent, ReactNode } from "react";

interface UserLoginButtonState {
  modalVisible: boolean;
  textValue: string;
}

interface UserLoginButtonStateProps {
  onLogin: (username: string) => void;
}
export default class UserLoginButton extends PureComponent<UserLoginButtonStateProps, UserLoginButtonState> {
  state: UserLoginButtonState = {
    modalVisible: false,
    textValue: ""
  };
  private openModal = () => this.setState({ modalVisible: true });
  private closeModal = () => this.setState({ modalVisible: false });
  private onSubmit = () => {
    this.closeModal();
    this.props.onLogin(this.state.textValue);
  };
  private onChangeValue = (textValue: string) => this.setState({ textValue });
  render(): ReactNode {
    const { modalVisible } = this.state;
    return (
      <>
        <Button type={"primary"} icon={<UserOutlined />} onClick={this.openModal}>
          Login
        </Button>
        <Modal title="Login to your account" visible={modalVisible} onCancel={this.closeModal} onOk={this.onSubmit}>
          <Input
            placeholder="Username"
            prefix={<UserOutlined />}
            onPressEnter={this.onSubmit}
            onChange={event => this.onChangeValue(event.target.value)}
          />
        </Modal>
      </>
    );
  }
}
