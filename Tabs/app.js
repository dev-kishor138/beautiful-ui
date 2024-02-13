const allLinks = document.querySelectorAll(".tabs a");
const allTabs = document.querySelectorAll(".tab-content");

allLinks.forEach((element) => {
  element.addEventListener("click", function () {
    const linkId = element.id;
    const hrefLinkClick = element.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });

    allTabs.forEach((tab) => {
      if (tab.id.includes(linkId)) {
        tab.classList.add("tab-content-active");
        generateTabItems(element, tab);
      } else {
        tab.classList.remove("tab-content-active");
      }
    });
  });
});

const tabRecords = [
  {
    src: "img/img1.jpg",
    name: "Akhsay Kumar",
    description: "Web Developer",
    type: "new",
  },
  {
    src: "img/img2.jpg",
    name: "Sharukh Khan",
    description: "Web Designer",
    type: "old",
  },
  {
    src: "img/img3.jpg",
    name: "Pori Moni",
    description: "Graphics Designer",
    type: "trend",
  },
  {
    src: "img/img4.jpg",
    name: "Olivia",
    description: "Product Designer",
    type: "new",
  },
  {
    src: "img/img5.jpg",
    name: "John Doe",
    description: "Data Analyst",
    type: "old",
  },
  {
    src: "img/img6.jpg",
    name: "Tony Stark",
    description: "Debugger",
    type: "trend",
  },
  {
    src: "img/img7.jpg",
    name: "Angel Sadia",
    description: "Executive",
    type: "trend",
  },
  {
    src: "img/img8.jpg",
    name: "Bruce Wayne",
    description: "Project Manager",
    type: "old",
  },
  {
    src: "img/img9.jpg",
    name: "Angel Maria",
    description: "Marketing Officer",
    type: "trend",
  },
  {
    src: "img/user.jpg",
    name: "Angel Pori",
    description: "Receptionist",
    type: "old",
  },
];

const filter = {
  ["new"]: (record) => record.type === "new",
  ["old"]: (record) => record.type === "old",
  ["trend"]: (record) => record.type === "trend",
};

const generateTabItems = (element, tabContent) => {
  const filterName = element.name;

  const filterFunction = filter[filterName];

  const mappedRecords = tabRecords.filter(filterFunction).map((record) => {
    return DOMPurify.sanitize(
      `<div class="record">
      <div class="avatar-wrapper">
          <img src="${record.src}" class="avatar avatar-${record.type}" alt="Profile">
      </div>
      <div class="content">
          <div class="title-description">
              <div class="title">
                  ${record.name}
              </div>
              <div class="description">
                  ${record.description}
              </div>
          </div>
          <a href="#explore-more" class="explore-button" title="Explore">
              Explore
          </a>
      </div>
  </div>`
    );
  });
  tabContent.innerHTML = mappedRecords.join("");
};

const currentHash = window.location.hash;
let activeLink = document.querySelector(".tab a");

if (currentHash) {
  const visibleHash = document.getElementById(currentHash.slice(1));
  if (visibleHash) {
    activeLink = visibleHash;
  }
}

const activeTab = document.querySelector(`#${activeLink.id}-content`);

activeLink.classList.toggle("active");
activeTab.classList.toggle("tab-content-active");

generateTabItems(activeLink, activeTab);
