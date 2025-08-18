// import { useAuth, useUser } from "@clerk/clerk-react";
// import { useContext, useEffect, useState } from "react";
// import { AppContext } from "../context/AppContext.jsx";
// import axios from "axios";
// import toast from "react-hot-toast";

// const UserSyncHandler = () => {
//   const { isLoaded, isSignedIn, getToken } = useAuth();
//   const { user } = useUser();
//   const [synced, setSynced] = useState(false);
//   const { baseURL } = useContext(AppContext);

//   useEffect(() => {
//     const saveUser = async () => {
//       if (!isLoaded || !isSignedIn || synced || !user) return;

//       try {
//         const token = await getToken();

//         const userData = {
//           clerkId: user.id,
//           email: user.primaryEmailAddress?.emailAddress || "",
//           firstName: user.firstName || "",
//           lastName: user.lastName || "",
//           photoUrl: user.imageUrl || "",
//         };

//         console.log("Syncing user to backend:", userData);

//         await axios.post(`${baseURL}/users`, userData, {
//           headers: { Authorization: `Bearer ${token}` },
//         });

//         setSynced(true); // prevent re-posting
//       } catch (error) {
//         console.error("User sync failed", error);
//         toast.error("User sync failed. Please try again");
//       }
//     };

//     saveUser();
//   }, [isLoaded, isSignedIn, getToken, user, synced, baseURL]);

//   return null;
// };

// export default UserSyncHandler;






// const backendURL = import.meta.env.VITE_API_URL;

// console.log("Testing backendURL:", backendURL);

// await axios.post(`${backendURL}/users`, userData, {
//   headers: { Authorization: `Bearer ${token}` },
// });


// const backendURL = import.meta.env.VITE_API_URL || "https://invoice-gen-web-app.onrender.com";


import { useAuth, useUser } from "@clerk/clerk-react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext.jsx";
import axios from "axios";
import toast from "react-hot-toast";

const UserSyncHandler = () => {
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  const [synced, setSynced] = useState(false);
  const { baseURL } = useContext(AppContext);

  // ✅ Use env variable with fallback
  const backendURL = import.meta.env.VITE_API_URL || "https://invoice-gen-web-app.onrender.com";

  useEffect(() => {
    const saveUser = async () => {
      if (!isLoaded || !isSignedIn || synced || !user) return;

      console.log("Attempting user sync...");
      console.log("Using backendURL:", backendURL);
      console.log("User object:", user);

      try {
        const token = await getToken();
        console.log("JWT token:", token);

        const userData = {
          clerkId: user.id,
          email: user.primaryEmailAddress?.emailAddress || "",
          firstName: user.firstName || "",
          lastName: user.lastName || "",
          photoUrl: user.imageUrl || "",
        };

        console.log("Syncing user to backend:", userData);

        const response = await axios.post(`${backendURL}/users`, userData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        console.log("User sync response:", response.data);

        setSynced(true); // prevent re-posting
      } catch (error) {
        console.error("User sync failed", error);
        toast.error("User sync failed. Please try again");
      }
    };

    saveUser();
  }, [isLoaded, isSignedIn, getToken, user, synced, backendURL]);

  return null;
};

export default UserSyncHandler;
