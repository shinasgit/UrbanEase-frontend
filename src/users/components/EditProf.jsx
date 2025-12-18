import React from 'react'

function EditProf() {
  return (
    
    <div className="max-w-3xl mx-auto mt-10 bg-white rounded-2xl shadow-lg border border-gray-200">
  {/* Header */}
  <div className="flex items-center gap-6 p-6 border-b">
    <img
      src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
      alt="User Profile"
      className="w-24 h-24 rounded-full shadow-md"
    />
    <div>
      <h2 className="text-2xl font-semibold text-gray-800">
        John Doe
      </h2>
      <p className="text-gray-500">john.doe@example.com</p>
      <span className="inline-block mt-2 px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
        Active User
      </span>
    </div>
  </div>

  {/* Details */}
  <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <p className="text-sm text-gray-500">Phone</p>
      <p className="font-medium text-gray-800">+91 98765 43210</p>
    </div>

    <div>
      <p className="text-sm text-gray-500">Location</p>
      <p className="font-medium text-gray-800">Kochi, Kerala</p>
    </div>

    <div>
      <p className="text-sm text-gray-500">Role</p>
      <p className="font-medium text-gray-800">Customer</p>
    </div>

    <div>
      <p className="text-sm text-gray-500">Joined On</p>
      <p className="font-medium text-gray-800">June 2024</p>
    </div>
  </div>

  {/* Actions */}
  <div className="flex justify-end gap-4 p-6 border-t">
    <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
      Edit Profile
    </button>
    <button className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition">
      Logout
    </button>
  </div>
</div>

  )
}

export default EditProf