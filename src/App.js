import React from 'react';
import { Layout } from 'antd';

// Components
import Navbar from './components/Navbar';

// Others
import './config/style/styles.less';
import './App.css';

const { Content } = Layout;

function App() {
  return (
    <Layout className="App">
      <Navbar />
      <Content style={{ padding: '24 24px' }}>Content</Content>
    </Layout>
  );
}

export default App;
