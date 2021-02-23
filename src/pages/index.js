import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SideContainer from '@containers/sideContainer';
import HeadContainer from '@containers/headContainer';
import BreadcrumbMenu from '@components/BreadcrumbMenu';
import { ContentWrapper, MainContent } from '@styles/contentContainerStyles';

import {
  Layout, Steps, Popover, Card, Col, Row, Form, Tag,
} from 'antd';
import * as getProgressActions from '@actions/explore-progress-actions';
import { getCookie } from '@utils/utils';
import { HeaderWrapper } from '@styles/utilsStyles';

const { Content } = Layout;

const Home = () => {
  const dispatch = useDispatch();
  const exploreProgress = useSelector((state) => state.exploreProgress);
  const machineDisplay = useSelector((state) => state.machineDisplay);
  const [allProgress, setAllProgress] = useState([]);
  const [cardDataSource, setCardDataSource] = useState([]);

  useEffect(() => {
    const account = getCookie('account');
    getProgressActions.getExploreProgress(account, dispatch);
    getProgressActions.getMachineDiplay(dispatch);
  }, [getProgressActions]);

  useEffect(() => {
    const { status } = exploreProgress;
    if (status === 'SUCCESS') {
      if (exploreProgress.payload.code === 200) {
        const { data } = exploreProgress.payload;
        setAllProgress(data);
      }
    }
  }, [exploreProgress]);

  useEffect(() => {
    const { status } = machineDisplay;
    if (status === 'SUCCESS') {
      if (machineDisplay.payload.code === 200) {
        const { data } = machineDisplay.payload;
        setCardDataSource(data);
      }
    }
  }, [machineDisplay]);

  return (
    <>
      <Layout>
        <HeadContainer />
        <Layout>
          <SideContainer />
          <Content>
            <ContentWrapper>
              <BreadcrumbMenu />
              <MainContent>
                <HeaderWrapper
                  style={{
                    height: 47,
                    backgroundColor: '#ffffff',
                    display: 'grid',
                    alignItems: 'center',
                  }}
                >
                  {allProgress.map((item, index) => (
                    <div className="all-progress" key={index.toString()}>
                      <Steps
                        style={{ paddingLeft: 25 }}
                        current={20}
                        size="small"
                        type="navigation"
                      >
                        {item.expStatistic.map((subItem) => (
                          <Steps.Step
                            key={index.toString()}
                            title={(
                              <Popover
                                content={(
                                  <div>
                                    <div>{`实验次数: ${subItem.expTimes}`}</div>
                                    <div>
                                      {`最后一次报告状态: ${
                                        subItem.expReportStatus === 'Y'
                                          ? '已提交'
                                          : '未提交'
                                      }`}
                                    </div>
                                    <div>
                                      {`最后一次实验状态: ${
                                        subItem.expStatus === 'Y'
                                          ? '已完成'
                                          : '未完成'
                                      }`}
                                    </div>
                                  </div>
                                )}
                                title={subItem.expName}
                                trigger="hover"
                              >
                                <span>{subItem.expName}</span>
                              </Popover>
                            )}
                            // description="描述一"
                            status={
                              subItem.expStatus === 'Y' ? 'finish' : 'wait'
                            }
                          />
                        ))}
                      </Steps>
                    </div>
                  ))}
                </HeaderWrapper>
                <div
                  style={{
                    marginTop: 20,
                  }}
                >
                  <Row gutter={10}>
                    {cardDataSource.map((item) => (
                      <Col
                        key={item.machineNo}
                        style={{ marginTop: 10 }}
                        lg={6}
                      >
                        <Card
                          title={item.machineNo}
                          bordered={false}
                          bodyStyle={{ padding: 8 }}
                          headStyle={{
                            height: 40,
                            paddingLeft: 8,
                            backgroundColor: item.self ? '#00adef' : null,
                            color: item.self ? '#ffffff' : null,
                          }}
                        >
                          <Form.Item style={{ marginBottom: 0 }} label="状态">
                            <Tag
                              color={
                                item.machineStatus === '使用中'
                                  ? '#CCCC00'
                                  : '#87d068'
                              }
                            >
                              {item.machineStatus}
                            </Tag>
                          </Form.Item>
                          <Form.Item style={{ marginBottom: 0 }} label="实验">
                            {item.currentExp}
                          </Form.Item>
                          <Form.Item
                            style={{ marginBottom: 0 }}
                            label="指导老师"
                          >
                            {item.teacherName}
                          </Form.Item>
                          <Form.Item
                            style={{ marginBottom: 0 }}
                            label="实验人员"
                          >
                            {item.expUser}
                          </Form.Item>
                          <Form.Item
                            style={{ marginBottom: 0 }}
                            label="开始时间"
                          >
                            {item.startTime}
                          </Form.Item>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </div>
              </MainContent>
            </ContentWrapper>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

Home.propTypes = {};

export const getServerSideProps = (ctx) => {
  console.log(11827, ctx);
  return {
    props: {},
  };
  // return {props: {}}
};

export default Home;
