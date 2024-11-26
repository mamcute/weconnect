import { saveUserInfo } from "@redux/slices/authSlice";
import { useGetAuthUserQuery } from "@services/rootApi";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {  Outlet } from "react-router-dom";
import Header from "@components/Header";
// phan quyen bao ve
const ProtectedLayOut = () => {
  const dispatch = useDispatch();
  const response = useGetAuthUserQuery();
  useEffect(() => {
    if (response.isSuccess) {
      dispatch(saveUserInfo(response.data));
    }
  }, [response.isSuccess, response.data, dispatch]);
  console.log({ response });
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default ProtectedLayOut;
