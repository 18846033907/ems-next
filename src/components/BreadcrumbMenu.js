import React from 'react';
import { useRouter } from 'next/router';
import { Breadcrumb } from 'antd';
import breadcrumbs from '@constants/breadcrumbs';

const BreadcrumbMenu = () => {
  const location = useRouter();
  const breadcrumbArr = breadcrumbs(location.pathname);
  return (
    <Breadcrumb>
      {breadcrumbArr.map((item) => (item ? (
        <Breadcrumb.Item key={item}>{item}</Breadcrumb.Item>
      ) : null))}
    </Breadcrumb>
  );
};

BreadcrumbMenu.propTypes = {};

export default BreadcrumbMenu;
