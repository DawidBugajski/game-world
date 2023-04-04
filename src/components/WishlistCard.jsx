import React from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { setRemoveFromWishlist } from 'store/slices/wishlistSlice';
import { useDispatch } from 'react-redux';
import { useDrag } from 'react-dnd';

const WishlistCard = ({ image, name, id, index }) => {
  const dispatch = useDispatch();
  const handleDeleteGame = (game) => dispatch(setRemoveFromWishlist(game));

  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'game',
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      style={{ opacity: isDragging ? 0.5 : 1 }}
      ref={drag}
      key={id}
      className='relative w-56 transition-all duration-150 rounded-lg shadow-xl cursor-pointer h-72 group hover:shadow-cyan-800 hover:shadow-2xl hover:scale-95'
    >
      <FaTrash
        onClick={() => handleDeleteGame({ image, name, id })}
        className='absolute z-10 transition-colors duration-150 opacity-0 hover:stroke-2 w-7 h-7 top-2 right-2 group-hover:opacity-100 hover:fill-main-red'
      />

      <img
        alt={name}
        src={
          image !== null
            ? image
            : 'https://via.placeholder.com/600x400?text=Game+Image'
        }
        className='object-cover w-full h-full transition-all duration-0 rounded-xl group-hover:brightness-50 group-hover:blur-[1px]'
      />
      <Link to={`/games/${id}`}>
        <h3 className='absolute w-10/12 p-[10px] text-sm font-bold text-left uppercase transition-all duration-150 -translate-x-1/2 border-l-2 cursor-pointer border-main-red bottom-[10%] left-1/2 opacity-0 group-hover:opacity-100'>
          {name}
        </h3>
      </Link>
    </div>
  );
};

export default WishlistCard;
