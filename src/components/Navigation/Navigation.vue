<script setup>
import { useTicketStore } from "../../stores/Store";
import { ref } from "vue";
import i18n from "../../i18n";
import { useRouter } from "vue-router";
import Input from "../Resuable/Input/Input.vue";

const router = useRouter();

const { locale } = i18n.global;
const showList = ref(false);
const toggleList = () => {
  showList.value = !showList.value;
};

let ticketNumber = ref();
let getTicket = useTicketStore();

const saveTicketNumber = (e) => {
  e.preventDefault();
  getTicket.$patch({ ticketNumberStore: ticketNumber.value });
  ticketNumber.value = "";
  router.push("/tickets");
};

const goToHome = () => {
  router.push("/tickets");
};
</script>

<!--
    **
    **Template
-->
<template>
  <!--Desktop Mode-->
  <div class="navigation_desktop">
    <div class="container">
      <div class="row">
        <div class="nav_inside d-flex">
          <div class="col-1">
            <img @click="goToHome" src="../../../public/images/logo.png" />
          </div>
          <div class="col-3">
            <div>
              <form class="form_icon" @submit="saveTicketNumber">
                <input v-model="ticketNumber" placeholder="Search tickets" />
                <font-awesome-icon class="icon" icon="fa-solid fa-ticket" />
              </form>
            </div>
          </div>
          <div class="col-3">
            <ul class="sub_nav">
              <li>
                <router-link to="/tickets">Tickets</router-link>
              </li>
              <li>
                <router-link to="/settings">{{ $t("Settings") }}</router-link>
              </li>
            </ul>
          </div>
          <div class="right-nav">
            <ul>
              <select v-model="locale" class="form-select dropdown" aria-label="Default select example">
                <option value="en">en</option>
                <option selected value="de">de</option>
              </select>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--Navigation Mobile - Tablet-->
  <div class="mobile">
    <div class="navigation_mobile">
      <div><img @click="goToHome" src="../../../public/images/logo.png" /></div>
      <div>
        <font-awesome-icon @click="toggleList" class="icon-mobile" icon="fa-solid fa-bars" />
      </div>
    </div>
    <div v-if="showList">
      <ul class="mini-nav">
        <li>
          <form class="form_icon" @submit="saveTicketNumber">
            <input v-model="ticketNumber" placeholder="Search tickets" />
          </form>
        </li>
        <li>
          <router-link to="/tickets">Tickets</router-link>
        </li>
        <li>
          <router-link to="/settings">{{ $t("Settings") }}</router-link>
        </li>
        <select v-model="locale" class="form-select dropdown_mobile" aria-label="Default select example">
          <option value="en">en</option>
          <option selected value="de">de</option>
        </select>
      </ul>
    </div>
  </div>
</template>

<!--
    **
    **Styles
-->
<style scoped lang="scss">
@import "../../sass/Basic.scss";
@import "../../sass/Variable.scss";

//Navigation Desktop mode
.navigation_desktop {
  height: 10vh;
  background-color: $color_gitlab_dark_purple;
  @include flex-col-ctr;
  font-family: $light;

  .nav_inside {
    .form_icon {
      position: relative;
      @include flex-col-ctr;
      margin-top: 0.6rem;

      .icon {
        position: absolute;
        right: 10px;
        color: $color_white;
      }
    }

    img {
      width: 90px;
      margin-top: 0.2rem;
      cursor: pointer;
    }

    input {
      margin-top: -0.2rem;
      padding: 0.3rem 1rem;
      outline: none;
      border-radius: 5px;
      background-color: transparent;
      border: 1px solid $color_white;
      color: $color_white;
      font-size: 14px;
      width: 100%;
    }

    ul {
      margin-top: 0.6rem;
      @include flex-col-ctr;

      li {
        font-family: Regular;
        margin-right: 1rem;
        color: $color_white;

        a {
          color: $color_white;
        }
      }
    }

    .right-nav {
      margin-left: auto;
    }
  }
}

/* Navigation mobile */

.navigation_mobile {
  background-color: $color_gitlab_dark_purple;
  @include flex-between;
  padding: 0rem 1.5rem;

  .icon-mobile {
    color: $color_white;
    font-size: 20px;
  }

  img {
    width: 100px;
  }
}

.mini-nav {
  padding: 2rem;

  li {
    padding: 0.4rem 0rem;
    font-size: 20px;

    input {
      padding: 0rem 1rem;
      outline: none;
      border-radius: 5px;
      background-color: transparent;
      border: 1px solid $color_white;
      color: $color_white;
      font-size: 16px;
      width: 60%;
    }

    a {
      color: $color_white;
    }
  }

  background-color: $color_gitlab_dark_purple;
  color: $color_white;
}

.dropdown,
.dropdown_mobile {
  width: 100% !important;
  background-color: transparent !important;
  color: $color_gitlab_orange;
}

.dropdown_mobile {
  width: 10% !important;
}

/*Breakpoints */

@media screen and (max-width: $bp-desktop-small) {
  .navigation_desktop {
    display: none;
  }
}

@media screen and (min-width: $bp-desktop-small) {
  .mobile {
    display: none;
  }
}

@media screen and (min-width: $bp-desktop-small) and (max-width: $bp-desktop) {
  .form_icon {
    margin-left: 1rem;
  }
}
</style>
