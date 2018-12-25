/*This is a place that some routers*/
const routers = [
    {
        id: '9999',
        parentsId: ['9999'],
        menuUrl: 'github',
        title: 'github',
        icon: 'logo-github',
        hasChild: false
    }, {
        id: '10000',
        parentsId: ['10000'],
        menuUrl: '/home',
        title: '首页',
        icon: 'ios-cafe-outline',
        hasChild: false
    }, {
        id: '10001',
        parentsId: ['10001'],
        menuUrl: '',
        title: '基础信息',
        icon: 'ios-person-outline',
        hasChild: true,
        child: [{
            id: '10002',
            menuUrl: 'basicInfo',
            title: '个人信息',
            icon: 'ios-person-outline',
            hasChild: true,
            parentId: '10001'
        }]
    }
];
export default routers;
