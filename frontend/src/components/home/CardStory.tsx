import React from 'react';
import "../../assets/feed.css"

export default function CardStory() {
  return (
    <>
    <div className="feed">
        <div className='storyReel'>
            <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)` }} className='story'>
            <img width={50} height={50} className="story_avatar rounded-full" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />
    <h4>
        <a href="#" className="block text-xl font-bold text-gray-800 dark:text-white" role="link">John Doe</a>
    </h4>
            </div>
        </div>

</div>
    </>
  )
}
