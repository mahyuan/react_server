import React from 'react'
import { connect } from 'react-redux'
import Header from '@/components/Header'


// 同构，一套代码在服务端和客户端各执行一次
const Home = (props) => {
    return (
        <div>
            <Header />
            <div>this is {props.name}</div>
            <button type="button" onClick={() => alert('click1')}>click</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    name: state.name
})
// const mapActionToProps = (state) => ({

// })

export default connect(mapStateToProps, null)(Home)
