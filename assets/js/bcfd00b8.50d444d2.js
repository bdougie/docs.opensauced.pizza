"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[795],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4598:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),l=["components"],o={},s="Resolve merge conflicts",c={unversionedId:"contributing/resolve-merge-conflicts",id:"contributing/resolve-merge-conflicts",isDocsHomePage:!1,title:"Resolve merge conflicts",description:"Pretty often when opening a pull request it is very likely to run into merge conflicts as the release process is generally updating npm-shriknwrap.json.",source:"@site/docs/contributing/resolve-merge-conflicts.md",sourceDirName:"contributing",slug:"/contributing/resolve-merge-conflicts",permalink:"/contributing/resolve-merge-conflicts",editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/docs/contributing/resolve-merge-conflicts.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Triage Guide",permalink:"/contributing/triage-guide"},next:{title:"Fetching Data from the GitHub GraphQL API",permalink:"/contributing/fetching-data-from-github"}},p=[{value:"Repository setup",id:"repository-setup",children:[],level:2},{value:"Update",id:"update",children:[],level:2},{value:"Merge with upstream",id:"merge-with-upstream",children:[],level:2},{value:"Review changes",id:"review-changes",children:[],level:2},{value:"Resolve conflicts",id:"resolve-conflicts",children:[],level:2},{value:"Commit changes",id:"commit-changes",children:[],level:2},{value:"Push updated pull request",id:"push-updated-pull-request",children:[],level:2},{value:"Review your pull request",id:"review-your-pull-request",children:[],level:2},{value:"Dependency updates",id:"dependency-updates",children:[],level:2}],u={toc:p};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resolve-merge-conflicts"},"Resolve merge conflicts"),(0,a.kt)("p",null,"Pretty often when opening a pull request it is very likely to run into merge conflicts as the release process is generally updating ",(0,a.kt)("inlineCode",{parentName:"p"},"npm-shriknwrap.json"),"."),(0,a.kt)("p",null,"To better illustrate the commands listed here at will use commits and screenshots from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/pull/1078"},"open-sauced#1078"),"."),(0,a.kt)("p",null,"In literally every case it is advised ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("strong",{parentName:"em"},"not"))," to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"Resolve conflicts")," button as follows:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"don&#39;t resolve conflicts like this",src:n(9394).Z})),(0,a.kt)("p",null,"The above will at best achieve a ready to merge pull request with visible inconsistencies."),(0,a.kt)("h2",{id:"repository-setup"},"Repository setup"),(0,a.kt)("p",null,"Fork and clone the project using the ",(0,a.kt)("inlineCode",{parentName:"p"},"gh")," command line interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"gh repo clone 0-vortex/open-sauced\n")),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote -v")," will output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"origin git@github.com:0-vortex/open-sauced.git (fetch)\norigin git@github.com:0-vortex/open-sauced.git (push)\nupstream git@github.com:open-sauced/open-sauced.git (fetch)\nupstream git@github.com:open-sauced/open-sauced.git (push)\n")),(0,a.kt)("p",null,"Fork and clone the project using the ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," command line interface:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone git@github.com:0-vortex/open-sauced.git\n")),(0,a.kt)("p",null,"Running ",(0,a.kt)("inlineCode",{parentName:"p"},"git remote -v")," will output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"origin git@github.com:0-vortex/open-sauced.git (fetch)\norigin git@github.com:0-vortex/open-sauced.git (push)\n")),(0,a.kt)("p",null,"As an additional step for this tutorial we need to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"upstream")," remote:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream git@github.com:open-sauced/open-sauced.git\n")),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("p",null,"First get the ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch changes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git fetch origin --recurse-submodules=no --progress --prune\ngit checkout main --\ngit fetch upstream --recurse-submodules=no --progress --prune\ngit merge upstream/main --no-stat -v\n")),(0,a.kt)("h2",{id:"merge-with-upstream"},"Merge with upstream"),(0,a.kt)("p",null,"Then merge with the forked up-to-date ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," branch:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git merge origin/main --no-ff -v\n")),(0,a.kt)("p",null,"You will see something similar to:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"proper merge but results in conflicts",src:n(4229).Z})),(0,a.kt)("h2",{id:"review-changes"},"Review changes"),(0,a.kt)("p",null,"To see what the changes are do a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git diff package.json\n")),(0,a.kt)("p",null,"It will look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"review merge conflicts",src:n(2282).Z})),(0,a.kt)("h2",{id:"resolve-conflicts"},"Resolve conflicts"),(0,a.kt)("p",null,"Since this pull request does not modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file it is safe to fast forward the changes from ",(0,a.kt)("inlineCode",{parentName:"p"},"origin/main"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# overwrite with origin/main changes \ngit show :3:package.json > package.json\n")),(0,a.kt)("p",null,"A more traditional way of doing the same thing is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# make a local copy of all changes and use --theirs\n# --theirs strategy overwrite with origin/main changes \ngit show :1:package.json > base.package.json\ngit show :2:package.json > branch.package.json\ngit show :3:package.json > head.package.json\ngit merge-file -p --theirs \\\n    branch.package.json base.package.json head.package.json > package.json\n")),(0,a.kt)("h2",{id:"commit-changes"},"Commit changes"),(0,a.kt)("p",null,"Not making any assumptions about editor preferences running this will open the configured editor with a default commit message:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git commit\n")),(0,a.kt)("p",null,"That should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"commit merge message",src:n(1771).Z})),(0,a.kt)("h2",{id:"push-updated-pull-request"},"Push updated pull request"),(0,a.kt)("p",null,"One more security check to make sure your branch has not diverged and push:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git status\ngit push\n")),(0,a.kt)("p",null,"It should look something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"push updated pr",src:n(7185).Z})),(0,a.kt)("h2",{id:"review-your-pull-request"},"Review your pull request"),(0,a.kt)("p",null,"The result of the above commands can be viewed at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/pull/1078/commits/283ff8cd788c550309ff0d1d5a9a5a97ec0731b2"},"283ff8cd788c550309ff0d1d5a9a5a97ec0731b2")),(0,a.kt)("p",null,"GitHub will conveniently display only you merge conflict changes:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"view merge commit",src:n(6815).Z})),(0,a.kt)("p",null,"And it's ready to merge:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"ready to merge",src:n(6226).Z})),(0,a.kt)("h2",{id:"dependency-updates"},"Dependency updates"),(0,a.kt)("p",null,"When dealing with dependency and lock file updates there are multiple use cases to consider, however as a baseline, the open sauced triage team will not prioritize parallel main features as seen in the roadmap."),(0,a.kt)("p",null,"However when that happens, it is advised to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"fast-forward ",(0,a.kt)("inlineCode",{parentName:"li"},"npm-shrinkwrap.json")," "),(0,a.kt)("li",{parentName:"ul"},"fast-forward deleted and modified ",(0,a.kt)("inlineCode",{parentName:"li"},"upstream/main")," changes to ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")," "),(0,a.kt)("li",{parentName:"ul"},"fast-forward your added lines to ",(0,a.kt)("inlineCode",{parentName:"li"},"package.json")),(0,a.kt)("li",{parentName:"ul"},"run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm ci")," to delete local modules and create dependency resolution from ",(0,a.kt)("inlineCode",{parentName:"li"},"upstream/main"))),(0,a.kt)("p",null,"Visual diffing is advised however not following the git commit history procedure will result in a rogue pull request that scope creeps into dependency updates. "),(0,a.kt)("p",null,"Generally speaking, just adding things to a lockfile will not be troublesome and since this is a licensed project, we should be careful when adding dependencies."))}d.isMDXComponent=!0},1771:function(e,t,n){t.Z=n.p+"assets/images/contributing-resolve-merge-conflicts-commit-message-2b517ccf8811b09d5091cb9c300c4993.png"},9394:function(e,t,n){t.Z=n.p+"assets/images/contributing-resolve-merge-conflicts-dont-do-9703e3dffc76ef8c046f2fd7b506676f.png"},4229:function(e,t,n){t.Z=n.p+"assets/images/contributing-resolve-merge-conflicts-merge-conflicts-41673d73e41a1d513254f5274231c03a.png"},7185:function(e,t,n){t.Z=n.p+"assets/images/contributing-resolve-merge-conflicts-merge-success-4ba32cb94dddea19d9691bccbef974b9.png"},6226:function(e,t,n){t.Z=n.p+"assets/images/contributing-resolve-merge-conflicts-ready-to-merge-c0f138669dee46efafb0d584c170020e.png"},2282:function(e,t,n){t.Z=n.p+"assets/images/contributing-resolve-merge-conflicts-review-conflicts-5df5a5e4934e39d9e07bcd96e53d7c3f.png"},6815:function(e,t,n){t.Z=n.p+"assets/images/contributing-resolve-merge-conflicts-view-merge-commit-1c4055497fd56038e1ba46a6ae1886ab.png"}}]);