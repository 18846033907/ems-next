import React from 'react';
import SideContainer from '@containers/sideContainer';
import HeadContainer from '@containers/headContainer';
import BreadcrumbMenu from '@components/BreadcrumbMenu';
import { ContentWrapper, MainContent } from '@styles/contentContainerStyles';

import { Layout } from 'antd';

const { Content } = Layout;

const Teacher = () => (
  <>
    <Layout>
      <HeadContainer />
      <Layout>
        <SideContainer />
        <Content>
          <ContentWrapper>
            <BreadcrumbMenu />
            <MainContent>teacher</MainContent>
          </ContentWrapper>
        </Content>
      </Layout>
    </Layout>
  </>
);

Teacher.propTypes = {};

export default Teacher;
