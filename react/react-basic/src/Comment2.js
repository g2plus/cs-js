import {useState} from 'react'
import './App.scss'
import avatar from './images/bozai.png'
import orderBy from 'lodash/orderBy'
import classNames from 'classnames'

/**
 * 评论列表的渲染和操作
 *
 * 1. 根据状态渲染评论列表
 * 2. 删除评论
 */
//TODO 使用prop进行拆分
//1. 使用请求接口的方式获取评论列表并渲染
//2. 使用自定义Hook函数封装数据请求的逻辑
//3. 把评论中的每一项抽象成一个独立的组件实现渲染
// 评论列表数据
const defaultList = [
    {
        // 评论id
        rpid: 3,
        // 用户信息
        user: {
            uid: '13258165',
            avatar: 'http://114.132.210.77:9000/ruoyi/golang.jpg',
            uname: 'golang',
        },
        // 评论内容
        content: '高并发用我准没错。',
        // 评论时间
        ctime: '2023-12-24 08:15:00',
        like: 88,
    },
    {
        rpid: 2,
        user: {
            uid: '36080105',
            avatar: 'http://114.132.210.77:9000/ruoyi/tomcat.jpg',
            uname: 'tomcat',
        },
        content: '简单易学,容易上手。',
        ctime: '2023-12-24 14:15:00',
        like: 188,
    },
    {
        rpid: 1,
        user: {
            uid: '30009257',
            avatar,
            uname: 'Arhi',
        },
        content: '啥也不是！',
        ctime: '2023-12-24 18:10:00',
        like: 66,
    },
]

// 当前登录用户信息
const user = {
    // 用户id
    uid: '30009257',
    // 用户头像
    avatar,
    // 用户昵称
    uname: 'Arhi',
}


/**
 * 导航 Tab 的渲染和操作
 *
 * 1. 渲染导航 Tab 和高亮
 * 2. 评论列表排序
 *  最热 => 喜欢数量降序
 *  最新 => 创建时间降序
 */

// 导航 Tab 数组
const tabs = [
    {type: 'hot', text: '最热'},
    {type: 'time', text: '最新'},
]

const Comment2 = () => {

    const [list, setList] = useState(defaultList);

    const [activeTab, setActiveTab] = useState('hot');


    // tab 高亮切换
    const onToggle = type => {
        setActiveTab(type)
        let newList
        if (type === 'time') {
            // 按照时间降序排序
            // orderBy(对谁进行排序, 按照谁来排, 顺序)
            newList = orderBy(list, 'ctime', 'desc')
        } else {
            // 按照喜欢数量降序排序
            newList = orderBy(list, 'like', 'desc')
        }
        setList(newList)
    }

    // 删除评论
    const onDelete = rpid => {
        // 如果要删除数组中的元素，需要调用 filter 方法，并且一定要调用 setList 才能更新状态
        setList(list.filter(item => item.rpid !== rpid))
    }


    return (
        <div className="app">
            {/* 导航 Tab */}
            <div className="reply-navigation">
                <ul className="nav-bar">
                    <li className="nav-title">
                        <span className="nav-title-text">评论</span>
                        {/* 评论数量 */}
                        <span className="total-reply">{list.length}</span>
                    </li>
                    <li className="nav-sort">
                        {/* 高亮类名： active */}
                        {tabs.map(item => {
                            return (
                                <div
                                    key={item.type}
                                    // className={
                                    //     item.type === activeTab ? 'nav-item active' : 'nav-item'
                                    // }
                                    className={classNames('nav-item', {active: activeTab===item.type})}
                                    onClick={() => onToggle(item.type)}
                                >{item.text}
                                </div>
                            )
                        })}
                    </li>
                </ul>
            </div>

            <div className="reply-wrap">
                {/* 发表评论 */}
                <div className="box-normal">
                    {/* 当前用户头像 */}
                    <div className="reply-box-avatar">
                        <div className="bili-avatar">
                            <img className="bili-avatar-img" src={avatar} alt="用户头像"/>
                        </div>
                    </div>
                    <div className="reply-box-wrap">
                        {/* 评论框 */}
                        <textarea
                            className="reply-box-textarea"
                            placeholder="发一条友善的评论"
                        />
                        {/* 发布按钮 */}
                        <div className="reply-box-send">
                            <div className="send-text">发布</div>
                        </div>
                    </div>
                </div>


                {/* 评论列表 */}
                <div className="reply-list">
                    {/* 评论项 */}
                    {list.map(item => {
                        return (
                            <div key={item.rpid} className="reply-item">
                                {/* 头像 */}
                                <div className="root-reply-avatar">
                                    <div className="bili-avatar">
                                        <img
                                            className="bili-avatar-img"
                                            src={item.user.avatar}
                                            alt=""
                                        />
                                    </div>
                                </div>
                                <div className="content-wrap">
                                    {/* 用户名 */}
                                    <div className="user-info">
                                        <div className="user-name">{item.user.uname}</div>
                                    </div>
                                    {/* 评论内容 */}
                                    <div className="root-reply">
                                        <span className="reply-content">{item.content}</span>
                                        <div className="reply-info">
                                            {/* 评论时间 */}
                                            <span className="reply-time">{item.ctime}</span>
                                            {/* 评论数量 */}
                                            <span className="reply-time">点赞数:{item.like}</span>
                                            {user.uid === item.user.uid && (
                                                <span
                                                    className="delete-btn"
                                                    onClick={() => onDelete(item.rpid)}
                                                >删除</span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Comment2;
