import { version } from "./../src";

document.getElementById(
  "version"
)!.innerHTML = `Powered by <a href="https://github.com/uwdata/falcon">Falcon</a> ${version}`;

export function createElement(id: string) {
  const el = document.createElement("div");
  el.setAttribute("id", id);
  document.getElementById("app")!.appendChild(el);
  return el;
}
