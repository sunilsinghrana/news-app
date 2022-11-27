import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncNews } from '../app/news/newsSlice';

const Menu = ({active, setActive, setCategory}) => {
  const dispatch =  useDispatch()
  const links = [
    { id: 1, name: 'General', Value: 'general' },
    { id: 2, name: 'Business', Value: 'business' },
    { id: 3, name: 'Entertainment', Value: 'entertainment' },
    { id: 4, name: 'Health', Value: 'health' },
    { id: 5, name: 'Science', Value: 'science' },
    { id: 6, name: 'Sports', Value: 'sports' },
    { id: 7, name: 'Technology', Value: 'technology' },
  ];

  function onClick(id, value){
    setActive(id)
    setCategory(value)
    dispatch(fetchAsyncNews(value))
  }
  return (
    <div>
    <div className="flex flex-col justify-evenly h-72 items-center bg-white">
      <div className="latest-news">
        <h1 className="text-3xl font-bold text-black">See The Latest News</h1>
      </div>
      <div className="menu-item ">
        <ul className="flex items-center justify-center flex-wrap">
          {links.map((link) => (
            <li key={link.id} className="rounded-box text-black mx-2 cursor-pointer">
              <button className={`btn btn-ghost btn-${active === link.id ? 'active' : 'inactive'}`} onClick={()=> onClick(link.id, link.Value)}> {link.name}</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Menu;
