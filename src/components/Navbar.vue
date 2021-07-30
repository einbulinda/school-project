<template>
  <header :class="{ 'scrolled-nav': scrolledNav }">
    <nav>
      <div class="brand">
        <img src="@/assets/mainLogoTxtWhite.png" alt="House of Glamour Logo" />
      </div>
      <ul class="navigation" v-show="!mobile">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'About' }"
            >Our Story</router-link
          >
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Products</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Sale</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: '' }">Contacts</router-link>
        </li>
      </ul>
      <div class="icon">
        <FontAwesome
          icon="bars"
          v-show="mobile"
          @click="toggleMobileNav"
          :class="{ 'icon-active': mobileNav }"
        />
      </div>
      <transition name="mobile-nav">
        <ul class="dropdown-nav" v-show="mobileNav">
          <li>
            <router-link
              @click="toggleMobileNav"
              class="link"
              :to="{ name: 'Home' }"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileNav"
              class="link"
              :to="{ name: 'About' }"
              >Our Story</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileNav"
              class="link"
              :to="{ name: '' }"
              >Products</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileNav"
              class="link"
              :to="{ name: '' }"
              >Sale</router-link
            >
          </li>
          <li>
            <router-link
              @click="toggleMobileNav"
              class="link"
              :to="{ name: '' }"
              >Contacts</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      scrolledNav: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    toggleMobileNav() {
      this.mobileNav = !this.mobileNav;
    },

    updateScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        this.scrolledNav = true;
        return;
      }
      this.scrolledNav = false;
    },

    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 750) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
  },
};
</script>

<style lang="scss">
$base-color: #f50c0c;

header {
  background-color: rgba($color: #000000, $alpha: 0.8);
  z-index: 99;
  width: 100%;
  transition: 0.5s ease all;
  color: #fff;
  max-height: 6rem;
  height: 100%;
  position: fixed;

  nav {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 8px 0;
    transition: 0.5s ease all;
    width: 90%;
    margin: 0 auto;
    @media (min-width: 1140px) {
      max-width: 1140px;
    }
  }

  ul,
  .link {
    font-weight: 500;
    color: #fff;
    list-style-type: none;
    text-decoration: none;
  }
  li {
    text-transform: uppercase;
    padding: 16px;
    margin-left: 16px;
  }
  .link {
    font-size: 14px;
    transition: 0.5s ease all;
    padding: 4px;
    border-bottom: solid transparent;

    &:hover {
      color: $base-color;
      border-color: $base-color;
    }
  }

  .brand {
    display: flex;
    align-items: center;
    cursor: not-allowed;

    img {
      height: 5rem;
      transition: 0.5s ease-in all;
    }
  }

  .navigation {
    display: flex;
    align-items: flex-end;
    flex: 1;
    justify-content: flex-start;
  }
  .icon {
    display: flex;
    position: absolute;
    align-items: center;
    top: 0;
    right: 24px;
    height: 100%;

    svg {
      cursor: pointer;
      font-size: 3rem;
      transition: 0.5s ease all;
    }
  }
  .icon-active {
    transform: rotate(180deg);
  }

  .dropdown-nav {
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;

    li {
      margin: 1rem auto;

      .link {
        color: #3b3b3b;
      }
    }
  }
  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: 1s ease all;
  }
  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(-250px);
  }

  .mobile-nav-enter-to {
    transform: translateX(0);
  }
}
.scrolled-nav {
  background-color: #000;
  box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1),
    0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);

  nav {
    padding: 8px 0;

    .brand {
      img {
        height: 4rem;
        box-shadow: 0 4px 6px -1px rgba($color: #000000, $alpha: 0.1),
          0 2px 4px -1px rgba($color: #000000, $alpha: 0.06);
      }
    }
  }
}
</style>