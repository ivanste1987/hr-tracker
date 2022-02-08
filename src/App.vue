<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapActions(["hendleUser"]),
  },
  mounted() {
    this.checkUser();
  },
  methods: {
    checkUser() {
      this.$store.dispatch("hendleUser");
    },
  },
};
</script>


<style lang="scss">
/* SCSS HEX */
$black-0: #0c0c0c;
$black: #1a1a1aff;
$black-2: #1f1f1fff;
$black-3: #262626ff;
$silver: #727272ff;
$white: #ffffffff;
$red: #a73a27ff;
$blue: #6cc7edff;
$purple: #9e9ef1ff;
$gradient-top-right: linear-gradient(45deg, #6cc7edff, #9e9ef1ff);
$shiny: linear-gradient(
  90deg,
  transparent,
  transparent,
  rgba(255, 255, 255, 0.5),
  transparent
);

/* SCSS RGB */
$black-rgba: rgba(26, 26, 26, 1);
$black-2-rgba: rgba(31, 31, 31, 1);
$black-3-rgba: rgba(38, 38, 38, 1);
$silver-rgba: rgba(114, 114, 114, 1);
$white-rgba: rgba(255, 255, 255, 1);
$red-rgba: rgba(167, 58, 39, 1);
$blue-rgba: rgba(108, 199, 237, 1);
$purple-rgba: rgba(158, 158, 241, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(
  0deg,
  #1a1a1aff,
  #1f1f1fff,
  #262626ff,
  #727272ff,
  #ffffffff,
  #a73a27ff,
  #6cc7edff,
  #9e9ef1ff
);
$gradient-right: linear-gradient(
  90deg,
  #1a1a1aff,
  #1f1f1fff,
  #262626ff,
  #727272ff,
  #ffffffff,
  #a73a27ff,
  #6cc7edff,
  #9e9ef1ff
);
$gradient-bottom: linear-gradient(
  180deg,
  #1a1a1aff,
  #1f1f1fff,
  #262626ff,
  #727272ff,
  #ffffffff,
  #a73a27ff,
  #6cc7edff,
  #9e9ef1ff
);
$gradient-left: linear-gradient(
  270deg,
  #1a1a1aff,
  #1f1f1fff,
  #262626ff,
  #727272ff,
  #ffffffff,
  #a73a27ff,
  #6cc7edff,
  #9e9ef1ff
);
/**Jedini koji ce trebati mislim */
$gradient-top-right: linear-gradient(45deg, #6cc7edff, #9e9ef1ff);
/********************************************************************* */
$gradient-bottom-right: linear-gradient(
  135deg,
  #1a1a1aff,
  #1f1f1fff,
  #262626ff,
  #727272ff,
  #ffffffff,
  #a73a27ff,
  #6cc7edff,
  #9e9ef1ff
);
$gradient-top-left: linear-gradient(
  225deg,
  #1a1a1aff,
  #1f1f1fff,
  #262626ff,
  #727272ff,
  #ffffffff,
  #a73a27ff,
  #6cc7edff,
  #9e9ef1ff
);
$gradient-bottom-left: linear-gradient(
  315deg,
  #1a1a1aff,
  #1f1f1fff,
  #262626ff,
  #727272ff,
  #ffffffff,
  #a73a27ff,
  #6cc7edff,
  #9e9ef1ff
);
$gradient-radial: radial-gradient(
  #1a1a1aff,
  #1f1f1fff,
  #262626ff,
  #727272ff,
  #ffffffff,
  #a73a27ff,
  #6cc7edff,
  #9e9ef1ff
);
* {
  box-sizing: border-box;
}
body,
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-size: 100%;
}
body,
textarea {
  font-family: "Quicksand", sans-serif;
  font-weight: 300;
  background: $black;
  --webkit-font-smoothing: antialiased;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 500;
  color: $white;
}

p,
a,
button,
input,
hr,
textarea,
textarea::placeholder,
label {
  color: $white;
}
i,
span {
  color: $silver;
}
a {
  text-decoration: none;
  display: block;
  cursor: pointer;
}
h1 {
  font-size: 2.25rem; // 36px
}

// @media (min-width: 414px){
//   h1 {
//     font-size: calc(2.25rem + (((100vw - 20rem) / (90 - 20))) * (4.75 - 2.25)); // fluidly scale
//     }
// }

h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.85rem;
}
h4 {
  font-size: 1.5rem;
}
h5 {
  font-size: 1.35rem;
}
h6 {
  font-size: 1.15rem;
}
p,
a,
button,
i,
span,
textarea,
textarea::placeholder input::placeholder {
  font-size: 1rem;
}

/* Scrollbar */

*::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background: $gradient-top-right;
}

*::-webkit-scrollbar-thumb:hover {
  background: $blue;
}

// *::-webkit-scrollbar-track {
//   box-shadow:
//     inset  2px  2px   4px $silver,
// }

*::-webkit-scrollbar-corner {
  background: $black;
  box-shadow: inset 2px 2px 4px black;
}
//**THE NAVIGATION */
#nav {
  // position: fixed;
  min-width: 250px;
  height: 100vh;
  padding: 0;
  background: $black-0;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    li:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $gradient-top-right;
      transform: translateX(-100%);
      transition: transform 0.7s ease;
      z-index: -2;
    }

    li {
      position: relative;
      width: 100%;
      margin: 0% auto;
      overflow: hidden;
      z-index: 2;
      i {
        margin-right: 10px;
      }

      a {
        padding: 18px;
        text-align: left;
        font-weight: 500;
        text-decoration: none;
        display: block;
        cursor: pointer;
      }
    }
    li:after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: $shiny;
      transform: translateX(-100%);
      transition-delay: 1s;
      transition: transform 1.4s ease;
      z-index: -1;
    }
  }
  .logo {
    height: 100px;
    font-size: 36px;
    margin-top: 30px;
    color: $blue;
    height: 66px;
  }
  .logo,
  p {
    padding-left: 18px;
    span {
      font-weight: bold;
    }
  }
}
li:hover {
  i {
    color: #fff;
  }
}
li:hover::before {
  transform: translateX(0%) !important;
}
li:hover::after {
  transform: translateX(15%) !important;
}

.nav-content {
  height: calc(100vh - 100px);
}
// .router-link-active {

//   i{
//     color: $blue;
//   }
//}
.router-link-exact-active {
  color: $blue;
  &:hover {
    color: $white;
  }
  i {
    color: $blue;
  }
}
//***THE NAVIGATION BAR */
.top-navigation-bar-content {
  // width: calc(100vw - 250px);
  min-height: 100px;
  // position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  background: $black-0;
  z-index: 9;
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  .path {
    display: flex;
    align-items: center;
  }
}
.user-image-button {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  figure {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: $blue;
    img {
      width: 60px;
      border-radius: 50px;
    }
  }
}

/**home component */

$gradient-top-right: linear-gradient(45deg, #6cc7edff, #9e9ef1ff);
$shiny: linear-gradient(
  90deg,
  transparent,
  transparent,
  rgba(255, 255, 255, 0.5),
  transparent
);

.home {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;

  .home-header {
    margin-bottom: 20px;
    h1 {
      font-size: 60px;
      margin: 0;
      color: $gradient-top-right;
      font-weight: bold;
    }
    p {
      color: $blue;
    }
  }
  .home-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    transform: translateX(20%);
    .singin-content {
      transition: all 0.5s ease;
      transform: translateX(-145%) scale(1);
      opacity: 1;
      z-index: -1;
    }
    .hidde-singin {
      opacity: 0;
      transform: translateX(-165%) scale(0.8);
      z-index: -1;
    }
    .singup-content {
      transform: translateX(0%) scale(1);
      transition: all 0.5s ease;
      opacity: 1;
    }
    .hidde-singup {
      transform: translateX(20%) scale(0.8);
      opacity: 0;
    }
    .singin-content,
    .singup-content {
      box-sizing: border-box;
      padding: 25px;
      background: $black-3;
      border-radius: 25px;
      header {
        h2 {
          margin: 0;
        }
      }
      form {
        margin-top: 10px;
        .input-content {
          position: relative;
          display: grid;
          grid-template-columns: 10% 90%;
          margin-bottom: 10px;
          border-bottom: 1px solid $silver;
          transition: all 0.5s ease;
          &:focus-within {
            border-bottom: 1px solid $blue;
            i {
              color: $blue;
            }
          }
          input,
          i {
            line-height: 2;
          }
          input {
            position: relative;
            background: transparent;
            border: none;
            outline: none;
            padding: 10px 16px;
          }
        }
      }
      footer {
        margin-top: 20px;
        padding: 5px 0;

        p {
          margin: 5px 0;
        }
      }
    }
  }
}
.btn {
  max-width: 150px;
  margin: 0 5px;
  padding: 10px 30px;
  background: $gradient-top-right;
  //border: 2px solid #fff;
  border: none;
  border-radius: 2.5px;
  transition: all 0.35s ease;
  pointer-events: all;
  outline: none;
  position: relative;
  overflow: hidden;
  z-index: 1;
  cursor: pointer;
}
.btn::after {
  content: "";
  position: absolute;
  background: $shiny;
  border-radius: 2.5px;
  transition: all 0.5s ease;
  pointer-events: all;
  outline: none;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  transform: translateX(100%);
  z-index: 0;
}
.btn:hover::after {
  transform: translateX(-100%);
}
.btn-link {
  border: none;
  color: $blue;
  outline: none;
  background: transparent;
  &:hover {
    cursor: pointer;
  }
}
.move-right {
  width: 500px;
  transform: translateX(-100%);
  transition: all 0.5s ease;
}
.move {
  width: 500px;
  transition: all 0.5s ease;
  animation: movePicture all ease;
}
@keyframes movePicture {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
/**.dashboard */
.dashboard {
  margin: 0;
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: row;
  // grid-template-columns: 250px calc(100% - 250px);
  // grid-template-rows: 100%;
}
.appear-enter-active,
.appear-leave-active {
  transition: transform 0.5s;
}
.appear-enter-active {
  animation: appear 0.5s ease;
}
.appear-leave-active {
  animation: appear 0.5s ease reverse;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
//**SEESION DIALOG */

.error-popup {
  position: fixed;
  width: 250px;
  height: auto;
  right: 1%;
  top: 1%;
  // transform: translate(-50% ,-50%);
  text-align: center;
  padding: 25px;
  border-radius: 25px;
  background: $black-3;
  box-shadow: 2px 2px 6px $black-2, -2px -2px 6px $black-2;
  p {
    color: #fff;
  }
}
//**oPTIONS BOX */
$black: #1a1a1aff;
$black-2: #1f1f1fff;
$black-3: #262626ff;
$silver: #727272ff;
$white: #ffffffff;
$red: #a73a27ff;
$blue: #6cc7edff;
$purple: #9e9ef1ff;
$gradient-top-right: linear-gradient(45deg, #6cc7edff, #9e9ef1ff);

.options-box {
  outline: none;
  .options-list-selected {
    display: none;
  }

  .options-select-button {
    color: white;
  }

  .options-list {
    position: absolute;
    border: 1px solid rgb(20, 20, 20);
    border-radius: 4px;
    background: $black-3;
    padding: 6px 0 6px 0;
    box-shadow: 0 0 10px rgb(20, 20, 20);

    .options-list-item {
      background: $black-2;
      padding: 4px 20px 4px 10px;
    }

    .options-list-item:hover {
      background: $gradient-top-right;
      i {
        color: $white;
      }
    }

    .options-list-item-check {
      display: inline-block;
      width: 35px;
    }

    .options-list-item-label {
      display: inline;
      color: white;
      line-height: 35px;
    }

    .options-list-separator {
      border-top: 1px solid gray;
      margin: 4px 0 4px 0;
    }
    .options-list-item-check-color-blue {
      color: $blue;
    }
  }
}
//**TASK */
$red: #a73a27ff;
.inputs-container {
  display: flex;
}
#open {
  margin: 0;
}
.red {
  background: transparent;
  outline: none;

  cursor: pointer;
  color: $red;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 5px;
  padding: 4px 10px;
  border: 1px solid $red;
  transition: all 0.5s ease;
  i {
    margin-left: 10px;
    color: $red;
  }
}
//**TASK DRAWER */
.task-drawer-content {
  width: 100%;
  height: 100%;
  background: $black-2;

  padding: 40px 50px;
  display: flex;
  justify-content: flex-start;
  align-content: center;
  .task-container {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    .input-content {
      margin: 0 0 30px;
      display: flex;
      align-items: center;
      .task-prop {
        width: 100px;
      }
      .red {
        background: transparent;
        outline: none;
        margin-left: 25px;
        cursor: pointer;
        color: $red;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        padding: 10px 10px;
        border: 1px solid $red;
        transition: all 0.5s ease;
        i {
          margin-left: 10px;
          color: $red;
        }
      }

      .path {
        margin-left: 25px;
        display: flex;
        justify-content: flex-start;
        align-items: baseline;
        a,
        p {
          color: $silver;
          font-size: 1.25rem;
          margin: 0 10px;
          transition: color 0.35s ease;
        }
        a:hover {
          color: $blue;
        }
      }
      .title {
        input {
          border: none;
          outline: none;
          background: transparent;
          font-size: 2.25rem;
          color: $white;
          padding: 10px 0;
          border: 0.5px solid transparent;
          transition: all 0.35s ease;
        }
        input::placeholder {
          font-size: 2.25rem !important;
          color: $white !important;
        }
        input:focus {
          border: 0.5px solid $blue;
          padding: 10px 0;
        }
        input:hover {
          border: 0.5px solid $blue;
          padding: 10px 0;
        }
      }
      .date {
        input {
          border: none;
          background: transparent;
          outline: none;
        }
      }
      .mark-incomplete,
      .mark-complete {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        outline: none;
        background: transparent;
        color: $silver;
        padding: 10px 10px;
        border: 1px solid $silver;
        transition: all 0.5s ease;

        i {
          margin-right: 7px;
          transition: all 0.5s ease;
        }
        span {
          transition: all 0.5s ease;
        }
      }
      .mark-complete {
        border: 1px solid $blue;
        span {
          color: $blue;
        }
        i {
          color: $blue;
        }
      }
      textarea {
        background: transparent;
        outline: none;
        border: 1px solid $silver;
        border-radius: 2.5px;
        width: 500px;
        height: 200px;
        padding: 10px;
        resize: none;
        transition: all 0.35s ease;
        &::placeholder {
          color: $white;
        }
      }
      textarea:hover {
        border: 0.5px solid $blue;
      }
      textarea:focus {
        border: 0.5px solid $blue;
        padding: 10px;
      }
    }
  }
  .task-comments {
    width: 50%;
  }
}
//**ADD TASK */
.add-task {
  .inputs {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    &:nth-child(2) {
      width: 400px;
    }
    .input-content {
      position: relative;
      display: grid;
      grid-template-columns: 100%;
      border-bottom: 1px solid $silver;
      transition: all 0.5s ease;
      margin-right: 10px;
      &:focus-within {
        border-bottom: 1px solid $blue;
        i {
          color: $blue;
        }
      }
      input,
      i {
        line-height: 2;
      }
      input {
        position: relative;
        background: transparent;
        border: none;
        outline: none;
        padding: 10px 16px;
      }
    }
  }
}
//**COMMENT LIST */
.comment-list {
  margin: 5px;
  width: 100%;
  height: 60%;
  border: 1px solid $silver;
  border-radius: 2.5px;
  transition: all .35s ease;
  &:hover{
     border: 1px solid $blue;
  }
}

//**ADD COMMENT */
.input-content {
  margin: 10px 0px;

  .comment-message {
    margin: 0px 5px;
    width: 100%;
    height: 150px;
    padding: 10px;
    border: 1px solid $silver;
    border-radius: 2.5px;
    background: transparent;
    outline: none;
    transition: color 0.35s ease;
    resize: none;
     transition: all .35s ease;
    &:hover {
      border: 1px solid $blue;
    }
    &:focus {
      border: 1px solid $blue;
    }
  }
  .btn {
    span {
      transition: color 0.35s ease;
      margin-right: 10px;
    }
    i {
      transition: color 0.35s ease;
    }
    &:hover span {
      color: #fff;
    }
    &:hover i {
      color: #fff;
    }
  }
}
//**THE COMMENT */
.coment-content {
  width: 95%;
  margin: 2.5%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 0px 2px $silver;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;

  .coment-header,
  .comment-body,
  .comment-date {
    padding: 0 20px;
    width: 100%;
  }
  .coment-header {
    p {
      color: $blue;
    }
  }
  .comment-body {
    background: $black-3;
  }
  .comment-date {
    p {
      text-align: right;
      span {
        font-size: 14px;
      }
    }
  }
}
//**THE GROUPS */
$black-2-rgba: rgba(26, 26, 26, 0.7);
$black-rgba: rgba(26, 26, 26, 0.95);
#groups {
  // overflow-y: scroll;
  display: flex;
  flex-direction: column;

  #groupsHeader {
    // position: sticky;
    // top: 0;
    // right: 0;
    // z-index: 98;
    width: 100%;
    padding: 12.5px 50px;
    background: $black-rgba;
  }
  .search-group-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // padding: 0px 25px 0px;
    .input-serach-content {
      margin-right: 30px;
      position: relative;
      display: grid;
      grid-template-columns: 10% 90%;
      margin-bottom: 10px;
      border-bottom: 1px solid $silver;
      transition: all 0.5s ease;
      &:focus-within {
        border-bottom: 1px solid $blue;
        i {
          color: $blue;
        }
      }
      input,
      i {
        line-height: 2;
      }
      input {
        position: relative;
        background: transparent;
        border: none;
        outline: none;
        padding: 10px 16px;
      }
    }
    .button-add-content {
      button {
        border: none;
        outline: none;
        background: transparent;
        i {
          color: $blue;
        }
      }
    }
  }
  .groups-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding-left: 50px;
    .group {
      width: 250px;
      padding: 25px;
      margin: 0 25px 25px 0;
      border-radius: 25px;
      background: $black-2;
      .group-id {
        h3 {
          text-transform: capitalize;
          margin: 0;
        }
        p {
          margin: 10px 0 0 0;
        }

        .members {
          display: flex;
          justify-content: flex-start;
          margin-top: 10px;
          flex-wrap: wrap;
          max-width: 100%;
          .member {
            width: 40px;
            height: 40px;
            padding: 5px;
            border-radius: 25px;
            background: $blue;
            color: #fff;
            margin: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-position: center;
            background-size: contain;
          }
        }
      }
    }
  }
  .modal-content {
    z-index: 99;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: $black-2-rgba;
    display: flex;
    justify-content: center;
    align-items: center;
    .group-modal {
      width: 500px;
      background: $black-3;
      border-radius: 25px;
      padding: 20px 20px 30px;
      position: relative;
      .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        button {
          background: transparent;
          border: none;
          outline: none;
        }
        i {
          color: $blue;
        }
      }
    }
  }
}
.button-container {
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  padding: 20px 0;
  a {
    text-decoration: none;
  }
  .red {
    background: transparent;
    border: none;
    outline: none;
    margin-left: 25px;
    cursor: pointer;
    i {
      color: $red;
    }
  }
}
.fade-enter-active {
  animation: fademodal 0.5s ease;
}
.fade-leave-active {
  animation: fademodal 0.5s ease reverse;
}
@keyframes fademodal {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
//**the group */
$gradient-top-right: linear-gradient(
  45deg,
  transparent,
  rgba(108, 199, 237, 0.7),
  rgba(158, 158, 241, 0.7)
);
$gradient-top-right-finished-task: linear-gradient(
  45deg,
  transparent,
  rgba(108, 199, 237, 0.2),
  rgba(158, 158, 241, 0.2)
);
$gradient-top-right-hover: linear-gradient(
  45deg,
  transparent,
  rgba(108, 199, 237, 0.3),
  rgba(158, 158, 241, 0.3)
);
$blue-rgba: rgba(108, 199, 237, 0.2);
$purple-rgba: rgba(158, 158, 241, 0.5);

//**The group descript */
$gradient-top-right: linear-gradient(
  45deg,
  transparent,
  rgba(108, 199, 237, 0.7),
  rgba(158, 158, 241, 0.7)
);
$gradient-top-right-finished-task: linear-gradient(
  45deg,
  transparent,
  rgba(108, 199, 237, 0.2),
  rgba(158, 158, 241, 0.2)
);
$gradient-top-right-hover: linear-gradient(
  45deg,
  transparent,
  rgba(108, 199, 237, 0.3),
  rgba(158, 158, 241, 0.3)
);
$blue-rgba: rgba(108, 199, 237, 0.2);
$purple-rgba: rgba(158, 158, 241, 0.5);
.group-details {
  padding: 0px 50px 0;
}
article {
  position: relative;
  header {
    display: grid;
    // grid-template-columns: 100px 250px 150px 150px 200px 200px;
    grid-template-columns: 10% 15% 10% 10% 20% 15% 10% 10%;
    grid-template-rows: 100%;
  }
}
.all-tasks {
  border-bottom: 1px solid $silver;
  padding: 10px 0;
  outline: none;
  &:hover {
    background: $gradient-top-right-hover;
  }
  &:focus-within {
    border-bottom: 1px solid $blue;
    background: $gradient-top-right;
  }
}
.inputs-container {
  display: grid;
  // grid-template-columns: 100px 250px 150px 150px 200px 200px 150px 150px;
    grid-template-columns: 10% 15% 10% 10% 20% 15% 10% 10%;
  grid-template-rows: 100%;
  .input-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    // border-bottom: 1px solid $silver;
    transition: all 0.5s ease;
    // margin-right: 30px;

    input,
    i {
      line-height: 2;
    }
    input {
      position: relative;
      background: transparent;
      border: none;
      outline: none;
      padding: 10px 16px;
    }
  }
}
.blue {
  color: $blue;
}
.grey {
  color: $silver;
}
.completed {
  background: $gradient-top-right-finished-task;
  .input-content {
    p,
    option {
      color: $silver;
    }
  }
}
//**the group modal */
.create-group-modal {
  z-index: 99;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  header {
    padding: 0;
    margin: 0;
    h3 {
      font-size: 2rem;
      margin: 0 0 15px 0;
    }
  }
  .content {
    display: grid;
    grid-template-columns: 75% 25%;
    grid-template-rows: 100%;
    .center {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .input-content {
        width: 90%;
        position: relative;
        display: grid;
        grid-template-columns: 10% 90%;
        border-bottom: 1px solid $silver;
        transition: all 0.5s ease;

        &:focus-within {
          border-bottom: 1px solid $blue;
          i {
            color: $blue;
          }
        }
        input,
        i {
          line-height: 2;
        }
        input {
          position: relative;
          background: transparent;
          border: none;
          outline: none;
          padding: 10px 16px;
        }
      }
    }
    .button-content {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      button {
        margin: 0;
      }
    }
  }
}

.dashboard-right {
  display: flex;
  width: 100%;
  flex-direction: column;
}

.user-image-dropdown-button {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  outline: none;
  margin-left: 20px;
  border-radius: 50%;
}

.dashboard .router-view {
  min-height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  min-width: 1090px;
}

body {
  overflow-y: hidden;
}

</style>
