import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";
import NewUserForm from "./components/newuser/NewUserForm";

function App() {
    const [showModal, setShowModal] = useState(false);
    const [users, setUsers] = useState([]);

    const deletUser = (id) => {
        setUsers((prev) => {
            return prev.filter((user) => {
                return user.id !== id;
            });
        });
    };

    const closeModal = (e) => {
        if (e.target.className === "overlay") {
            setShowModal(false);
        }
        if (e.key === "Escape") {
            setShowModal(false);
        }
    };

    const addUser = (user) => {
        setUsers((prev) => {
            return [...prev, user];
        });
        setShowModal(false);
    };

    return (
        <div onClick={closeModal} onKeyDown={closeModal} className="App">
            <Navbar usersLenght={users.length} />
            <main>
                <div className="no-users">
                    {users.length === 0 && <h2>No Users</h2>}
                </div>
                <UserList users={users} deletUser={deletUser} />
            </main>
            {showModal && <NewUserForm addUser={addUser} />}
            <button
                onClick={() => {
                    setShowModal(true);
                }}
                className="create-user"
            >
                Create User
            </button>
            <Footer />
        </div>
    );
}

export default App;

// {
//     id: 1,
//     image: "https://picsum.photos/400/400?random=1",
//     firstName: "Otabek",
//     lastName: "Madaminov",
//     age: 22,
//     from: "Uzbekistan",
//     job: "Frontend Devolper",
//     gender: "Male",
// },
