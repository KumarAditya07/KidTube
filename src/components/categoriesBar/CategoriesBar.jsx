import React, { useState } from 'react'
import "./_categoriesBar.scss"

const keywords = [
  'All',
  'Cartoons',
  'Disney Movies',
  'Animated Stories',
  'Superheroes',
  'DIY Crafts',
  'Magic Tricks',
  'Puzzle Games',
  'Board Games',
  'Outdoor Adventures',
  'Science Experiments',
  'Art and Crafts',
  'Funny Animals',
  'Kids' ,'Music',
  'Storytime',
  'Cooking for Kids',
  'Space Exploration',
  'Dinosaurs',
  'Exploring Nature',
  'Positive Role Models',
  'React js',
   'Angular js',
   'React Native',
   'use of API',
   'Redux',
   'Music',
   'Algorithm Art ',
   'Guitar',
   'Bengali Songs',
   'Coding',
   'Cricket',
   'Football',
   'Real Madrid',
   'Gatsby',
   'Poor Coder',
];

const CategoriesBar = () => {


  const [activeElement, setActiveElement] = useState('All')

  const handleClick = value => {
     setActiveElement(value)
  }

  return (
    <div className='categoriesBar'>
    {keywords.map((value, i) => (
       <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? 'active' : ''}>
          {value}
       </span>
    ))}
 </div>
  )
}

export default CategoriesBar
