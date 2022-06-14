import React from 'react'
import './STTab.scss'

const STTab = ({ title, section }) => {

  const scrollToSection = (elementRef) => {
      window.scrollTo({
          top: elementRef.current.offsetTop,
          behavior: "smooth",
      });
  };
  
  return (
    <div className='STTab'>
        <div className='STTab_text' onClick={()=>scrollToSection(section)}>
            {title}
        </div>
    </div>
  )
}

export default STTab;
