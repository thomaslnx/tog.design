import { useState } from 'react';

import { IoMdClose } from 'react-icons/io';
import { HiOutlinePlus } from 'react-icons/hi';
import { GrPlay } from 'react-icons/gr';
import { BsSearch } from 'react-icons/bs';
import { BiCode } from 'react-icons/bi';
import { FiMoreHorizontal, FiCamera } from 'react-icons/fi';

import { Container } from './styles';

const AsideArticleMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const setClassName = (buttonName) => {
    const classArray = ['button-item'];
    if (openMenu) {
      classArray.push(`${buttonName}`);
    }

    return classArray.join(' ');
  };

  const hiddenTellYourStory = () => {
    if (openMenu) {
      return 'hidden';
    }
    return 'show';
  };

  return (
    <Container>
      <div className="text-buttons">
        <button
          className="button-item close"
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <IoMdClose /> : <HiOutlinePlus />}
        </button>
        <span className={hiddenTellYourStory()}>Tell your story...</span>
        <button className={setClassName('camera')} type="button">
          <FiCamera />
        </button>
        <button className={setClassName('search')} type="button">
          <BsSearch />
        </button>
        <button className={setClassName('play')} type="button">
          <GrPlay />
        </button>
        <button className={setClassName('code')} type="button">
          <BiCode />
        </button>
        <button className={setClassName('more')} type="button">
          <FiMoreHorizontal />
        </button>
      </div>
    </Container>
  );
};

export default AsideArticleMenu;
