import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { initStore, initialCards, addItem } from '../store'
import withRedux from 'next-redux-wrapper'
import './index.css'
import Card from './Card'

export default class Index extends Component {
    static async getInitialProps({ store }) {
        store.dispatch(initialCards())
    }

    render() {
        return (
            <div className="app">
                <header className="App-header">
                    <img src="/static/logo.png"
                        className="static-logo"
                        alt="logo"
                    />
                </header>
                <div className="Grid">
                    {
                        this.props.cards.map((card) => {
                            return <Card key={card.id} />
                        })
                    }
                </div>
            </div>
        )
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         initialCards: bindActionCreators(initialCards, dispatch),
//         addItem: bindActionCreators(addItem, dispatch),
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         cards: state.cards,
//     }
// }

// export default withRedux(initStore, mapStateToProps, mapDispatchToProps)(Index)