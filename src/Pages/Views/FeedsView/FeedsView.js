import React from 'react'
import PostCard from '../../../Components/PostCard/PostCard'
import './FeedsView.css'

var FeedsView = ({})=> {
    return (
        <div className="feeds-view">
            <PostCard />
            <PostCard />
            <PostCard />
            <PostCard />
        </div>
    )
}

export default FeedsView
