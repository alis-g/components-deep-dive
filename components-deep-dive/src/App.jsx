import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Pagination from './components/Pagination'
import UserList from './components/UserList'
import UserSearch from './components/UserSerach'
import './styles.css'
import CreateEditModal from './components/CreateEditModeal.jsx'

function App() {
    const [users, setUsers] = useState([]);
    const [showSaveUserModal, setShowSaveUserModal] = useState(false)


    useEffect(() => {
        fetch('https://mjwdadmkprxoobcrtvzj.supabase.co/rest/v1/users', {
            headers: {
                'apikey': 'sb_publishable_LVP7qrwB4p3YreIf-f19Iw_YST_YdAN'
            }
        })
            .then(res => res.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching users:", error))
    }, [])

    const addUserClickHandler = () => {
        setShowSaveUserModal(true)
    };

    const addUserCloseHandler = () => {
        setShowSaveUserModal(false)
    };
    return (
        <>
            <Header />

            {/* <!-- Main component  --> */}
            <main className="main">
                <section className="card users-container">
                    <UserSearch />

                    <UserList users={users} />

                    <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

                    {showSaveUserModal && <CreateEditModal onClose={addUserCloseHandler} />}

                    
                    <Pagination />
                </section>

                {/* <!-- User details component  --> */}

                {/* <!-- Create/Edit Form component  --> */}

                {/* <!-- Delete user component  --> */}

            </main>
            < Footer />
        </>

    )
}

export default App
