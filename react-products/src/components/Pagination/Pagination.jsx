
import React from 'react'

const Pagination=({postsPerPage,totalEpisode, paginate})=> {
     
    const pageNo=[];
    for(let i=1;i<=Math.ceil(totalEpisode / postsPerPage);i++){
        pageNo.push(i);
    }

    return (
        <div>
            <nav>
              <ul className="pagination pagination-md justify-content-center">
                  {
                      pageNo.map(num=>
                      <li className='page-item' key={num} >
                       <a href="!#" className='page-link' onClick={()=>paginate(num)} >{num}</a>
                      </li>
                    )}
              </ul>
            </nav>
        </div>
    )
}

export default Pagination