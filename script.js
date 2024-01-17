function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// circle progress
const scrolled = false;

$(window).on("scroll", function () {
  if ($("html,body").scrollTop() >= 800 && scrolled == false) {
    $(".html5.circle").circleProgress({
      value: 0.9,
      fill: {
        gradient: [
          ["#F35825", 0.3],
          ["#F67925", 0.7],
        ],
        gradientAngle: Math.PI / 4,
      },
    });

    $(".css3.circle").circleProgress({
      value: 0.9,
      fill: {
        gradient: [
          ["#007BC9", 0.3],
          ["#008ED8", 0.7],
        ],
        gradientAngle: Math.PI / 4,
      },
    });

    $(".js.circle").circleProgress({
      value: 0.7,
      fill: {
        gradient: [
          ["#F78224", 0.3],
          ["#FB9E21", 0.7],
        ],
        gradientAngle: Math.PI / 4,
      },
    });

    $(".ps.circle").circleProgress({
      value: 0.95,
      fill: {
        gradient: [
          ["#007BC9", 0.3],
          ["#008ED8", 0.7],
        ],
        gradientAngle: Math.PI / 4,
      },
    });

    $(".illust.circle").circleProgress({
      value: 0.9,
      fill: {
        gradient: [
          ["#F78224", 0.3],
          ["#FB9E21", 0.7],
        ],
        gradientAngle: Math.PI / 4,
      },
    });

    $(".react.circle").circleProgress({
      value: 0.7,
      fill: {
        gradient: [
          ["#1f9513", 0.3],
          ["#28bb18", 0.7],
        ],
        gradientAngle: Math.PI / 4,
      },
    });
    scrolled = true;
  } else if ($(window).scrollTop() == 0) {
    scrolled = false;
  }
}); //end scroll animate event

/***********************
  Menu Component
 ***********************/

const Menu = (props) => {
  return React.createElement(
    "div",
    { className: `menu-container ${props.showMenu}` },
    React.createElement("div", { className: "overlay" }),
    React.createElement(
      "div",
      { className: "menu-items" },
      React.createElement(
        "ul",
        null,
        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#welcome-section", onClick: props.toggleMenu },
            "HOME"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#about", onClick: props.toggleMenu },
            "ABOUT"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#projects", onClick: props.toggleMenu },
            "PORTFOLIO"
          )
        ),

        React.createElement(
          "li",
          null,
          React.createElement(
            "a",
            { href: "#contact", onClick: props.toggleMenu },
            "CONTACT"
          )
        )
      ),

      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Nav Component
 ***********************/

const Nav = (props) => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      "nav",
      { id: "navbar" },
      React.createElement(
        "div",
        { className: "nav-wrapper" },
        React.createElement(
          "p",
          { className: "brand" },
          "cool",

          React.createElement("strong", null, " portfolio")
        ),

        React.createElement(
          "a",
          {
            onClick: props.toggleMenu,
            className:
              props.showMenu === "active"
                ? "menu-button active"
                : "menu-button",
          },

          React.createElement("span", null)
        )
      )
    )
  );
};

/***********************
  Header Component
 ***********************/

const Header = (props) => {
  return React.createElement(
    "header",
    { id: "welcome-section" },
    React.createElement("div", { className: "forest" }),
    React.createElement("div", { className: "silhouette" }),
    React.createElement("div", { className: "moon" }),
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h1",
        null,
        React.createElement(
          "span",
          { className: "line" },
          "안녕하세요 정시원입니다."
        ),
        React.createElement("span", { className: "line" }, "Web designer"),
        React.createElement(
          "span",
          { className: "line" },
          React.createElement("span", { className: "color" }, "&"),
          " publisher"
        )
      ),

      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement("a", { href: "#projects" }, "my portfolio"),
        React.createElement(
          "a",
          { href: "#contact", className: "cta" },
          "get in touch"
        )
      )
    )
  );
};

/***********************
  About Component
 ***********************/

const About = (props) => {
  return React.createElement(
    "section",
    { id: "about" },
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement(
        "article",
        null,
        React.createElement(
          "div",
          { className: "title" },
          React.createElement("h3", null, "About me"),
          React.createElement("p", { className: "separator" })
        ),

        React.createElement(
          "div",
          { className: "desc full about-profile" },
          // React.createElement(
          //   "h4",
          //   { className: "subtitle" },
          //   "웹 아티스트, 프로젝트에 활력을 불어넣겠습니다."
          // ),
          React.createElement(
            "div",
            { className: "profile" },
            React.createElement(
              "div",
              null,
              React.createElement("img", { className: "profile-img" }),
              React.createElement(
                "h4",
                { className: "text-color-white" },
                "Profile"
              ),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "Name"),
                  React.createElement("p", null, "정시원")
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "Education"),
                  React.createElement("p", null, "홍익대학원 조각과 졸업")
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "Email"),
                  React.createElement("p", null, "coolqha@naver.com")
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "github"),
                  React.createElement("p", null, "https://github.com/cool-jung")
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "Personality"),
                  React.createElement("p", null, "#성실 #쾌활 #긍정")
                )
              )
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "h4",
                { className: "text-color-white" },
                "Career"
              ),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "2023.01 ~ ing"),
                  React.createElement("p", null, "미술학원 강사")
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "2023.09 ~ 2023.12"),
                  React.createElement("p", null, "성재중학교 디지털 강사")
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "2019.12 ~ 2022.12"),
                  React.createElement(
                    "p",
                    null,
                    "Tour marketing korea IT기획팀 퍼블리셔"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "2020.10 ~ 2020.12"),
                  React.createElement(
                    "p",
                    null,
                    "Aloha 서버 모니터링 외부 프로젝트 / smile shark"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "2016.07 ~ 2016.07"),
                  React.createElement("p", null, "한솔교육 한글&수학 교사")
                )
              ),
              React.createElement(
                "h4",
                { className: "text-color-white" },
                "Certificate"
              ),
              React.createElement(
                "ul",
                null,
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "2023"),
                  React.createElement(
                    "p",
                    null,
                    "미술심리상담사 1급/ 노인미술지도사 1급/ 방과후아동미술지도사 1급"
                  )
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "2019"),
                  React.createElement("p", null, "웹디자인기능사")
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "2019"),
                  React.createElement("p", null, "GTQ 1급")
                ),
                React.createElement(
                  "li",
                  null,
                  React.createElement("p", null, "2017"),
                  React.createElement("p", null, "MOS (Excel,Powerpoint)")
                )
              )
            )
          )
        )
      ),
      React.createElement(
        "article",
        null,
        React.createElement(
          "div",
          { className: "title" },
          React.createElement("h3", null, "Skill"),
          React.createElement("p", { className: "separator" })
        ),
        React.createElement(
          "ul",
          { className: "desc progress-container" },
          React.createElement(
            "li",
            { className: "skill_graph" },

            React.createElement("label", null, "PHOTOSHOP"),
            React.createElement(
              "div",
              { className: "ps circle" },
              React.createElement("strong", null)
            )
          ),
          React.createElement(
            "li",
            { className: "skill_graph" },

            React.createElement("label", null, "ILLUSTRATOR"),
            React.createElement(
              "div",
              { className: "illust circle" },
              React.createElement("strong", null)
            )
          ),
          React.createElement(
            "li",
            { className: "skill_graph" },

            React.createElement("label", null, "HTML5"),
            React.createElement(
              "div",
              { className: "html5 circle" },
              React.createElement("strong", null)
            )
          ),
          React.createElement(
            "li",
            { className: "skill_graph" },

            React.createElement("label", null, "CSS3"),
            React.createElement(
              "div",
              { className: "css3 circle" },
              React.createElement("strong", null)
            )
          ),
          React.createElement(
            "li",
            { className: "skill_graph" },

            React.createElement("label", null, "JAVASCRIPT"),
            React.createElement(
              "div",
              { className: "js circle" },
              React.createElement("strong", null)
            )
          ),
          React.createElement(
            "li",
            { className: "skill_graph" },

            React.createElement("label", null, "REACT"),
            React.createElement(
              "div",
              { className: "react circle" },
              React.createElement("strong", null)
            )
          )
        )
      ),
      React.createElement(
        "article",
        null,
        React.createElement(
          "div",
          { className: "title" },
          React.createElement("h3", null, "Vision"),
          React.createElement("p", { className: "separator" })
        ),

        React.createElement(
          "div",
          { className: "desc" },
          React.createElement(
            "p",
            null,
            `안녕하세요 창의적인 아이디어가 꿈틀대고 있는 정시원입니다.
            디자인에 대한 무한한 열정과 예술적인 감각을 바탕으로 사용자 중심의 독특하고 매력적인 웹 경험을 만들어내는 것을 목표로 하고 있습니다.
            인내와 성실함이라는 무기와 변화에 대처하는 노력하는 자세로 무장되어 있습니다.
            시시각각 바뀌는 트렌드에 따라 끝없이 탐구하고 더 나아가 한발짝 앞서가는 인재가 되도록 노력하고 있습니다.
            `
          ),
          React.createElement(
            "p",
            null,
            `또한 사용자 경험을 고려하여 기능성과 아름다움을 조화시키는 것을 중요시하고 있습니다. 뿐만 아니라, 웹 디자이너로서의 업무에서는 팀과의 원활한 소통과 협업이 중요하다고 생각합니다. 제 강점은 다양한 배경과 전문성을 갖춘 팀원들과 협력하여 프로젝트를 성공적으로 완료하는 데에 있습니다. 나날이 발전하는 웹 디자인 분야에서 끊임없이 새로운 것을 배우고, 클라이언트와의 긍정적인 관계를 유지하는 것을 목표로 하고 있습니다. 당사의 프로젝트에 참여하여 독창적이고 효과적인 디자인을 제공할 기회를 기다리고 있습니다. 함께 더 나은 웹 경험을 만들어 나가는 여정에 참여하길 기대합니다!
            `
          )
        ),
        React.createElement(
          "div",
          { className: "button" },
          React.createElement(
            "a",
            {
              href: "https://www.notion.so/c8cf045a9973472a82fc266352486994?pvs=4",
              className: "cta",
            },
            "View Resume"
          )
        )
      )
    )
  );
};

/***********************
  Project Component
 ***********************/

const MediaDesign = (props) => {
  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return React.createElement(
    "li",
    {
      className: "media-design",
      href: link,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    React.createElement("img", {
      className: "project-image",
      src: props.img,
      alt: "Screenshot of " + props.title,
    })
  );
};

const Project = (props) => {
  const tech = {
    sass: "fab fa-sass",
    css: "fab fa-css3-alt",
    js: "fab fa-js-square",
    react: "fab fa-react",
    vue: "fab fa-vuejs",
    d3: "far fa-chart-bar",
    node: "fab fa-node",
    bootstrap: "fab fa-bootstrap",
  };

  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return React.createElement(
    "div",
    { className: "project" },
    React.createElement(
      "a",
      {
        className: "project-link",
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      },
      React.createElement("img", {
        className: "project-image",
        src: props.img,
        alt: "Screenshot of " + props.title,
      })
    ),

    React.createElement(
      "div",
      { className: "project-details" },
      React.createElement(
        "div",
        { className: "project-tile" },
        React.createElement(
          "p",
          { className: "icons" },
          props.tech
            .split(" ")
            .map((t) =>
              React.createElement("i", { className: tech[t], key: t })
            )
        ),

        props.title,
        " "
      ),

      props.children,
      React.createElement(
        "div",
        { className: "buttons" },
        React.createElement(
          "a",
          { href: repo, target: "_blank", rel: "noopener noreferrer" },
          "before revised"
        ),

        React.createElement(
          "a",
          { href: link, target: "_blank", rel: "noopener noreferrer" },
          "Try it Live "
        )
      )
    )
  );
};

/***********************
  Projects Component
 ***********************/

const Projects = (props) => {
  return React.createElement(
    "section",
    { id: "projects" },
    React.createElement(
      "div",
      { className: "projects-container" },
      React.createElement(
        "div",
        { className: "heading" },
        React.createElement("h3", { className: "title" }, "Visual Design"),
        React.createElement("p", { className: "separator" })
      ),

      React.createElement(
        "article",
        { className: "carousel" },
        React.createElement(
          "ul",
          { className: "carousel__viewport" },
          React.createElement(
            "li",
            {
              id: "carousel__slide1",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide2",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide3",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide4",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide5",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide6",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide7",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide8",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide9",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide10",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide11",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide12",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide13",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide14",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide15",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide16",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide17",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide19",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide20",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide21",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide22",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          ),
          React.createElement(
            "li",
            {
              id: "carousel__slide23",
              tabindex: 0,
              className: "carousel__slide",
            },
            React.createElement("div", { className: "carousel__snapper" })
          )
        )
      ),

      React.createElement(
        "div",
        { className: "button" },
        React.createElement(
          "a",
          {
            href: "https://www.behance.net/3ed6cbed",
            className: "cta",
            target: "_blank",
          },
          "View more"
        )
      ),

      React.createElement(
        "div",
        { className: "projects-wrapper" },
        React.createElement(
          "div",
          { className: "heading" },
          React.createElement("h3", { className: "title" }, "My Works"),
          React.createElement("p", { className: "separator" })
        ),
        React.createElement(
          Project,
          {
            title: "Alamo rentacar site",
            img: "img/alamo.png",
            tech: "html css js node",
            link: "https://www.alamo.co.kr/",
            repo: "https://drive.google.com/file/d/1EKHsbkw_zQO7CZRRSwWDYYFTVsX5BnZg/view?usp=sharing",
          },

          React.createElement(
            "small",
            null,
            "HTML, CSS, JS + jQuery를 사용하였습니다."
          ),

          React.createElement(
            "p",
            null,
            "해외를 여행하는 국내 고객을 대상으로 서비스하는 렌터카 예약 사이트로 메인페이지를 리뉴얼하고 전체 페이지를 반응형으로 마이그레이션하였습니다."
          )
        ),

        React.createElement(
          Project,
          {
            title: "Cruise site",
            img: "img/cruise.png",
            tech: "js node css",
            link: "https://rccl.kr/",
            repo: "https://drive.google.com/file/d/1cmQfcvhK9Cz1NLq_5mVYzl0ph3bdN7F4/view?usp=sharing",
          },

          React.createElement(
            "small",
            null,
            "HTML, CSS, Bootstrap, JS + jQuery를 사용하였습니다."
          ),

          React.createElement(
            "p",
            null,
            "로얄캐리비안/셀러브리티/실버시크루즈의 한국 총판으로 홍보 및 마케팅, 영업 예약 서비스를 제공하는 크루즈 예약 사이트로 반응형으로 마이그레이션 하였습니다. "
          )
        ),

        React.createElement(
          Project,
          {
            title: "Aloha Server monitoring service",
            img: "img/aloha.png",
            tech: "js node css",
            link: "http://3.34.251.68/main/login",
          },

          React.createElement(
            "small",
            null,
            "HTML, CSS, Bootstrap, JS을 사용하였습니다."
          ),
          React.createElement(
            "p",
            null,
            "서버 모니터링 및 장애알림서비스로 로고 디자인을 포함해 전반적인 디자인과 프론트를 맡아 작업하였습니다. 서버와 관련된 다양한 관리 업무와 각종 장애 발생 시 카카오톡, 전화, 메일 등으로 장애 알림을 제공합니다."
          )
        ),

        // React.createElement(
        //   Project,
        //   {
        //     title: "random excuse generator",
        //     img: "work9.png",
        //     tech: "react node css",
        //     link: "",
        //     repo: "",
        //   },

        //   React.createElement(
        //     "small",
        //     null,
        //     "Node, React + React-router-dom, Ant-Design, JS, CSS를 사용하였습니다."
        //   ),
        //   React.createElement(
        //     "p",
        //     null,
        //     "이 토이 프로젝트는 단순한 변명 생성기입니다. 사용자가 임의의 변명을 얻을 수 있는 간단한 시스템입니다. 리액트와 리액트 라우트, 앤트 디자인을 주로 사용하였습니다. 사용자는 랜덤 변명 생성기를 통해 특정 범주에 대한 임의의 변명을 얻을 수 있습니다."
        //   )
        // ),

        React.createElement(
          Project,
          {
            title: "Cruise renewal site",
            img: "img/renewal_cruise.png",
            tech: "js node css",
            link: "http://jcool486.dothome.co.kr/cruiseRenewalPage/",
            repo: "",
          },

          React.createElement(
            "small",
            null,
            "HTML, CSS, Bootstrap, JS를 사용하였습니다."
          ),
          React.createElement(
            "p",
            null,
            `TMK의 크루즈 사이트의 리뉴얼을 목표로 wordpress template을 활용해 제작한 크루즈 예약 사이트입니다.
            로그인 모달과 반응형도 고려해 제작하였습니다.`
          )
        ),

        // React.createElement(
        //   Project,
        //   {
        //     title: "Cat meme maker.",
        //     img: "work11.png",
        //     tech: "react js node css",
        //     link: "",
        //     repo: "",
        //   },

        //   React.createElement(
        //     "small",
        //     null,
        //     "Node, React, HTML, CSS, Bootstrap, JS를 사용하였습니다."
        //   ),
        //   React.createElement(
        //     "p",
        //     null,
        //     "이 토이 프로젝트는 Open api에 있는 고양이 사진을 이용해 리액트로 제작한 고양이 밈을 만드는 사이트입니다."
        //   )
        // ),

        // React.createElement(
        //   Project,
        //   {
        //     title: "cocacola.",
        //     img: "img/cocacola.jpg",
        //     tech: "js css",
        //     link: "",
        //     repo: "https://drive.google.com/file/d/14HsJ8hSkzWP_aTEMsOIOyTCEpMlFADfN/view?usp=sharing",
        //   },

        //   React.createElement(
        //     "small",
        //     null,
        //     "HTML, CSS, Bootstrap, JS + jQuery를 사용하였습니다."
        //   ),
        //   React.createElement(
        //     "p",
        //     null,
        //     "코카콜라 사이트를 리디자인하여 와이어프레임, 프로토타입 부터 디자인하고 퍼블리싱하였습니다."
        //   )
        // ),

        React.createElement(
          Project,
          {
            title: "morocco",
            img: "img/morocco.jpg",
            tech: "js css",
            link: "https://cool-jung.github.io/morocco/",
            repo: "https://cool-jung.github.io/morocco-proposal/",
          },

          React.createElement(
            "small",
            null,
            "HTML, CSS, JS + jQuery를 사용하였습니다."
          ),
          React.createElement(
            "p",
            null,
            "여행 소개 사이트를 목표로 모로코라는 나라의 문화와 대표 관광지를 슬라이드하여 와이어프레임, 프로토타입 부터 디자인하고 퍼블리싱하였습니다."
          )
        ),

        // React.createElement(
        //   Project,
        //   {
        //     title: "innisfree",
        //     img: "img/innisfree.jpg",
        //     tech: "js css",
        //     link: "",
        //     repo: "https://drive.google.com/file/d/1yFkAaqRkJ-RwfjZJbhmI9KI6jzy6gsR6/view?usp=drive_link",
        //   },

        //   React.createElement(
        //     "small",
        //     null,
        //     "HTML, CSS, JS + jQuery를 사용하였습니다."
        //   ),
        //   React.createElement(
        //     "p",
        //     null,
        //     "A treemap diagram representing groups of pledges and sales from a particular category."
        //   )
        // ),

        React.createElement(
          Project,
          {
            title: "starbucks",
            img: "img/starbucks.jpg",
            tech: "js css",
            link: "https://cool-jung.github.io/starbucks/",
          },

          React.createElement(
            "small",
            null,
            "HTML, CSS, JS + jQuery를 사용하였습니다."
          ),
          React.createElement(
            "p",
            null,
            "웹 접근성, 시멘틱 페이지, HTML5 문법을 준수하여 HTML5, CSS3 웹 표준 마크업하였습니다."
          )
        ),

        React.createElement(
          Project,
          {
            title: "topcit",
            img: "img/topcit.jpg",
            tech: "js css",
            link: "https://cool-jung.github.io/topcit/",
          },

          React.createElement(
            "small",
            null,
            "HTML, CSS, JS + jQuery를 사용하였습니다."
          ),
          React.createElement(
            "p",
            null,
            "웹 접근성, 시멘틱 페이지, HTML5 문법을 준수하여 HTML5, CSS3 웹 표준 마크업하였습니다."
          )
        )
      )
    )
  );
};

/***********************
  Contact Component
 ***********************/

const Contact = (props) => {
  return React.createElement(
    "section",
    { id: "contact" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "heading-wrapper" },
        React.createElement(
          "div",
          { className: "heading" },
          React.createElement(
            "p",
            { className: "title" },
            React.createElement("br", null),
            "Contact me"
          ),

          React.createElement("p", { className: "separator" }),
          React.createElement(
            "p",
            { className: "subtitle" },
            "",
            React.createElement(
              "span",
              { className: "mail" },
              "tldnjs486",

              React.createElement("i", { className: "fas fa-at at" }),
              "gmail",

              React.createElement("i", { className: "fas fa-circle dot" }),
              "com"
            ),
            "으로 이메일을 보내주세요"
          )
        ),

        React.createElement(SocialLinks, null)
      ),

      React.createElement(
        "a",
        {
          href: "https://open.kakao.com/o/s1OxWb0f",
          title: "웹디자이너 정시원 오픈채팅방",
        },

        " ",
        React.createElement("img", {
          src: "img/kakaoopenchat.png",
        })
      )
    )
  );
};

/***********************
  Footer Component
 ***********************/

const Footer = (props) => {
  return React.createElement(
    "footer",
    null,
    React.createElement(
      "div",
      { className: "wrapper" },
      React.createElement("h3", null, "THANKS FOR VISITING"),
      React.createElement(
        "p",
        null,
        "\xA9 ",
        new Date().getFullYear(),
        " siwon cheong"
      ),
      React.createElement(SocialLinks, null)
    )
  );
};

/***********************
  Social Links Component
 ***********************/

const SocialLinks = (props) => {
  return React.createElement(
    "div",
    { className: "social" },
    React.createElement(
      "a",
      {
        id: "profile-link",
        href: "https://github.com/cool-jung",
        target: "_blank",
        rel: "noopener noreferrer",
        title: "Link to author's GitHub Profile",
      },

      " ",
      React.createElement("i", { className: "fab fa-github" })
    )
  );
};

/***********************
  Main Component
 ***********************/

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      menuState: false,
    });
    _defineProperty(
      this,
      "toggleMenu",

      () => {
        this.setState((state) => ({
          menuState: !state.menuState
            ? "active"
            : state.menuState === "deactive"
            ? "active"
            : "deactive",
        }));
      }
    );
  }

  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(Menu, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }),
      React.createElement(Nav, {
        toggleMenu: this.toggleMenu,
        showMenu: this.state.menuState,
      }),
      React.createElement(Header, null),
      React.createElement(About, null),
      React.createElement(Projects, null),
      React.createElement(Contact, null),
      React.createElement(Footer, null)
    );
  }

  componentDidMount() {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const silhouette = document.querySelector(".silhouette");
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
        header.style.visibility =
          header.style.visibility === "hidden" && "visible";
      else header.style.visibility = "hidden";

      if (scrollPos + 100 >= window.innerHeight)
        navbar.classList.add("bg-active");
      else navbar.classList.remove("bg-active");
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    })();
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("app"));
