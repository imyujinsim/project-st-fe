import React from "react";
import logo from "../resources/logo.png";
import "../style/reset.css";
import "../style/signup.css";
import "../style/hr.css";

//npm i mdb-ui-kit

// function Signup(props) {
//   return (
//     <section className="gradient-custom">
//       <div className="container py-5">
//         <div className="row justify-content-center align-items-center">
//           <div className="col-12 col-lg-9 col-xl-7">
//             <div className="card-body">
//               <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
//                 <img src={logo} width={300} />
//               </h3>
//               <form>
//                 <div className="row">
//                   <div className="col-md-6 mb-4">
//                     <div className="form-outline">
//                       <input type="text" id="firstName" placeholder="성" />
//                     </div>
//                   </div>
//                   <div className="col-md-6 mb-4">
//                     <div className="form-outline">
//                       <input type="text" id="lastName" placeholder="이름" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6 mb-4 d-flex align-items-center">
//                     <div className="form-outline datepicker w-100">
//                       <input
//                         type="text"
//                         name="userName"
//                         placeholder="생년월일"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6 mb-4">
//                     <h6 className="mb-2 pb-1">성별: </h6>
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="inlineRadioOptions"
//                         id="femaleGender"
//                         defaultValue="option1"
//                         defaultChecked=""
//                       />
//                       <label
//                         className="form-check-label"
//                         htmlFor="femaleGender"
//                       >
//                         여성
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline">
//                       <input
//                         className="form-check-input"
//                         type="radio"
//                         name="inlineRadioOptions"
//                         id="maleGender"
//                         defaultValue="option2"
//                       />
//                       <label className="form-check-label" htmlFor="maleGender">
//                         남성
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="row">
//                   <div className="col-md-6 mb-4 pb-2">
//                     <div className="form-outline">
//                       <input
//                         type="text"
//                         id="emailAddress"
//                         placeholder="이메일"
//                       />
//                     </div>
//                   </div>
//                   <div className="col-md-6 mb-4 pb-2">
//                     <div className="form-outline">
//                       <input
//                         type="text"
//                         id="phoneNumber"
//                         placeholder="전화번호"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-4 pt-2">
//                   <input
//                     className="btn btn-primary btn-lg btn-color"
//                     type="submit"
//                     defaultValue="가입하기"
//                   />
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

function Signup(props) {
  return (
    <section className="signup">
      <div className="signup-wrapper">
        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 logo-wrapper">
          <img src={logo} width={300} />
        </h3>
        <form>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input type="text" id="firstName" placeholder="성" />
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="form-outline">
                <input type="text" id="lastName" placeholder="이름" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 d-flex align-items-center">
              <div className="form-outline datepicker w-100">
                <input
                  type="text"
                  id="emailAddress"
                  placeholder="아이디(이메일)"
                />
              </div>
            </div>
            <div className="col-md-6 mb-4 d-flex align-items-center">
              <div className="form-outline passwd ">
                <input type="text" name="passwd" placeholder="비밀번호" />
              </div>
            </div>

            {/* <div className="col-md-6 mb-4">
              <h6 className="mb-2 pb-1">성별: </h6>
              <div className="form-check form-check-inline">
                <div className="row">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="femaleGender"
                    defaultValue="option1"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="femaleGender">
                    여성
                  </label>
                </div>
                <p> </p>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="maleGender"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="maleGender">
                    남성
                  </label>
                </div>
              </div>
  </div> */}
          </div>
          <div className="row">
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input type="text" name="userName" placeholder="생년월일" />
              </div>
            </div>
            <div className="col-md-6 mb-4 pb-2">
              <div className="form-outline">
                <input type="text" id="phoneNumber" placeholder="전화번호" />
              </div>
            </div>
          </div>
          <div className="mt-4 pt-2">
            <input
              className="btn btn-primary btn-lg btn-color"
              type="submit"
              defaultValue="가입하기"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Signup;
