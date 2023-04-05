import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/myinfo.css';

function MyInfo(props) {
  const [userData, setUserData] = useState();
  const token = localStorage.getItem('token');
  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axios.get(
          `https://api.bodam.site:8080/account/info`,
          {
            withCredentials: true,
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response);
        setUserData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  // useEffect(() => {
  //   console.log(userData);
  // }, [userData]);

  console.log(userData);

  return (
    <section className="user-information">
      <h1>내 정보</h1>
      <table className="user-info">
        <tbody>
          <tr>
            <th>
              <b>이름</b>
            </th>
            <td></td>
          </tr>
          <tr>
            <th>
              <b>아이디</b>
            </th>
            <td></td>
          </tr>
          <tr>
            <th>
              <b>이메일</b>
            </th>
            <td></td>
          </tr>
          <tr>
            <th>
              <b>전화번호</b>
            </th>
            <td></td>
          </tr>
          <tr>
            <th>
              <b>생년월일</b>
            </th>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default MyInfo;
