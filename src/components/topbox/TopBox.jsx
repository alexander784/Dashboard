import React from 'react';
import { topDealUsers } from '../../data';

const TopBox = () => {
  return (
    <div className='topBox'>
        <h1>Top Deals</h1>
        <div className='list'>
          {topDealUsers.map((user) => (
            <div className='listitem' 
            key={user.id}>
              <div className="user">
                <img src="" alt="" />
                <div className="userTexts">
                  <span className='username'>{user.username}</span>
                  <span className='email'>{user.email}</span>

                </div>
              </div>

            </div>
          ))}
        </div>
    </div>
  )
}

export default TopBox;