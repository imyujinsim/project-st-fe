import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/reset.css';
import '../style/card.css';
import axios from 'axios';

function ListItem(props) {
  const data = props.contentid;

  const [isLoggedIn, setIsLoggedIn] = useState();

  const token = localStorage.getItem('token');

  useEffect(() => {
    // local storage 사용해서 페이지 로딩 시 북마크 되어있는 항목 표시
    setIsLoggedIn(window.localStorage.getItem('token') ? true : false);
    if (isLoggedIn) {
      const url = 'https://api.bodam.site:8080/bookmark/list';

      const callBookmark = async () => {
        await axios({
          url: url,
          method: 'post',
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        })
          .then(function (response) {
            const data = response.data;
            localStorage.setItem('bookmark', JSON.stringify(data));
          })
          .catch(function (error) {
            console.log(error);
          });
      };

      callBookmark();
    }
  }, [isLoggedIn]);

  // useEffect(() => {
  //   const jsonItems = JSON.stringify(likedItems);
  //   localStorage.setItem('bookmark', jsonItems);
  // }, [likedItems]);

  // const onHandleClickLike = (e, contentId) => {
  //   e.preventDefault();

  //   const index = likedItems.findIndex((item) => item === contentId);

  //   if (index > -1) {
  //     // 이미 좋아요 상태인 경우, likedItems 배열에서 해당 contentId를 삭제합니다.
  //     setLikedItems(likedItems.filter((item) => item === contentId));
  //     e.target.classList.remove('checked');
  //     // 서버에서 해당 contentId를 좋아요 취소 처리합니다.
  //     // await axios.delete(`/api/items/${contentId}/like`);
  //   } else {
  //     // 좋아요 상태가 아닌 경우, likedItems 배열에 해당 contentId를 추가합니다.
  //     setLikedItems([...likedItems, contentId]);
  //     e.target.classList.add('checked');
  //     // 서버에서 해당 contentId를 좋아요 처리합니다.
  //     // await axios.post(`/api/items/${contentId}/like`);
  //   }
  // };
  function onHandleClickLike(e) {
    e.preventDefault();

    const name = e.target.parentNode.childNodes[0].children[0].alt;
    const contextId = e.target.parentNode.id;
    const url = e.target.parentNode.childNodes[0].children[0].src;

    if (!e.target.classList.contains('checked')) {
      e.target.classList.add('checked');

      const bookmarkItem = {
        name: name,
        context_id: contextId,
        url: url,
      };
      const likedItems = JSON.parse(localStorage.getItem('bookmark') || '[]');
      console.log(likedItems);
      const addedList = [...likedItems].push(bookmarkItem);
      console.log(addedList);
      localStorage.setItem('bookmark', JSON.stringify(addedList));
      // 데이터베이스에 추가
    } else {
      e.target.classList.remove('checked');
      const likedItems = JSON.parse(localStorage.getItem('bookmark') || '[]');
      console.log(likedItems);
      const removedList = Array.from(likedItems).filter(
        (item) => item.context_id !== contextId
      );
      console.log(removedList);
      localStorage.setItem('bookmark', JSON.stringify(removedList));
      // 데이터베이스에서 삭제
    }
  }

  return (
    <Link
      to={`/detail/${data}`}
      onClick={() => {
        window.localStorage.setItem('detail', props.name);
        window.localStorage.setItem('contentId', data);
      }}
    >
      <li className="list-item" data-target="card" id={data}>
        <a href="">
          <img src={props.picture} alt={props.name} />
          <h3>{props.name}</h3>
        </a>

        {isLoggedIn ? (
          <button
            className="bookmark"
            id={data}
            onClick={(e) => {
              onHandleClickLike(e, data);
            }}
          ></button>
        ) : (
          <div className="empty"></div>
        )}
      </li>
    </Link>
  );
}

export default ListItem;

//-------------
// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../style/reset.css';
// import '../style/card.css';
// import axios from 'axios';

// function BookmarkAlert() {
//   return <div>로그인이 필요합니다.</div>;
// }

// function ListItem(props) {
//   const data = props.contentid;
//   const [isBookmarked, setIsBookmarked] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // localStorage에서 북마크 상태를 가져옵니다.
//     const storedBookmark = window.localStorage.getItem(data);
//     setIsBookmarked(storedBookmark === 'true');
//     // jwt 토큰이 있는지 확인합니다.
//     const jwtToken = window.localStorage.getItem('jwtToken');
//     setIsLoggedIn(!!jwtToken);
//   }, [data]);

//   function handleClick(e) {
//     e.preventDefault();
//     const newIsBookmarked = !isBookmarked;
//     setIsBookmarked(newIsBookmarked);
//     // localStorage에 북마크 상태를 저장합니다.
//     window.localStorage.setItem(data, newIsBookmarked);
//     // 데이터베이스에도 북마크 상태를 저장하면 됩니다.
//   }

//   return (
//     <Link
//       to={`/detail/${data}`}
//       onClick={() => {
//         window.localStorage.setItem('detail', props.name);
//         window.localStorage.setItem('contentId', data);
//       }}
//     >
//       <li className="list-item" data-target="card" id={data}>
//         <a href="">
//           <img src={props.picture} alt={props.name} />
//           <h3>{props.name}</h3>
//         </a>
//         {isLoggedIn ? (
//           <button
//             className={`bookmark ${isBookmarked ? 'checked' : ''}`}
//             onClick={handleClick}
//           ></button>
//         ) : (
//           <BookmarkAlert />
//         )}
//       </li>
//     </Link>
//   );
// }

// export default ListItem;
