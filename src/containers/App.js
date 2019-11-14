import React, {Component} from 'react'
import { connect } from 'react-redux'
import './App.css'
import Page from '../components/Page'
import User from '../components/User'
import { setYear } from '../actions/PageActions'

class App extends Component {
    render() {
        const { user, page, setYearAction } = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Мой топ фото</h1>
                </header>
                <Page photos={page.photos} year={page.year} setYear={setYearAction} />
                <User name={user.name} />
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        user: store.user,
        page: store.page,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setYearAction: year => dispatch(setYear(year)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
