import { sections } from "./Footer.astro";

<Fragment>
  <footer>
    <div class="content">
      <div class="icon">
        <img
          src="/accept_landing/assets/logo.svg"
          alt="logo"
          class="logo-img"
        />
      </div>
      <div class="sections">
        {sections.map((item) => (
          <Fragment>
            <a href={item.data.href}>{item.data.label}</a>
          </Fragment>
        ))}
      </div>
      <div class="links">
        <a href="">
          <Tg /> Telegram
        </a>
        <a href="">
          <Tg /> Github
        </a>
        <a href="">
          <Gmail /> GMail
        </a>
        <a href="">
          <Vk /> VK
        </a>
      </div>
    </div>
    <div class="corp">
      © 2020 - {new Date().getFullYear()} Paradise Crane Inc.
    </div>
  </footer>

  <style>{`
  footer {
    background-color: var(--light-2);
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 5rem;
    align-items: center;
  }
  :root.theme-dark footer {
    background-color: var(--dark-2);
  }

  .content {
    min-width: 60%;
    display: flex;
    flex-direction: row;
    gap: 3rem;
    margin: 0 auto;
    justify-content: space-between;
    margin-bottom: 5rem;
  }
  .sections {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .links {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  a {
    width: min-content;
    padding-bottom: 0.1rem;
    background: no-repeat 0 100%;
    background-image: var(--accept-short-gradient);
    background-size: 0% 1px;
    transition: background-size 0.4s ease;
    transition-delay: 0.2s;
  }
  a:hover {
    background-size: 100% 1px;
  }
`}</style>
</Fragment>;
