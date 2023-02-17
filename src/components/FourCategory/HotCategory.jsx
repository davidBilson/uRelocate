import React from 'react'
import HotSubCategory from './HotSubCategory'

const HotCategory = () => {
  return (
    <section className="hot-category">
        <h3 className='hot-category-title'>Hot Categories</h3>
        <div className="category-tag">
            <HotSubCategory categoryName="Education" categoryNumber="(2)" />
            <HotSubCategory categoryName="Study" categoryNumber="(6)" />
            <HotSubCategory categoryName="Work" categoryNumber="(7)" />
            <HotSubCategory categoryName="Family" categoryNumber="(11)" />
        </div>
    </section>
  )
}

export default HotCategory