import React from 'react'

const Newsitem = ({item, id}) => {
  return (
    
<div key={id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="!#">
        <img className="rounded-t-lg" src={!item.urlToImage ? "https://cdn.zeebiz.com/sites/default/files/2022/11/23/212233-m2.JPG" : item.urlToImage} alt="" />
    </a>
    <div className="p-5 flex flex-col justify-between items-start">
        <a href="!#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{!item.description ? "Orion will travel about 57,287 miles beyond the Moon at its farthest point from the Moon on November 25, passing the record set by Apollo 13." : item.description }</p>
        <a href={item.url} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </a>
        <p className='my-2'>Published on : {item.publishedAt}</p>
    </div>
</div>

  )
}

export default Newsitem
