import React, { useEffect, useState } from 'react';
import { useAuth } from '../Store/useAuth';

function Users_Requests() {
  const [userRequests, setUserRequests] = useState([]);
  const { token } = useAuth();

  const UserRequests = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/doctor/requests", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error("Response not OK");
        return;
      }

      const res = await response.json();
      
      if (!Array.isArray(res.data)) {
        console.error("Unexpected data format");
        return;
      }

      const requestsWithUserDetails = await Promise.all(
        res.data.map(async (request) => {
          const userDetailResponse = await fetch(`http://localhost:3000/api/doctor/owner`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userId: request.userId })
          });

          if (!userDetailResponse.ok) {
            console.error("Failed to fetch user details");
            return request;
          }

          const userDetail = await userDetailResponse.json();
          return { ...request, userDetail: userDetail.user };
        })
      );

      setUserRequests(requestsWithUserDetails);
    } catch (error) {
      console.error("Internal server error:", error);
    }
  };

  useEffect(() => {
    if (token) {
      UserRequests();
    }
  }, [token]);

  return (
    <div>
      {userRequests.length > 0 ? (
        userRequests.map((request) => (
          <div key={request._id} className="request-card">
            <h3>{request.title}</h3>
            <p>{request.description}</p>
            <p>Requested by: {request.userDetail?.fullname}</p>
          </div>
        ))
      ) : (
        <p>No user requests available.</p>
      )}
    </div>
  );
}

export default Users_Requests;
