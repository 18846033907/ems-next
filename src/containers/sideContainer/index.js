import React, { Fragment, useEffect, useState } from 'react';
import { Menu, Layout } from 'antd';

import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import * as userMenulistActions from '@actions/user-menulist-actions';

const { SubMenu } = Menu;

const { Sider } = Layout;

const renderTreeNode = (treedata) => treedata.map((item) => (
  <Fragment key={item.name}>
    {item.childrens && item.childrens.length > 0 ? (
      <SubMenu title={item.name} key={item.uri}>
        {renderTreeNode(item.childrens)}
      </SubMenu>
    ) : (
      <>
        <Menu.Item uri={item.uri || ''} key={item.uri}>
          {item.name}
        </Menu.Item>
      </>
    )}
  </Fragment>
));

const SideContainer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userMenulist = useSelector((state) => state.userMenulist);
  const [usermenus, setUsermenus] = useState([]);
  const [openSubs, setOpenSubs] = useState([]);
  useEffect(() => {
    userMenulistActions.getUserMenulist(dispatch);
  }, []);

  useEffect(() => {
    const { status } = userMenulist;
    if (status === 'SUCCESS') {
      const { data } = userMenulist.payload;
      setUsermenus(data);
    }
  }, [userMenulist]);

  const handleClick = ({ item }) => {
    router.push(`${item.props.uri}`);
  };

  const handleOpenChange = (openKeys = []) => {
    setOpenSubs(openKeys);
  };

  return (
    <Sider>
      <Menu
        style={{ height: '100%' }}
        mode="inline"
        openKeys={openSubs}
        onClick={handleClick}
        onOpenChange={handleOpenChange}
      >
        {renderTreeNode(usermenus)}
      </Menu>
    </Sider>
  );
};

SideContainer.propTypes = {};

SideContainer.getInitialProps = async () => {};

export default SideContainer;
