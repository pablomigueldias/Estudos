import React from 'react'

const PropTest = ({ user }) => {

    function listusuarios() {
        return user.map((singleUser) => {
            return (
                <div>
                    <p>{singleUser.name}</p>
                </div>
            )
        })
    }

    function addUser() {
        
    }

    return (
        <div>
            <h1>Usuarios</h1>
            {listusuarios()}

        </div>
    )
}

export default PropTest