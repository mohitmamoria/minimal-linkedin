document.addEventListener("alpine:init",(function(){Alpine.data("minimalism",(function(){return{settings:{},config:{groups:[{name:"Overall",collapsible:!1,options:[{key:"nav:simplify",icon:"config/nav.svg",name:"Simplify Navigation",default:!0},{key:"left_pane:hide",icon:"config/left-pane.svg",name:"Hide Left Pane",default:!0},{key:"right_pane:hide",icon:"config/right-pane.svg",name:"Hide Right Pane",default:!0},{key:"feed:simplify",icon:"config/feed.svg",name:"Simplify Feed",default:!0},{key:"floating_messaging:hide",icon:"config/messages.svg",name:"Hide Floating Messaging",default:!0}]},{name:"Navigation",collapsible:!0,is_collapsed:!0,options:[{key:"nav:labels:hide",icon:"config/label.svg",name:"Hide Labels",default:!1},{key:"nav:home:hide",icon:"nav-home.svg",name:'Hide "Home"',default:!1},{key:"nav:my_network:hide",icon:"nav-network.svg",name:'Hide "My Network"',default:!1},{key:"nav:jobs:hide",icon:"nav-jobs.svg",name:'Hide "Jobs"',default:!1},{key:"nav:messaging:hide",icon:"nav-messages.svg",name:'Hide "Messaging"',default:!1},{key:"nav:notifications:hide",icon:"nav-notifications.svg",name:'Hide "Notifications"',default:!1}]},{name:"Left Pane",collapsible:!0,is_collapsed:!0,options:[{key:"left_pane:profile:hide",icon:"config/person.svg",name:"Hide Profile Card",default:!0},{key:"left_pane:pages:hide",icon:"config/company.svg",name:"Hide Pages",default:!0},{key:"left_pane:extras:hide",icon:"config/community.svg",name:"Hide Extras",description:"Hide Recents, Groups, Events, and other stuff.",default:!0}]},{name:"Right Pane",collapsible:!0,is_collapsed:!0,options:[{key:"right_pane:news:hide",icon:"config/news.svg",name:"Hide News",default:!0},{key:"right_pane:ads:hide",icon:"config/ads.svg",name:"Hide Ads",default:!0},{key:"footer:hide",icon:"config/footer.svg",name:"Hide Footer",default:!0}]},{name:"Feed",collapsible:!0,is_collapsed:!0,options:[{key:"feed:ads:hide",icon:"config/ads.svg",name:"Hide Promoted Posts",default:!0},{key:"feed:post_context:hide",icon:"config/description.svg",name:"Hide Post Context",description:"Hide 'Your friend likes this' above posts.",default:!0},{key:"feed:post_author:simplify",icon:"config/person.svg",name:"Simplify Post's Author",description:"Hides the author's bio and post's timestamp.",default:!0}]}]},init:function(){this.loadSettings(),this.$watch("settings",this.onSettingsChange.bind(this))},loadSettings:function(){var e=this;window.addEventListener("message",(function(i){var n=JSON.parse(i.data);n&&"settings:loaded"===n.name&&(e.settings=n.value,e.fillDefaultSettings(),e.onSettingsChange(e.settings))}),!1)},fillDefaultSettings:function(){var e=this;this.config.groups.forEach((function(i){i.options.forEach((function(i){void 0===e.settings[i.key]&&(e.settings[i.key]=i.default)}))}))},adjustDependableSettings:function(e){var i=this,n={"left_pane:hide":["left_pane:profile:hide","left_pane:pages:hide","left_pane:extras:hide"],"right_pane:hide":["right_pane:news:hide","right_pane:ads:hide","footer:hide"],"feed:simplify":["feed:ads:hide","feed:post_context:hide","feed:post_author:simplify"]};Object.keys(n).forEach((function(t){t===e?n[t].forEach((function(n){i.settings[n]=i.settings[e]})):-1!==n[t].indexOf(e)&&(i.settings[e]||(i.settings[t]=!1))}))},onSettingsChange:function(e,i){if(e){this.adjustDependableSettings(e,i);var n={name:"settings:updated",value:e};window.parent.postMessage(JSON.stringify(n),"*")}},isOn:function(e){return!!this.settings[e]},toggle:function(e){this.settings[e]=!this.settings[e],this.adjustDependableSettings(e)}}}))}));