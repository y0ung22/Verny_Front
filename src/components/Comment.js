// import React from "react";
// import styled from "styled-components";

// import profile from "../assets/icons/profileBasic.svg";
// import like from "../assets/icons/like.svg";
// import edit from "../assets/icons/edit.svg";
// import del from "../assets/icons/delete.svg";

// const Comment = () => {
//   return (
//     <Wrapper>
//       <Info>
//         <Writer>
//           <Profile src={profile} />
//           <span id="name">{}</span>
//           <span id="time">{}</span>
//         </Writer>
//         <BtnBox>
//           <Btn>
//             <img src={like} />
//             <p>{}</p>
//           </Btn>
//         </BtnBox>
//       </Info>
//       <Content>{}</Content>
//     </Wrapper>
//   );
// };

// export default Comment;

// const Wrapper = styled.div`
//   width: 100%;
//   display: flex;
//   padding: 20px 32px;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 12px;
//   align-self: stretch;
// `;

// const Content = styled.div`
//   overflow: hidden;
//   color: var(--n-neutral-10, #1a1c1e);
//   text-overflow: ellipsis;
//   font-family: Pretendard;
//   font-size: 0.88rem;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 140%;
// `;

// const Info = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: flex-start;
//   align-self: stretch;
// `;

// const Writer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 4px;
//   color: var(--n-neutral-10, #1a1c1e);
//   text-align: center;
//   font-family: Pretendard;
//   font-size: 0.75rem;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 140%;
//   #time {
//     color: var(--p-primary-30, #004a77);
//   }
// `;

// const Profile = styled.img`
//   display: flex;
//   width: 24px;
//   height: 24px;
//   padding: 6px;
//   justify-content: center;
//   align-items: center;
// `;

// const BtnBox = styled.div`
//   display: flex;
//   align-items: flex-start;
//   gap: 8px;
// `;

// const Btn = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   img {
//     display: flex;
//     align-items: center;
//     gap: 8px;
//   }
//   p {
//     overflow: hidden;
//     text-overflow: ellipsis;
//     display: -webkit-box;
//     -webkit-line-clamp: 2;
//     -webkit-box-orient: vertical;
//   }
// `;
