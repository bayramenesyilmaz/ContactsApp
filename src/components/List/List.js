import { useState } from 'react'

function List({ listContact }) {

  const [listSearch, setListSearch] = useState("");

  const filtered = listContact.filter((item) => {

    return Object.keys(item).some((key) =>

      item[key]
        .toString()
        .toLowerCase()
        .includes(listSearch.toLowerCase())
    );

  })


  return (
    <div className='list'>

      <input placeholder='Search a friends'
        onChange={(e) => setListSearch(e.target.value)}
        value={listSearch}

      />

      <ul>

        {
          filtered.map((person, i) => (
            <li key={i}>{person.fullName}</li>
          ))
        }
      </ul>

    </div>
  )
}

export default List