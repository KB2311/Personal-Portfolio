class nav_link {
  constructor() {
    this.menu = document.getElementById("menu");
    this.close = document.getElementById("close");
    this.navbar = document.getElementById("navbar");
    this.navLinks = document.querySelectorAll(".nav_link");

    this.menu_open();
    this.menu_close();
    this.link_open();
  }

  menu_open() {
    this.menu.addEventListener("click", () => {
      this.navbar.classList.remove("hidden");
      this.close.classList.remove("hidden");
      this.menu.classList.add("hidden");
    });
  }
  menu_close() {
    this.close.addEventListener("click", () => {
      this.navbar.classList.add("hidden");
      this.close.classList.add("hidden");
      this.menu.classList.remove("hidden");
    });
  }
  link_open() {
    this.navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        this.navbar.classList.add("hidden");
        this.menu.classList.remove("hidden");
        this.close.classList.add("hidden");
      });
    });
  }
}

const nav = new nav_link();
