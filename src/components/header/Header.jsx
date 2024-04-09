import React from 'react'
import './_header.scss'

import { FaBars } from "react-icons/fa"
import { AiOutlineSearch } from "react-icons/ai"
import { MdNotifications, MdApps } from "react-icons/md"

const header = () => {
  return (
    <div className="header ">
    <FaBars
       className="header__menu"
       size={26}
      //  onClick={() => handleToggleSidebar()}
    />

    <img
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA6jDKRUJGLH6H31uDUypHtSLMd-Ebq2lW-HJMUqxebA&s"
       alt=""
       className="header__logo"
    />

    <form>
       <input type="text" placeholder="Search" />
       <button type="submit">
          <AiOutlineSearch size={22} />
       </button>
    </form>

    <dic className="header__icons">
       <MdNotifications size={28} />
       <MdApps size={28} />
       <img
          src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
          alt="avatar"
       />
    </dic>
 </div>
  )
}

export default header
