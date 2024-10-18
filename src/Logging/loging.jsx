import React, { useContext, useState } from "react";
import "./loging.css"
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Access from "./access";

const Logging = () => {

    const [userName, setUserName] = useState(false);
    const [password, setPassword] = useState(false);
    const [user, setUser] = useState({
        username: "",
        password: ""
    });
    const [users, setUsers] = useState([
        { username: "havij", password: "1111" }, { username: "alireza", password: "azizi" },
        { username: "nmidonam", password: "0000" }
    ]);
    const navigate = useNavigate();
    const access = useContext(Access);    


    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName && password) {
            if (users.find(u => u.username == user.username && users.find(u => u.password == user.password))) {
                access.setAccess(true);
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "success",
                    title: "با موفیقیت وارد شدید"
                });
                navigate(`/dashboard/${user.username}`);
            }
            else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.onmouseenter = Swal.stopTimer;
                        toast.onmouseleave = Swal.resumeTimer;
                    }
                });
                Toast.fire({
                    icon: "error",
                    title: "اطلاعات وارد شده صحیح نمیباشد"
                });
            }
            setUser({
                username: "",
                password: ""
            });
            setUserName(false);
            setPassword(false);
        }
        else {
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "error",
                title: "اطلاعات وارد شده صحیح نمیباشد"
            });
        }
    };

    const handleUser = (e) => {
        const min = 3;
        const max = 30;
        let remaining = max - e.target.value.length;
        if (e.target.value.length < min) {
            setUserName(false)
        }
        else if (remaining < 0) {
            e.target.value = e.target.value.substring(0, max)
        }
        else if (e.target.value.length > min) {
            setUserName(true)
        }
    };

    const handlePassword = (e) => {
        const min = 3;
        const max = 30;
        let remaining = max - e.target.value.length;
        if (e.target.value.length < min) {
            setPassword(false)
        }
        else if (remaining < 0) {
            e.target.value = e.target.value.substring(0, max)
        }
        else if (e.target.value.length > min) {
            setPassword(true)
        }
    };


    return (
        <div className="main">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" value={user.username}
                            onChange={(e) => {
                                handleUser(e);
                                setUser({ ...user, username: e.target.value })
                            }} />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={user.password}
                            onChange={(e) => {
                                handlePassword(e);
                                setUser({ ...user, password: e.target.value })
                            }} />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
};

export default Logging;