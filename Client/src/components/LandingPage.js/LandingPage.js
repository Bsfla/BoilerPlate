import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../scss/main.scss';
import axios from 'axios';

const LandingPage = () => {
    const user = useSelector(state => state.user);
    console.log(user);
    const onClickHandler = () => {
        axios.get('api/users/logout')
        .then(response => {
             if (response.data.success) window.location.replace("/")
             else alert("로그아웃에 실패했습니다");
        })
    }

    return (
        <div>
            <div class="main">Welcome !</div>
            <section class="buttons">
                {user.auth && user.auth.isAuth ?
                  <div>
                      <div>Hello !! {user.auth.name}</div>
                      <button class="logout" onClick={onClickHandler}>로그아웃</button>
                  </div>
                : <div><Link to="/register"><button class="signup">회원가입</button></Link>
                <Link to="/login"><button class="login">로그인</button></Link></div>}
            </section>
        </div>
    )
}

export default withRouter(LandingPage);