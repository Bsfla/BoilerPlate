import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/main.scss';

const LandingPage = () => {
    return (
        <div>
            <div class="main">Welcome !</div>
            <section class="buttons">
                <Link to="/register"><button class="signup">회원가입</button></Link>
                <Link to="/login"><button class="login">로그인</button></Link>
            </section>
        </div>
    )
}

export default LandingPage;