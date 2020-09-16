function Element(tagName, props, children) {
  this.tagName = tagName;
  this.props = props;
  this.children = children;
}
function removeBooleanProp($target, name) {
  $target.removeAttribute(name);
  $target[name] = false;
}
function removeProp($target, name, value) {
  if (isCustomProp(name)) {
    return false;
  } else if (typeof value === "boolean") {
    removeBooleanProp($target, name);
  } else if (name === "className") {
    $target.removeAttribute("class");
  } else {
    $target.removeAttribute(name);
  }
}
function setBooleanProp($target, name, value) {
  if (value) {
    $target.setAttribute(name, value);
    $target[name] = true;
  } else {
    $target[name] = false;
  }
}

function isCustomProp(name) {
  return isEventProp(name) || name === "forceUpdate";
}

function setProp($target, name, value) {
  if (isCustomProp(name)) {
    return;
  } else if (name === "className") {
    $target.setAttribute("class", value);
  } else if (typeof value === "boolean") {
    setBooleanProp($target, name, value);
  } else {
    $target.setAttribute(name, value);
  }
}

function setProps($target, props) {
  Object.keys(props).forEach((name) => {
    setProp($target, name, props[name]);
  });
}
function updateProp($target, name, newVal, oldVal) {
  if (!newVal) {
    removeProp($target, name, oldVal);
  } else if (!oldVal || newVal !== oldVal) {
    setProp($target, name, newVal);
  }
}
function updateProps($target, newProps, oldProps) {
  const props = Object.assign({}, newProps, oldProps);
  Object.keys(props).forEach((name) => {
    updateProp($target, name, newProps[name], oldProps[name]);
  });
}

Element.prototype.render = function () {
  const el = document.createElement(this.tagName);
  const props = this.props;
  setProps(el, props);
  addEventListeners($el, node.props);
  const children = this.children || [];
  children
    .map((item) => {
      return item instanceof Element
        ? item.render()
        : document.createTextNode(item);
    })
    .forEach((item) => {
      el.appendChild(item);
    });
  return el;
};

function changed(node1, node2) {
  return (
    typeof node1 !== typeof node2 ||
    (typeof node1 === "string" && node1 !== node2) ||
    node1.tagName !== node2.tagName ||
    node.props.forceUpdate
  );
}

function updateDom(parent, newDOM, oldDOM, index = 0) {
  if (!newDOM) {
    parent.removeChild($parent.childNodes[index]);
  } else if (!oldDOM) {
    parent.appendChild(newDOM);
  } else if (changed(newDOM, oldDOM)) {
    parent.replaceChildNode(newDOM.render(), parent.childNodes[index]);
  } else if (newDOM.tagName) {
    updateProps($parent.childNodes[index], newNode.props, oldNode.props);
    const newLength = newDOM.children.length;
    const oldLength = oldDOM.children.length;
    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateDom(
        parent.childNodes[i],
        newDOM.childNodes[i],
        oldDOM.children[i],
        i
      );
    }
  }
}

function isEventProp(name) {
  return /^on/.test(name);
}
function addEventListeners($target, props) {
  Object.keys(props).forEach((name) => {
    if (isEventProp(name)) {
      $target.addEventListener(extractEventName(name), props[name]);
    }
  });
}
function extractEventName(name) {
  return name.slice(2).toLowerCase();
}
const a = new Element("ul", {}, [
  new Element("li", {}, ["item 1"]),
  new Element("li", {}, ["item 2"]),
]);

const b = new Element("ul", {}, [
  new Element("li", {}, ["item 3"]),
  new Element("li", {}, ["item 4"]),
]);

const $root = document.getElementById("root");
const $reload = document.getElementById("reload");

updateElement($root, a);
$reload.addEventListener("click", () => {
  updateElement($root, b, a);
});
