import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Layout, Row, Col } from 'antd';

// Pages
import Home from 'pages/Home';
import Page2 from 'pages/Page2';
import Page3 from 'pages/Page3';

// Components
import Navbar from 'components/Navbar';

// Others
import 'config/style/styles.less';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Suspense fallback="loading">
      <Router>
        <Layout className="App">
          <Navbar />
          <Row>
            <Col
              xs={{ offset: 1, span: 22 }}
              sm={{ offset: 1, span: 22 }}
              md={{ offset: 1, span: 22 }}
              lg={{ offset: 2, span: 20 }}
              xl={{ offset: 4, span: 16 }}
              xxl={{ offset: 5, span: 14 }}
            >
              <Content>
                <Switch>
                  <Route exact path="/home" component={Home} />
                  <Route exact path="/page2" component={Page2} />
                  <Route exact path="/page3" component={Page3} />
                  <Route component={() => <Redirect to="/page1" />} />
                </Switch>
              </Content>
            </Col>
          </Row>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
