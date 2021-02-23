const breadcrumbs = (type) => {
  switch (type) {
    case '/adc/ADC002':
      return ['ADC实验', '标注实验'];
    case '/adc/ADC001':
      return ['ADC实验', '自动缺陷分类演示'];
    case '/adc/ADC003':
      return ['ADC实验', '模型训练实验'];
    case '/adc/ADC004':
      return ['ADC实验', '模型测试实验'];
    case '/adc/ADC005':
      return ['ADC实验', '算法二次开发'];
    case '/adc/ADC006':
      return ['ADC实验', '工业自动缺陷分类'];
    case '/pdm/PDM001':
      return ['PDM实验', '数据采集'];
    case '/pdm/PDM002':
      return ['PDM实验', '数据处理与特征萃取'];
    case '/pdm/PDM003':
      return ['PDM实验', '动作分辨'];
    case '/pdm/PDM004':
      return ['PDM实验', '更新模型'];
    case '/basic/class':
      return ['基础数据管理', '班级数据'];
    case '/basic/student':
      return ['基础数据管理', '学生数据'];
    case '/basic/teacher':
      return ['基础数据管理', '教师数据'];
    case '/setting/machine':
      return ['系统配置', '机台管理'];
    case '/setting/exp':
      return ['系统配置', '实验管理'];
    case '/setting/log':
      return ['系统配置', '系统日志'];
    case '/setting/account':
      return ['系统配置', '账号管理'];
    case '/setting/sys':
      return ['系统配置', '系统设置'];
    case '/exp/group':
      return ['实验数据管理', '实验小组数据'];
    case '/exp/history':
      return ['实验数据管理', '历史数据管理'];
    case '/exp/my':
      return ['实验数据管理', '我的实验数据'];
    default:
      return ['首页'];
  }
};

export default breadcrumbs;
