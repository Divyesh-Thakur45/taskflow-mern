import React from "react";

const users = [
  {
    _id: 1,
    name: "Divyesh",
    email: "divyesh@gmail.com",
    status: "Active",
  },
  {
    _id: 2,
    name: "Rahul",
    email: "rahul@gmail.com",
    status: "Blocked",
  },
];

const ShowAllUsers = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">All Users</h1>

      <div className="overflow-auto bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-slate-200">
            <tr>
              <th className="p-4">Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b text-center">
                <td className="p-4">{user.name}</td>
                <td>{user.email}</td>
                <td>{user.status}</td>

                <td className="space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded">
                    Block
                  </button>

                  <button className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                  </button>

                  <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowAllUsers;
