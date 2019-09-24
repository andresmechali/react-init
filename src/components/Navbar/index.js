import React from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';

import logo from 'images/logo.png';

const { Header } = Layout;

const Navbar = () => (
  <Header>
    <Row>
      <Col xs={10} sm={10} md={5} lg={5} xl={5} xxl={4}>
        <img src={logo} alt="" width={80} />
      </Col>
      <Col>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{
            lineHeight: '55px',
            width: '100%',
          }}
        >
          <Menu.Item key="1">
            Page 1
            <NavLink to="/page1" />
          </Menu.Item>
          <Menu.Item key="2">
            Page 2
            <NavLink to="/page2" />
          </Menu.Item>
          <Menu.Item key="3">
            Page 3
            <NavLink to="/page3" />
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </Header>
);

export default Navbar;
