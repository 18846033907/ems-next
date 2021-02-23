import React from 'react';
import BreadcrumbMenu from '@components/BreadcrumbMenu';
import { ContentWrapper, MainContent } from './contentContainerStyles';

const ContentContainer = () => (
  <ContentWrapper>
    <BreadcrumbMenu />
    <MainContent>ffff</MainContent>
  </ContentWrapper>
);

ContentContainer.propTypes = {};

export default ContentContainer;
