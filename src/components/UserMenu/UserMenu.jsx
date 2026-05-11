import { useEffect, useRef, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

import { selectAuthUser } from '../../redux/auth/selectors';
import { apiLogoutUser } from '../../redux/auth/operations';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectAuthUser);

  const [isOpen, setIsOpen] = useState(false);

  const controlsRef = useRef(null);

  const onLogoutBtnClick = () => {
    dispatch(apiLogoutUser());
  };

  const onUserBtnClick = () => {
    setIsOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (controlsRef.current && !controlsRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.controls} ref={controlsRef}>
      <button className={styles.userBtn} type="button" onClick={onUserBtnClick}>
        {user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1)}

        <MdOutlineKeyboardArrowDown
          className={`${styles.icon} ${isOpen ? styles.rotate : ''}`}
        />
      </button>

      <button
        className={`${styles.logoutBtn} ${isOpen ? styles.open : ''}`}
        type="button"
        onClick={onLogoutBtnClick}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
