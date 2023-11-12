import React from "react"

const UserProfile = ({ params }: any) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>Hello {params.id}</p>
    </div>
  )
}

export default UserProfile
