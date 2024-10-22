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

    const [number, setnumber] = useState(1);
    const [users, setUsers] = useState({
        alireza: [{
            fullname: "alireza azizi",
            number: "09",
            dateEnter: "2000"
        }],
        havij: [
            {
                fullname: "havij",
                number: "09",
                dateEnter: "2000"
            }
        ],
        ali: [{
            fullname: "ali",
            number: "09",
            dateEnter: "2000"
        }]
    });
    const [userName, setUserName] = useState(users[username].filter(u => u.project != undefined));
    const [fUserName, setFUserName] = useState(users[username].filter(u => u.project != undefined));
    console.log(userName);


    const handlesearch = (e) => {
        setUserName(fUserName.filter(o => o.project.includes(e.target.value)));
    };

    const handleDelete = (id) => {
        const copy = { ...users };
        copy[username] = [...users[username].filter(o => o.id !== id)];
        setUsers(copy);
        setUserName(copy[username].filter(u => u.project != undefined));
        setFUserName(copy[username].filter(u => u.project != undefined));
    };



    const handleclick = () => {
        Swal.fire({
            title: 'Enter your details',
            html: `
            <div class="form-row">
                <label for="date" class="swal lab">Date:</label>
                <input type="date" id="date" class="swal2-input swal">
                </div>
                <div class="form-row">
                <label for="project" class="swal lab">Project:</label>
                <input type="text" id="project" class="swal2-input swal" placeholder="Enter project name">
                </div>
                <div class="form-row">
                <label for="yourjob" class="swal lab">Your Job:</label>
                <input type="text" id="yourjob" class="swal2-input swal" placeholder="Enter your job role">
                </div>
                <div class="form-row">
                <label for="time" class="swal lab">Time:</label>
                <input type="date" id="time" class="swal2-input swal">
                </div>
            `,
            width: 600,
            background: "#8d99ae",
            focusConfirm: false,
            preConfirm: () => {
                const date = document.getElementById('date').value;
                const project = document.getElementById('project').value;
                const yourjob = document.getElementById('yourjob').value;
                const time = document.getElementById('time').value;
                const copy = { ...users };
                copy[username] = [...copy[username], {
                    id: number,
                    date: date,
                    project: project,
                    yourjob: yourjob,
                    deliverytime: time
                }];
                setnumber(number + 1);
                setUsers(copy);
                setUserName(copy[username].filter(u => u.project != undefined));
                setFUserName(copy[username].filter(u => u.project != undefined))

                if (!date || !project || !yourjob || !time) {
                    Swal.showValidationMessage(`Please fill in all fields`);
                }
            }
        });
    };


    //if (access.access) {
    if (username == "alireza") {
        return (
            <div className="app-admin">
                <div className="main-admin">
                    <div className="personel-list">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>fullNamw</th>
                                    <th>number</th>
                                    <th>dateEnter</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(users).map(key => {
                                        users[key].find(u =>
                                            <tr key={Math.random()}>
                                                <td>{u.fullname}</td>
                                                <td>{u.nmber}</td>
                                                <td>{u.dateEnter}</td>
                                                <td className="options" onClick={() => handleDelete(u.id)}>&#128465;</td>
                                            </tr>);
                                    })
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="list-holder">
                        <div className="admin-box-1">hi</div>
                        <div className="admin-box-1">hi</div>
                        <div className="calendar-offer">
                            <div className="offer">hi</div>
                            <div className="calendar">hi</div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
    return (
        <div className="body">
            <div className="container">
                <div className="right">
                    <header className="header">
                        <div className="user-info">
                            <img src="https://via.placeholder.com/50" alt="User Picture" className="user-pic" />
                            <span className="user-name">{username}</span>
                            {/* <button className="settings-btn">⚙️</button> */}
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
                        <input type="text" className="search-bar" placeholder="Search..."
                            onChange={(e) => handlesearch(e)} />
                    </div>
                    <div className="openning">

                    </div>
                    <div className="action-bar">
                        {/* <button className="btn view-all-btn" >View All</button> */}
                        <button className="btn add-btn" onClick={handleclick}>Add</button>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Date</th>
                                    <th>Project</th>
                                    <th>YourJob</th>
                                    <th>Delivery Time</th>
                                    <th>Option</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userName.map(u => (
                                        <tr key={Math.random()}>
                                            <td>{u.id}</td>
                                            <td>{u.date}</td>
                                            <td>{u.project}</td>
                                            <td>{u.yourjob}</td>
                                            <td>{u.deliverytime}</td>
                                            <td className="options" onClick={() => handleDelete(u.id)}>&#128465;</td>
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