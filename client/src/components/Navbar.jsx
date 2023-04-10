import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, Navigate } from "react-router-dom";
import { checkIsAuth, logout } from "../redux/features/auth/authSlice";
import { toast } from 'react-toastify';


export const Navbar = () => {

    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()

    const activeStyles = {
        color: "white",
        with: "50px",
        borderRadius: "2px",
        // border: "1px solid  rgb(71 85 105)",
        padding: "0.5rem",
        backgroundColor: " rgb(71 85 105)",
    }


    const logoutHandler = () => {
        dispatch(logout)
        window.localStorage.removeItem("token")
        toast("Вы вышли из системы.")
        // Navigate("/")
    }



    return (
        <div className="flex py-4 justify-between items-center">
            <span className=" flex justify-center items-center w-32 h-24  text-xs text-white rounded-sm">
                <img src={'https://www.dynadot.com/domain/logo/blog-logo1607099704.png'} alt="logo" />
            </span>

            {
                isAuth && (<ul className="flex gap-8" >
                    <li>
                        <NavLink
                            to={"/"}
                            href="/"
                            className="text-xs text-gray-400 hover:text-white"
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >Главная</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/posts"}
                            href="/"
                            className="text-xs text-gray-400 hover:text-white"
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >Мои посты</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to={"/new"}
                            href="/"
                            className="text-xs text-gray-400 hover:text-white"
                            style={({ isActive }) =>
                                isActive ? activeStyles : undefined
                            }
                        >Добавить пост</NavLink>
                    </li>
                </ul>)
            }


            <div className='flex justify-center items-center w-32'>
                <div
                    className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm w-24 px-4 py-2">
                    {isAuth ? (
                        <button onClick={logoutHandler}>Выйти</button>
                    ) : (
                        <Link to={"/login"} >Войти</Link>
                    )}
                </div>
            </div>

        </div>
    )
}
