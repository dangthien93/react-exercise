import "./body.module.css";

import { SendOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Layout, notification, Row } from "antd";
import React, { Component, PropsWithChildren, ReactNode } from "react";

import logo from "../../logo.svg";
import { Anime, animeService } from "../../services/anime-service";
import { AnimeCard } from ".";

interface ContainerProps {
  showLogo: boolean;
  btnText?: string;
}

interface ContainerStates {
  anime: Anime[];
}


const { Content } = Layout;
const sendMessage = () =>
  notification.info({
    message: "Hello, world!",
    description: "This is a \\\\\\\\\\\\\\\\\\\\\\\\\\\\greeting message sent from the moon",
  });

  



/**
 * Class of Body Container, including all children components in the body
 * Using PropsWithChildren to include the prop "children" inside the props
 */
export default class BodyContainer extends Component<PropsWithChildren<ContainerProps>, ContainerStates> {
  

  constructor(props: any) {
    super(props);
    this.state = { anime: []};
  }

  componentDidMount() {
      const years = [2020];
      animeService
        .get(years)
        .then(response => {
          this.setState({anime: response});
        })
        .catch(err => console.log(err));
    }
  

  render(): ReactNode {
    const { children, btnText, showLogo } = this.props;
    
    
    console.log(this.state);

    return (
      <Content className="appContent">
        {showLogo && <img src={logo} className="appLogo" alt="logo" />}
        <Divider>Main Content</Divider>
        <Button onClick={sendMessage} icon={<SendOutlined />}>
          {btnText ?? "Send me a message"}
        </Button>
        <Row>
          {this.state.anime.map((item, key) => (
            <Col span={4} key={key}>
              <AnimeCard data={item} />
            </Col>
          ))}
        </Row>
        {children}
      </Content>
    );
  }
}
