import React from 'react'

const Pagination = ({ onChange, total, current }) => {
  let pages = new Array(total).fill(0).map((item, index) => (
    <button className="bg-blue-900 ml-5 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
      disabled={current === index + 1}
      onClick={() => onChange(index + 1)}
      key={`page-${index + 1}`}
    >
      {index + 1}
    </button>
  ))
  return total !== 0 && pages
}

export default Pagination