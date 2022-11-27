import React,{ lazy, Suspense, useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncNews } from './app/news/newsSlice';
import Footer from './component/Footer';
import Header from './component/Header';
import Spinner from './component/Spinner';

const NewsGrid = lazy(() => import('./component/NewsGrid'))
const Menu = lazy(() => import('./component/Menu'))


export default function App() {
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState('general')
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAsyncNews(category))
  },[dispatch, category])
  return (
    <div>
      <Header />
      <Suspense fallback={<Spinner/>}>
      <Menu active={active} setCategory={setCategory} setActive={setActive} />
      <NewsGrid category={category}/>
      </Suspense>
      <Footer/>
    </div>
  );
}
