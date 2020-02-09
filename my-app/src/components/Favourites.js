import React, { Component } from 'react'
import FavouriteItem from './FavouriteItem'

export default class Favourites extends Component {
    render() {
        return (
            <div className='favorites'>
                {/* <button>❤</button> */}
                <div>
                    <p>❤</p>
                    <p>Favourites</p>
                </div>
                {
                    this.props.favs.map(f => <FavouriteItem photo={f} key={f.id} />)
                }
            </div>
        )
    }
}
