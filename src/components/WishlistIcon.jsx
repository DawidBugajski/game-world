import React from 'react';
import { AiFillHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setToggleMenu } from 'store/slices/toggleMenuSlice';
import useWindowWidth from 'hooks/useWindowWidth';

const WishlistIcon = () => {
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const { width } = useWindowWidth();
  const handleCloseOpenMenu = () => width < 640 && dispatch(setToggleMenu());

  return (
    <Link onClick={handleCloseOpenMenu} to='/wishlist'>
      <div className='group cursor-pointer transition-all duration-300 grid grid-cols-[50px_1fr] w-full place-content-start'>
        <div
          className={`${
            isMenuOpen ? 'flex items-center gap-3' : 'hidden'
          } lg:flex lg:items-center lg:gap-3`}
        >
          <button
            className={`rounded-full cursor-pointer bg-main-dark-red min-h-[50px] min-w-[50px] ${
              !isMenuOpen && 'pointer-events-none'
            }`}
            disabled={isMenuOpen ? false : true}
          >
            <AiFillHeart className='h-full w-full scale-75 fill-[#d8d5d0] group-hover:fill-[#fff]' />
          </button>
          <span
            className={`transition-all duration-300 w-[100px] tracking-widest text-[#d8d5d0] font-bold italic border-b-2 border-transparent uppercase group-hover:border-main-dark-red group-hover:text-white ${
              !isMenuOpen && 'opacity-0 pointer-events-none'
            } h-max`}
          >
            Wishlist
          </span>
        </div>
      </div>
    </Link>
  );
};

export default WishlistIcon;
