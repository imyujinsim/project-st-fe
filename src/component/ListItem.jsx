import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/reset.css';
import '../style/card.css';
import axios from 'axios';

function ListItem(props) {
  const data = props.contentid;
  useEffect(() => {
    const useOnHandleClickLike = (e) => {
      e.preventDefault();

      const wishlist = [];
      if (
        wishlist.filter(
          (InwishlistItem) => InwishlistItem.id === e.target.id
        )[0]
      ) {
        e.target.classList.add('checked');
      }

      if (
        !wishlist.filter(
          (InwishlistItem) => InwishlistItem.id === e.target.id
        )[0]
      ) {
        console.log('like clicked');
        e.target.classList.add('checked');
        // 디비에 넣는 코드
      } else {
        console.log('like canceled');
        e.target.classList.remove('checked');
        // 디비에서 빼는 코드
      }
      return;
    };
  }, []);

  // function click(e) {
  //   e.preventDefault();
  //   if (e.target.classList.contains('checked')) {
  //     e.target.classList.remove('checked');
  //     // 데이터베이스에서 삭제
  //   } else {
  //     e.target.classList.add('checked');
  //     // 데이터베이스에 추가

  //     console.log(e.target.id);
  //     console.log(props.picture);
  //     console.log(props.name);
  //   }
  // }

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

        <button
          className="bookmark"
          id={data}
          onClick={(e) => {
            useOnHandleClickLike(e);
          }}
        ></button>
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

// function ListItem(props) {
//   const data = props.contentid;
//   const [isBookmarked, setIsBookmarked] = useState(false);

//   useEffect(() => {
//     // localStorage에서 북마크 상태를 가져옵니다.
//     const storedBookmark = window.localStorage.getItem(data);
//     setIsBookmarked(storedBookmark === 'true');
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
//         <button
//           className={`bookmark ${isBookmarked ? 'checked' : ''}`}
//           onClick={handleClick}
//         ></button>
//       </li>
//     </Link>
//   );
// }

// export default ListItem;
