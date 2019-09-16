import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

// Pages
import Page1 from '@pages/Page1';
import Page2 from '@pages/Page2';
import Page3 from '@pages/Page3';

// Components
import Navbar from '@components/Navbar';

// Others
import '@config/style/styles.less';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="App">
        <Navbar />
        <Row>
          <Col
            xs={{ offset: 1, span: 22 }}
            sm={{ offset: 1, span: 22 }}
            md={{ offset: 1, span: 22 }}
            lg={{ offset: 2, span: 24 }}
            xl={{ offset: 4, span: 16 }}
            xxl={{ offset: 5, span: 14 }}
          >
            <Content>
              <Switch>
                <Route exact path="/page1" render={Page1} />
                <Route exact path="/page2" render={Page2} />
                <Route exact path="/page3" render={Page3} />
                <Route component={() => <Redirect to="/page1" />} />
              </Switch>
            </Content>
          </Col>
        </Row>
      </Layout>
    </Router>
  );
}

export default App;
