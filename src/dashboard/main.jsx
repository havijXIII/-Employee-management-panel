import React, { useContext, useState } from "react";
import Logging from "../Logging/loging";
import Access from "../Logging/access";
import { useParams } from "react-router-dom";
import Calendar from "../calendar/calendar";
import "./main.css"
import Need from "../need/need";
import Swal from "sweetalert2";

const Dashboard = () => {

    const access = useContext(Access);
    const { username } = useParams();
    const [users, setUsers] = useState({
        alireza: useState([{
            date: "",
            project: "",
            yourjob: "",
            deliverytime: ""
        }]),
        havij: useState([{
            date: "",
            project: "",
            yourjob: "",
            deliverytime: ""
        }])
    });

    const img = "/src/img/Jowhareh_galleries_poster_479e8a61-f213-4b4d-9a07-451114457a63.webp"
    const [userName, setusername] = users[username];

    const handleclick = () => {
        const { value: formValues } = Swal.fire({
            title: "Multiple inputs",
            html: `
                <input id="swal-input1" class="swal2-input">
                <input id="swal-input2" class="swal2-input">
            `,
            focusConfirm: false,
            width: 600,
            padding: "3em",
            background: "#fff url(https://cdn.pixabay.com/photo/2023/10/13/17/10/mushroom-8313142_1280.jpg)",
            preConfirm: () => {
                return [
                    document.getElementById("swal-input1").value,
                    document.getElementById("swal-input2").value
                ];
            }
        });
        if (formValues) {
            Swal.fire(JSON.stringify(formValues));
        }
    }



    // if (access.access) {
    return (
        <div className="body">
            <div className="container">
                <div className="right">
                    <header className="header">
                        <div className="user-info">
                            <img src="https://via.placeholder.com/50" alt="User Picture" className="user-pic" />
                            <span className="user-name">{username}</span>
                            <button className="settings-btn">⚙️</button>
                        </div>
                    </header>

                    <div className="calendar-C">
                        <Calendar />
                    </div>

                    <div className="calendar-N">
                        <Need />
                    </div>

                </div>
                <div className="left">
                    <div className="search">
                        <input type="text" className="search-bar" placeholder="Search..." />
                    </div>
                    <div className="openning">
                        hi
                    </div>
                    <div className="table-container">
                        <div className="action-bar">
                            <button className="btn view-all-btn">View All</button>
                            <button className="btn add-btn" onClick={handleclick}>Add</button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Project</th>
                                    <th>YourJob</th>
                                    <th>Delivery Time</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userName.map(u => (
                                    <tr key={Math.random()}>
                                        <td>{u.date}</td>
                                        <td>{u.project}</td>
                                        <td>{u.yourjob}</td>
                                        <td>{u.deliverytime}</td>
                                        <td className="options">⋮</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
//     else {
//         return (
//             <Logging />
//         )
//     }
// }

export default Dashboard;