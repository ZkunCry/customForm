function template(data = {}) {
  const email = data.email ?? "";
  const password = data.password ?? "";
  const formRemember = data.formRemember ?? "";
  const submitBtn = data.button ?? "";
  return `
        ${
          email
            ? `<div class="form-group">
        <label for="exampleInputEmail" class="form-control__label" for=""
          >${email.title ?? "Email address"}</label
        >
        <input
          type="email"
          class="form-control"
          name="email"
          id="exampleInputEmail"
          placeholder = "${email.placeholder ?? "Email or username"}"
        />
      </div>`
            : ""
        }
        ${
          password
            ? `<div class="form-group">
        <label class="form-control__label" for="exampleInputPassword" 
          >${password.title ?? "Email or username"}</label
        >
        <input
          type="password"
          class="form-control"
          name="password"
          autocomplete="off"
          id="userPassword"
          placeholder = "${password.placeholder ?? "Password"}"
        />
      </div>`
            : ""
        }
        ${
          formRemember
            ? `<div class="form-remember">
            ${
              formRemember.checkbox
                ? `<div class="form-check">
            <input type="checkbox" />
            <label for="">Remember me</label>
          </div>`
                : ""
            }
          ${
            formRemember.forgot
              ? `<a class="form-check__password" href="">Forgot password?</a>`
              : ""
          }
      </div>`
            : ""
        }
        ${
          submitBtn
            ? `<button class="btn-submit" type="submit" onclick = "${
                submitBtn.handler
              }">${submitBtn.text ?? "sign in"}</button>`
            : ""
        }
    
  `;
}

export class Form {
  constructor(selector, options) {
    this.el = document.querySelector(selector);
    this.options = options;
    this.#render();
  }
  #render() {
    const DEFAULT_WIDTH = "500px";
    this.el.style.width = this.options.width ?? DEFAULT_WIDTH;
    this.el.innerHTML = template(this.options);
  }
  get email() {
    return this.options.email ?? "";
  }
  get password() {
    return this.options.password ?? "";
  }
  destroy() {
    this.el.parentNode.removeChild(this.el);
  }
}
