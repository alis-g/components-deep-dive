import { useEffect, useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Pagination from './components/Pagination'
import UserList from './components/UserList'
import UserSearch from './components/UserSerach'
import './styles.css'
import CreateEditModal from './components/CreateEditModeal.jsx'

const baseUrl = 'https://mjwdadmkprxoobcrtvzj.supabase.co/rest/v1/users';
const apiKey = 'sb_publishable_LVP7qrwB4p3YreIf-f19Iw_YST_YdAN'

function App() {
    const [users, setUsers] = useState([]);
    const [showSaveUserModal, setShowSaveUserModal] = useState(false)


    useEffect(() => {
        fetchUsers(users)
            .then(data => setUsers(data))
            .catch(error => console.error("Error fetching users:", error))
    }, [])


    const addUserClickHandler = () => {
        setShowSaveUserModal(true)
    };

    const addUserCloseHandler = () => {
        setShowSaveUserModal(false)
    };

    const submitUserHandler = async (user) => {

        try {
            await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': apiKey
                },
                body: JSON.stringify(user)
            })
            const updateUsers = await fetchUsers()
            setUsers(updateUsers)
        } catch (error) {
            alert(error)
        } finally {
            setShowSaveUserModal(false)
        }
    }
    return (
        <>
            <Header />

            {/* <!-- Main component  --> */}
            <main className="main">
                <section className="card users-container">
                    <UserSearch />

                    <UserList users={users} />

                    <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

                    {showSaveUserModal && <CreateEditModal onClose={addUserCloseHandler} onSubmit={submitUserHandler} />}


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

async function fetchUsers() {
    const response = await fetch(baseUrl, {
        headers: {
            'apikey': apiKey
        }
    })

    const data = await response.json()
    return data
}
export default App
