import React from 'react'

export default function Categories() {
  return (
    <>
      <ul className='userCategories'>
        <li>Amazing views</li>
        <li>Beach</li>
        <li>Historical Homes</li>
        <li>Earth Homes</li>
        <li>Luxe</li>
        <li>Dammusi</li>
        <li>Farms</li>
        <li>Hanoks</li>
        <li>Mansions</li>
        <li>Amazing Pools</li>
      <button className='filter'>Filters</button>
      <button className='filter'>Display total before taxes<input type='checkbox'/>
</button>
      </ul>
    </>
  )
}
