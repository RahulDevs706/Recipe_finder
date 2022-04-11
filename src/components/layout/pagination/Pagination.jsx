import { useEffect, useState } from "react";
import "./Pagination.css"

function Pagination({ data, RenderComponent , pageLimit, dataLimit }) {
    const [pages] = useState(Math.ceil(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);
  
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
        
      }
  
    function goToPreviousPage() {
      setCurrentPage((page) => page - 1);
    }

    function changePage(event) {
      const pageNumber = Number(event.target.textContent);
      setCurrentPage(pageNumber);
    }
  
    const getPaginatedData = () => {
      const startIndex = currentPage * dataLimit - dataLimit;
      const endIndex = startIndex + dataLimit;
      return data.slice(startIndex, endIndex);
    };

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    useEffect(() => {
      window.scrollTo({ behavior: 'smooth', top: '0px' });
    }, [currentPage]);
  
    return (
      <div>
    
        <div className="resultWrapper">
          {getPaginatedData().map((d, idx) => (
            <RenderComponent 
                key={idx} 
                title={d.title} 
                id={d.recipe_id} 
                sURL={d.source_url} 
                imgURL={d.image_url}  
                pubName={d.publisher}
            />
          ))}
        </div>
    

        <div className="pagination">
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage===1?"disabled":""} `}
            disabled={currentPage===1?true:false}
          >
            prev
          </button>
    
          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}
    
          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage===pages?"disabled":""} `}
            disabled={currentPage===pages?true:false}
          >
            next
          </button>
        </div>
      </div>
    );
}

export default Pagination;