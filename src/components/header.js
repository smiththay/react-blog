import React from 'react';


function Header(props) {


  return (
    <>
    <ul className="nav nav-pills">
      {
        props.pages.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <a
              href = {"#"}
                onClick={() => props.setPage(index)}
                className={"nav-link " + (props.currentPage === index ? 'active' : '')}
              >
                {item.readableName}
              </a>
            </li>
          )
        })
      }
      <div>
      
      {props.name}
      </div>
    </ul>
    </>

  )
}



export default Header

