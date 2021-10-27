"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[399],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3931:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={},l="Getting started",u={unversionedId:"contributing/getting-started",id:"contributing/getting-started",isDocsHomePage:!1,title:"Getting started",description:"testy two",source:"@site/docs/contributing/getting-started.md",sourceDirName:"contributing",slug:"/contributing/getting-started",permalink:"/docs.opensauced.pizza/contributing/getting-started",editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/docs/contributing/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"What is Open Sauced ?",permalink:"/docs.opensauced.pizza/"},next:{title:"Code of Conduct",permalink:"/docs.opensauced.pizza/contributing/code-of-conduct"}},p=[{value:"Recommended Communication Style",id:"recommended-communication-style",children:[],level:2},{value:"Setup (forks are preferred).",id:"setup-forks-are-preferred",children:[],level:2},{value:"Building",id:"building",children:[],level:2},{value:"Testing",id:"testing",children:[],level:2},{value:"Pull Requests",id:"pull-requests",children:[{value:"PR Validation",id:"pr-validation",children:[],level:3},{value:"Work in progress",id:"work-in-progress",children:[],level:3}],level:2},{value:"Issues",id:"issues",children:[],level:2},{value:"Triage Team",id:"triage-team",children:[],level:2},{value:"Funding",id:"funding",children:[],level:2},{value:"Community",id:"community",children:[],level:2},{value:"Coding Tips",id:"coding-tips",children:[],level:2},{value:"License",id:"license",children:[],level:2}],c={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"testy two"),(0,o.kt)("p",null,"Contributions are always welcome, no matter how large or small. Before contributing,\nplease read the ",(0,o.kt)("a",{parentName:"p",href:"/docs.opensauced.pizza/contributing/code-of-conduct"},"code of conduct"),"."),(0,o.kt)("p",null,"Some thoughts to help you contribute to this project"),(0,o.kt)("h2",{id:"recommended-communication-style"},"Recommended Communication Style"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Always leave screenshots for visuals changes"),(0,o.kt)("li",{parentName:"ol"},"Always leave a detailed description in the Pull Request. Leave nothing ambiguous for the reviewer."),(0,o.kt)("li",{parentName:"ol"},"Always review your code first. Do this by leaving comments in your coding noting questions, or interesting things for the reviewer."),(0,o.kt)("li",{parentName:"ol"},"Always communicate. Whether it is in the issue or the pull request, keeping the lines of communication helps everyone around you.")),(0,o.kt)("h2",{id:"setup-forks-are-preferred"},"Setup (forks are preferred)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/<your-name>/open-sauced\ncd open-sauced\nnpm ci\n")),(0,o.kt)("h2",{id:"building"},"Building"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\n")),(0,o.kt)("h2",{id:"testing"},"Testing"),(0,o.kt)("p",null,"For running the test suite, use the following command. Since the tests run in watch mode by default, some users may encounter errors about too many files being open. In this case, it may be beneficial to ",(0,o.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/install.html"},"install watchman"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# the tests will run in watch mode by default\nnpm test\n")),(0,o.kt)("h2",{id:"pull-requests"},"Pull Requests"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"We actively welcome your pull requests, however linking your work to an existing issue is preferred."))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fork the repo and create your branch from ",(0,o.kt)("inlineCode",{parentName:"li"},"main"),"."),(0,o.kt)("li",{parentName:"ol"},"Name your branch something that is descriptive to the work you are doing. i.e. adds-new-thing or fixes-mobile"),(0,o.kt)("li",{parentName:"ol"},"If you've added code that should be tested, add tests."),(0,o.kt)("li",{parentName:"ol"},"If you've changed APIs, update the documentation."),(0,o.kt)("li",{parentName:"ol"},"If you make visual changes, screenshots are required."),(0,o.kt)("li",{parentName:"ol"},"Ensure the test suite passes."),(0,o.kt)("li",{parentName:"ol"},"Make sure you address any lint warnings."),(0,o.kt)("li",{parentName:"ol"},"If you make the existing code better, please let us know in your PR description."),(0,o.kt)("li",{parentName:"ol"},'A PR description and title are required. The title is required to begin with: "feat:" or "fix:"'),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls"},"Link to an issue")," in the project. Unsolicited code is welcomed, but an issue is required for announce your intentions. PR's without a linked issue will be marked invalid and closed.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"note for maintainers: All pull requests need a label to assist automation. See the ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/open-sauced/open-sauced/blob/HEAD/.github/release-drafter.yml"},"template")," to guide which labels to use.")),(0,o.kt)("h3",{id:"pr-validation"},"PR Validation"),(0,o.kt)("p",null,"Examples for valid PR titles:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fix: Correct typo."),(0,o.kt)("li",{parentName:"ul"},"feat: Add support for Node 12."),(0,o.kt)("li",{parentName:"ul"},"refactor!: Drop support for Node 6.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note that since PR titles only have a single line, you have to use the ! syntax for breaking changes.")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits")," for more examples."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"https://youtu.be/cuMeC-eZJJ4"},"3 tips for getting your Pull Request reviewed"))),(0,o.kt)("p",null,"You can also experiment with conventional commits by doing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm run push\n")),(0,o.kt)("h3",{id:"work-in-progress"},"Work in progress"),(0,o.kt)("p",null,"GitHub has support for draft pull requests, which will disable the merge button until the PR is marked as ready for merge."),(0,o.kt)("h2",{id:"issues"},"Issues"),(0,o.kt)("p",null,"If you plan to contribute a change based on an open issue, please assign yourself by commenting on the following word ",(0,o.kt)("inlineCode",{parentName:"p"},".take"),". Issues that are not assigned are assumed open, and to avoid conflicts, please assign yourself before beginning work on any issues."),(0,o.kt)("p",null,"If you would like to contribute to the project for the first time, please consider joining checking the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22"},"bug")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"good first issue")," labels."),(0,o.kt)("p",null,"Also, all questions are welcomed."),(0,o.kt)("h2",{id:"triage-team"},"Triage Team"),(0,o.kt)("p",null,"The Triage team is inspired by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/expressjs/express/blob/HEAD/Triager-Guide.md"},"expressjs/express"),". This team exists to create a path for making contributions to this project and open source. All Triage Team members are expected to follow this guide: ",(0,o.kt)("a",{parentName:"p",href:"/docs.opensauced.pizza/contributing/triage-guide"},"TRIAGE_GUIDE.md")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"There are no minimum requirements to become a member of the Triage Team."))),(0,o.kt)("p",null,"For those interested in getting involved in the project or just open source in general, please request an invite to the Triage Team in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/discussions/638"},"this discussion.")),(0,o.kt)("h2",{id:"funding"},"Funding"),(0,o.kt)("p",null,"Open Sauced is a part of GitHub Sponsors. If you would like to contribute, please note the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sponsors/open-sauced"},"sponsor page")," for details on how funds are distributed. If you have made any contributions to the projectd directly or indirectly, please consider adding your profile to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/blob/main/.github/funding.yml"},"funding.yml"),"."),(0,o.kt)("h2",{id:"community"},"Community"),(0,o.kt)("p",null,"Do you have questions? Join the conversation in our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/U2peSNf23P"},"Discord"),"."),(0,o.kt)("h2",{id:"coding-tips"},"Coding Tips"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ask questions if you are stuck."),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/open-sauced/open-sauced/blob/HEAD/src/styles/variables.js"},"CSS variables")),(0,o.kt)("li",{parentName:"ul"},"Always use ",(0,o.kt)("a",{parentName:"li",href:"https://web.dev/external-anchors-use-rel-noopener/"},'rel="noreferrer" on all target="_blank" links'),".")),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"By contributing to the Open Sauced project, you agree that your contributions will be licensed\nunder its ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/open-sauced/open-sauced/main/LICENSE"},"MIT license"),"."),(0,o.kt)("p",null,"wow ok"))}d.isMDXComponent=!0}}]);