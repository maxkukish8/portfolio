<template>
  <section>
    <div class="wrapper">
      <p><a href="mailto:maksimkish@gmail.com">maksimkish@gmail.com</a></p>
      <div class="icons">
        <a
          class="link"
          href="https://www.linkedin.com/in/maksym-kulish/"
          target="_blank"
          rel="noopener"
          title="Open on Linkedin"
        >
          <img class="icon"  src="@/assets/image/icons/icon-linkedin.svg" alt="" aria-hidden="true" />
          <span class="text">Linkedin</span>
        </a>
        <a
          class="link"
          href="https://www.instagram.com/maxblax/"
          target="_blank"
          rel="noopener"
          title="Open on Instagram"
        >
          <img class="icon"  src="@/assets/image/icons/icon-instagram.svg" alt="" aria-hidden="true" />
          <span class="text">Instagram</span>
        </a>
        <a
          class="link"
          href="https://www.facebook.com/kulishmaksym"
          target="_blank"
          rel="noopener"
          title="Open on Instagram"
        >
          <img class="icon"  src="@/assets/image/icons/icon-facebook.svg" alt="" aria-hidden="true" />
          <span class="text">Facebook</span>
        </a>
      </div>
    </div>
  </section>
</template>
<style lang="less" scoped>
.wrapper {
  a {
    &:hover {
      opacity: 0.4;
    }
  }

  .text {
    position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
    overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
  }

  .icon {
    width: 30px;
    margin-right: 5px;
  }
}

@media screen and (min-width: 769px) {
  .wrapper {
    .icons {
      text-align: right;
    }
  }
}
</style>