class Explorer {
  constructor(context) {
    document.body.innerHTML += '<div id="explorer" class="fadein"></div>';
    this.htmlElement = "";
    this.data = {};
    this.context = context;
    this.render(context);
  }

  render(context) {
    fetch(`/${context}/meta/data.json`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.data = data;
        data.column.forEach((category, i) => {
          this.htmlElement += `
            <svg width="100px" height="100px" fill="#bbbbbb" class="explorer-route" data-category="${category}">
              <path d="M0 0 L50 0 L50 10 L90 10 L90 80 L0 80 Z" />
              <text x="50%" y="95px" text-anchor="middle" fill="#000">${category}</text>
            </svg>
          `;
        });
      })
      .then(() => {
        document.querySelector("#explorer").innerHTML = this.htmlElement;
      })
      .then(() => {
        const folders = document.querySelectorAll(".explorer-route");
        folders.forEach((folder) => {
          folder.onclick = this.toPostsList;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  toPostsList(e) {
    let target = e.target;
    if (target.dataset.category === undefined) {
      target = target.parentNode;
    }
    const category = target.dataset.category;
    this.htmlElement = "";
    this.data.records[category].forEach((item) => {
      this.htmlElement += `
        <svg width="100px" height="100px" fill="#bbbbbb" class="explorer-route"> 
          <path d="M0 0 L50 0 L50 10 L90 10 L90 80 L0 80 Z" />
          <text x="50%" y="95px" text-anchor="middle" fill="#000">${item.title}</text>
        </svg>
      `
    });
    document.querySelector("#explorer").innerHTML = this.htmlElement;
  }
}
