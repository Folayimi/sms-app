import axios from "axios";
import { notify, notifyError } from "./toastify";

// const api = BASE_URL;
const api = "https://smsbackend-iota.vercel.app/api";
// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export const setConfig = (accessToken) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    // withCredentials: true,
  };

  return config;
};

export const setImageConfig = (accessToken, type) => {
  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type":
        type === "themeType" ? "application/json" : "multipart/form-data",
    },
    withCredentials: true,
  };

  return config;
};

let count = 0;

export const userLogin = async (data) => {
  await axios
    .post(`${api}/auth/login`, data, {
      withCredentials: true,
    })
    .then((response) => {
      console.log(response);
      if (response.data.status === "success") {
        // localStorage.setItem(
        //   "userData",
        //   JSON.stringify(response.data.data.data)
        // );
        localStorage.setItem("smsToken", response.data.token);
        // localStorage.setItem(
        //   "alpsUser",
        //   JSON.stringify(response.data.data.data)
        // );
      }
    })
    .catch((err) => {
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
    });
};

export const googleAuthentication = async () => {
  await axios
    .get(`${api}/google-auth`, {
      headers: {
        "Content-Type": "text/html",
      },
      withCredentials: false,
    })
    .then((response) => {
      console.log(response);
      // if (response.data.status === "success") {

      // }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const userRegistration = async (data) => {
  await axios
    .post(`${api}/auth/register`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      // withCredentials: false,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const forgotPassword = async (data, setPopUp, setModal) => {
  await axios
    .post(`${api}/auth/forgot-password`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      notify("Password reset link sent to your email");
    })
    .catch((err) => {
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
    });
};

export const resetPassword = async (data, token) => {
  await axios
    .post(`${api}/auth/reset-password/${token}`, data, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      window.location.pathname = "/login";
    })
    .catch((err) => {
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
    });
};

export const updateSocialLinks = async (body) => {
  let result = [];
  let alpsToken = localStorage.getItem("alpsToken");
  await axios
    .patch(`${api}/user/update-socials`, body, setConfig(alpsToken))
    .then((response) => {
      console.log(response);
      if (response.data.status === "success") {
        result = response.data.data.data;
      }
    })
    .catch((err) => {
      console.log(err);
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
    });
  return result;
};

export const initializePayment = async (body) => {
  let result = [];
  let alpsToken = localStorage.getItem("alpsToken");
  await axios
    .post(`${api}/payment`, body, setConfig(alpsToken))
    .then((response) => {
      if (response.data.status === "success") {
        result = response.data.data.data;
      }
    })
    .catch((err) => {
      console.log(err);
      if (err.response.data.message) {
        notifyError(err.response.data.message);
      } else {
        notifyError("Network Error");
      }
    });
  return result;
};
