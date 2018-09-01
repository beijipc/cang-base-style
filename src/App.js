import React, { Component } from 'react';
// import logo from './logo.svg';
import { Button, Menu, Icon, Card } from 'antd';
import './styles/index.less'

const {Meta} = Card

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="p-t-l">
          <h1 className="text-center">华夏收藏网样式项目</h1>
        </header>
        <Menu
          selectedKeys={['/']}
          mode='horizontal'
        >
          <Menu.Item key='/'>
            <Icon type='mail' /> HOME
          </Menu.Item>
          <Menu.Item key='/test'>
            <Icon type='appstore' /> test
          </Menu.Item>
          <Menu.Item key='/news'>
            <Icon type='smile-o' /> NEWS
          </Menu.Item>
        </Menu>
        <ul className='m-v-xl'>
          <li>样式中包含了antd3.8.4的基本样式，结合一些其它样式组合而成</li>
          <li>其它样式包括：background, grid, layout, space, text等，详见src/styles/*.less</li>
          <li>在项目中请引入build/static/css/main.xxxx.css样式文件，<span className='text-primary'>文件名中的hash可能随版本变化而变化</span>请以实际生成的为准 </li>
          <li>如果需要使用主题变量，请引入src/styles/vars.less，此文件包含antd中的变量和项目变量</li>
          <li>其它less文件也可以单独引入您的项目中</li>
        </ul>
        <ol>
          <li>
            <h4>Button</h4>
            <div>
              <Button type="primary">Button</Button>
              <Button className='ant-btn-xl ant-btn-success'>Button</Button>
              <Button className='ant-btn-xl ant-btn-info' ghost>Button</Button>
              <Button size='sm'>Button</Button>
            </div>
          </li>
          <li>
            <h4>Card</h4>
            <div>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
            </div>
          </li>
        </ol>
      </div>
    );
  }
}

export default App;
