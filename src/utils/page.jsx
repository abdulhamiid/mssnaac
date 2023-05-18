import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import CommitteeDetailss from './index';
import { MailIcon } from '../ui/svg';

function Items({ currentItems }) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {currentItems.map((detail) => (
        <div key={detail.post}>
          <div
            className={`flex justify-end items-center flex-col ${detail.background} h-[250px]`}
          >
            {detail.icon}
          </div>

          <div className="bg-white py-[21px] px-[17px] shadow-lg rounded-md">
            <div className="flex justify-between items-center  pb-3">
              <p className="text-lg font-bold text-brand-black">
                {detail.name}
              </p>
              <div className="cursor-pointer">
                <MailIcon />
              </div>
            </div>
            <p className="text-sm font-medium text-brand-black">
              {detail.post}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const Page = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(CommitteeDetailss.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(CommitteeDetailss.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % CommitteeDetailss.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="Prev"
        pageClassName="number-item"
        pageLinkClassName="number-link"
        previousClassName="prev-item"
        previousLinkClassName="prev-link"
        nextClassName="next-item"
        nextLinkClassName="next-link"
        containerClassName="pagination"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default Page;
