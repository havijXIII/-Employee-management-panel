import React, { useContext, useState } from "react";
import "./need.css"
import Swal from "sweetalert2";
import Needs from "../dashboard/Needs";

const Need = () => {

    const [number, setnumber] = useState(1);
    const { users, setUsers, need, setneed, username } = useContext(Needs);

    const handleclick = () => {
        Swal.fire({
            title: 'Enter your details',
            html: `
                <div class="form-row">
                <label for="Title" class="swal lab">Title:</label>
                <input type="text" id="title" class="swal2-input swal" placeholder="Enter Title">
                </div>
                <div class="form-row">
                <label for="Description" class="swal lab">Description:</label>
                <input type="text" id="desc" class="swal2-input swal" placeholder="Enter Description">
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
                const Title = document.getElementById('title').value;
                const desc = document.getElementById('desc').value;
                const time = document.getElementById('time').value;
                if (!Title || !desc || !time) {
                    Swal.showValidationMessage(`Please fill in all fields`);
                }
                else {
                    const copy = { ...users };
                    copy[username] = [...copy[username]];
                    copy[username][0] = [...copy[username][0], {
                        Id: number,
                        Title: Title,
                        Description: desc,
                        Time: time
                    }];
                    setUsers(copy);
                    setneed(copy[username][0]);
                    setnumber(number + 1);
                }
            }
        });
    };

    const handleShow = (n) => {
        Swal.fire({
            title: 'Details',
            html: `
                <div class="form-row">
                <label for="Title" class="swal lab">Title:</label>
                <h2 type="text" id="title" class="swal2-input swal" placeholder="Enter Title">${n.Title}</h2>
                </div>
                <div class="form-row">
                <label for="Description" class="swal lab">Description:</label>
                <h2 type="text" id="desc" class="swal2-input swal" placeholder="Enter Description">${n.Description}</h2>
                </div>
                <div class="form-row">
                <label for="time" class="swal lab">Time:</label>
                <h2 type="date" id="time" class="swal2-input swal">${n.Time}</h2>
                </div>
            `,
            width: 600,
            background: "#8d99ae",
            focusConfirm: false,
        });
    }


    return (
        <div className="container-N">
            <div className="header-N">
                <h1>Need</h1>
                <button className="addNeed" onClick={handleclick}>add</button>
            </div>

            <div className="card-container">
                {need.map(n =>
                    <div className="card" key={Math.random()}>
                        <h2>{n.Title}</h2>
                        <button className="training-btn" onClick={() => handleShow(n)}>See</button>
                    </div>
                )}
            </div>

        </div>
    )
};
export default Need;