import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Layout, Space, Divider, Dropdown, Menu, Modal,
} from 'antd';
import * as loginActions from '@actions/login-actions';
import { useDispatch } from 'react-redux';

import { getCookie } from '@utils/utils';
import Image from 'next/image';
import {
  UserOutlined,
  GlobalOutlined,
  HomeOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { HeadWrapper, HeadStart, HeadEnd } from './headContainerStyles';

const { Header } = Layout;

const HeadContainer = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState();

  useEffect(() => {
    setUserName(getCookie('userName'));
  }, []);

  const confirmLogout = () => {
    Modal.confirm({
      title: '确认退出登录吗？',
      icon: <ExclamationCircleOutlined />,
      okText: '确认',
      cancelText: '取消',
      onOk: () => loginActions.logout(dispatch),
    });
  };

  const handleClick = ({ item }) => {
    if (item.props.value === 'logout') {
      confirmLogout();
    }
  };

  const menu = (
    <Menu onClick={handleClick} style={{ width: 100 }}>
      <Menu.Item>
        <Link href="/personalInfo">账号设置</Link>
      </Menu.Item>
      <Menu.Item value="logout">退出登录</Menu.Item>
    </Menu>
  );

  return (
    <Header
      style={{
        height: '64px',
        backgroundColor: '#00adef',
        zIndex: 1,
        width: '100%',
        boxShadow: '5px 5px 5px rgb(209 202 202)',
      }}
    >
      <HeadWrapper>
        <HeadStart>
          <Image alt="logo" src="/images/hgd.png" height={52} width={251} />
        </HeadStart>
        <HeadEnd>
          <Space split={<Divider type="vertical" />}>
            <Link href="/explore" style={{ color: '#fff' }}>
              <>
                <HomeOutlined />
                &nbsp;
                <span>首页</span>
              </>
            </Link>
            <Dropdown overlay={menu}>
              <span style={{ color: '#fff' }}>
                <UserOutlined />
                &nbsp;
                <span>{userName}</span>
              </span>
            </Dropdown>
            <Link href="/exp/my" style={{ color: '#fff' }}>
              <>
                <GlobalOutlined />
                &nbsp;
                <span>我的实验</span>
              </>
            </Link>
          </Space>
        </HeadEnd>
      </HeadWrapper>
    </Header>
  );
};

HeadContainer.propTypes = {};
export default HeadContainer;
