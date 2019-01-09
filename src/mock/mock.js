/**
 * Editor by duya
 * Date by 2019/1/8
 */
// 配置 Mock 路径
const Mock = require('mockjs');
const Random = Mock.Random

// 截取 ? 之后的内容
const subParam = (param) => {
    const pattern = /(\w+)=(\w+)/ig;
    let paramObj = {}
    param ? param.url.replace(pattern, (a, b, c) => {
        paramObj[b] = c;
    }) : {...param};
    return paramObj
};

// 模拟登录
const getLoginUser = (params) => {
    // 模拟返回值
    let result = {

    };
    // 判断当前用户是否等于数据库中的数据
    const db = [
        {
            userId: 1,
            username: 'Duya',
            account: 'admin',
            password: '123456',
            userType: 0
        }, {
            userId: 2,
            username: '毒牙君',
            account: '20142344098',
            password: '123456',
            userType: 1
        }
    ];
    // 从db中查询账户信息
    db.forEach(item => {
        item.account === params.username ? item.password === params.password ? result = {
            code: '200',
            success: true,
            msg: '请求成功',
            result: {
                userId: item.userId,
                username: item.username,
                userType: item.userType
            }
        } : result = {
            code: '500',
            success: false,
            msg: '密码错误',
            result: null
        } : result = {
            code: '500',
            success: false,
            msg: '账号有误',
            result: null
        };
    });
    return result;
};

// 菜单list
const MenuList = () => {
    return {
        code: '200',
        success: true,
        msg: '请求成功',
        result: [
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
                menuUrl: 'home',
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
                    hasChild: false,
                    parentId: '10001'
                }]
            }, {
                id: '100003',
                parentsId: ['100003'],
                menuUrl: '',
                title: '表格',
                icon: 'md-grid',
                hasChild: true,
                child: [{
                    id: '100004',
                    menuUrl: 'commonTable',
                    title: '基础表格',
                    icon: 'ios-grid-outline',
                    hasChild: false,
                    parentId: '100003'
                }]
            }, {
                id: '1',
                parentsId: ['1'],
                menuUrl: '',
                title: '编辑器',
                icon: 'md-grid',
                hasChild: true,
                child: [{
                    id: '2',
                    menuUrl: 'commonTable',
                    title: 'Markdom',
                    icon: 'ios-grid-outline',
                    hasChild: false,
                    parentId: '1'
                }, {
                    id: '3',
                    menuUrl: 'commonTable',
                    title: '普通编辑器',
                    icon: 'ios-grid-outline',
                    hasChild: false,
                    parentId: '1'
                }]
            }, {
                id: '10',
                parentsId: ['11'],
                menuUrl: '',
                title: '图片化妆',
                icon: 'md-images',
                hasChild: true,
                child: [{
                    id: '12',
                    menuUrl: 'commonTable',
                    title: '图片裁剪',
                    icon: 'ios-images-outline',
                    hasChild: false,
                    parentId: '11'
                }]
            }, {
                id: '100',
                parentsId: ['101'],
                menuUrl: '',
                title: '微信',
                icon: 'ios-chatbubbles',
                hasChild: true,
                child: [{
                    id: '102',
                    menuUrl: 'commonTable',
                    title: '微信',
                    icon: 'ios-chatbubbles',
                    hasChild: false,
                    parentId: '101'
                }]
            },  {
                id: '1000',
                parentsId: ['1001'],
                menuUrl: '',
                title: '控制台',
                icon: 'ios-easel',
                hasChild: true,
                child: [{
                    id: '1002',
                    menuUrl: 'commonTable',
                    title: 'dashbroad',
                    icon: 'ios-speedometer-outline',
                    hasChild: false,
                    parentId: '1001'
                }]
            }
        ]
    }
};

// 模拟普通表格数据
const getUserList = (param) => {
    let params = subParam(param);
    let data = {};
    let dataList = [];
    let page = {};
    for(let index = 0; index < params.pageSize; index ++) {
        dataList.push(Mock.mock({
            name: Random.cname(),
            // age: Random.number()
            'className|1-10': 10,
            'age|1-122': 122,
            date: Random.date()
        }))
    }
    page = Mock.mock({
        'total|1-10000': 10,
        totaPage: 1,
        currentPage: params.pageNum,
        pageSize: params.pageSize
    });
    data = {
        ...page,
        dataList: dataList
    };
    return {
        code: "200",
        success: true,
        msg: '请求成功',
        result: data
    }
};


// 登录接口
Mock.mock(RegExp('/sso/login' + '*'), 'post', (options) => {
    return getLoginUser(options)
});
// 菜单接口
Mock.mock('/home/getMenuList', 'get', MenuList);
// 用户列表接口
Mock.mock(RegExp('/user/getUserList' + '*'), 'get', (options) => {
    return getUserList(options)
});
