import data from "../../categories/algorithm/algorithm.data.js";

class PostList {
  constructor(handleClick, w = "80%", h = "80%", mw = "80%", mh = "80%") {
    this.w = w;
    this.h = h;
    this.mw = mw;
    this.mh = mh;

    const $container = document.createElement("div");
    $container.classList.add("postlist-container");

    const $items = data.map(it => this.wrapUp(it));
    $items.forEach(item => $container.appendChild(item));

    this.$container = $container;
    this.$container.onclick = (e) => {
      if (e.target.className === "postlist-container") return;
      let t = e.target;
      while (t.dataset.id === undefined) t = t.parentNode;
      handleClick(t.dataset.id);
    }
  }

  wrapUp(_data) {
    const $wrapper = document.createElement("div");
    $wrapper.classList.add("postlist-wrapper");
    $wrapper.dataset.id = _data.id;

    $wrapper.innerHTML = `
    <div class="postlist-title">
      <img src="${_data.icon}" width="40px" alt=""/>
      <span>${_data.title}</span>
    </div>
    <div class="postlist-tags">${
      _data.tags.map(tag => `<span class="postlist-tags-item">${tag}</span>`)
    }</div>
    `;

    return $wrapper;
  }

  style() {
    return `
    .postlist-container {
      width: ${this.w};
      height: ${this.h};
      background-color: var(--bg-secondary-color);
      overflow: scroll;
      border-radius: 5px;
    }

    .postlist-wrapper {
      margin: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .postlist-title {
      display: flex;
      align-items: center;
    }
    
    .postlist-wrapper * {
      margin: 10px;
    }

    .postlist-tags {
      display: flex;
      flex-wrap: wrap;
    }

    .postlist-tags-item {
      padding: 2px 10px;
      margin: 3px;
      background-color: var(--light-color);
      border-radius: 5px;
    }

    @media screen and (max-width: 900px) {
      .postlist-wrapper {
        margin: 25px;
        flex-direction: column;
        justify-content: center;
        align-items: space-between;
      }

      .postlist-wrapper * {
        margin: 0px;
      }

      .postlist-title > * {
        margin: 10px;
      }
    }
    `;
  }

  render() {
    return this.$container;
  }
}

export default PostList;