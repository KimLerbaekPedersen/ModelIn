const nav = document.querySelector('#navbar');

nav.innerHTML += `<header id="nav">
<div class="nav-container">
    <a href="../../html/index.html"><img class="Logo" src="../../assets/img/logo-modelin.png" alt="logo ModelIn"></a>
    <nav id="menu">
        <ul>
            <li><a href="../../html/index.html">Home</a></li>
            <li><a href="../../html/portfolioHtml/portfolio.html">Portfolio</a></li>
            <li><a href="../../html/about.html">About Me</a></li>
            <li><a href="../../html/contact.html">Contact</a></li>
            <a href='https://www.instagram.com/'<i class="fa-brands insta-nav fa-instagram fa-2x"></i></a>
            <a href='https://www.facebook.com/'<i class="fa-brands face-nav fa-facebook fa-2x"></i></a>
        </ul>
    </nav>
    <div onclick="menuShow()" id="burger">
        <svg onclick="burgerMenuColor()" id="burgerColorChange" viewBox="0 0 448 512" title="bars">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
        </svg>
    </div>
</div>
</header>`