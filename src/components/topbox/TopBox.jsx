import React from 'react';
import "./topbox.scss";
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
                <img src="https://images.unsplash.com/photo-1548364538-60b952c308b9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className="userTexts">
                  <span className='username'>{user.username}</span>
                  <span className='email'>{user.email}</span>
                </div>
              </div>
              <span className='amount'>${user.amount}</span>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TopBox;