(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{10:function(e,t,a){},18:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=(a(10),a(5)),i=a(6),m=a.n(i),s=a(8);function u(e,t){return p.apply(this,arguments)}function p(){return(p=Object(s.a)(m.a.mark((function e(t,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t).then(function(){var e=Object(s.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(200===t.status){e.next=3;break}return alert("Looks like there was a problem. Status Code: "+t.status),e.abrupt("return");case 3:return e.next=5,t.json().then((function(e){a(e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log("There was a problem")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=a(4);a(24);function d(e){var t=e.types;return l.a.createElement("div",null,t.map((function(e,t){var a=e.type,n=a.name[0].toUpperCase()+a.name.substring(1);return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("div",{className:n,style:{fontSize:"22px"}},n))})))}function f(e){var t=e.abilities,a=e.setSelectedAbility;return l.a.createElement("div",null,t.map((function(e,t){var n=e.ability,r=n.name[0].toUpperCase()+n.name.substring(1);return l.a.createElement(l.a.Fragment,{key:t},l.a.createElement(E.b,{to:"/Pokedex/ability/"+n.name,onClick:function(){a(n)}},l.a.createElement("div",{className:"ability"},r)))})))}function b(e){var t=e.setSelectedPokemon,a=e.setSelectedAbility,r=Object(n.useState)(null),c=Object(o.a)(r,2),i=c[0],m=c[1];return Object(n.useEffect)((function(){u(e.pokemon.url,m)}),[]),l.a.createElement(l.a.Fragment,null,i?l.a.createElement("div",{className:"card"},l.a.createElement(E.b,{to:"/Pokedex/details/"+i.id,onClick:function(){t(i)}},l.a.createElement("h1",null," ","#",i.id+" "+i.name[0].toUpperCase()+i.name.substring(1)),l.a.createElement("div",{className:"portraitImage"},l.a.createElement("img",{src:i.sprites.other["official-artwork"].front_default,alt:"An image of "+i.name,width:"100%",height:"100%"})," ")),l.a.createElement(d,{types:i.types}),l.a.createElement(f,{abilities:i.abilities,setSelectedAbility:a}),l.a.createElement("div",{style:{fontSize:"22px"}},"Height: ",i.height/10,"m",l.a.createElement("br",null),"Weight: ",i.weight/10,"kg")):l.a.createElement("div",null,"Loading..."))}function k(e){var t=e.pokemonList,a=e.setSelectedPokemon,n=e.setSelectedAbility,r=t.results;if(null!=r)return r.map((function(e,t){e.pokemon;return l.a.createElement(l.a.Fragment,{key:r[t].name},l.a.createElement(b,{pokemon:r[t],setSelectedPokemon:a,setSelectedAbility:n}))}))}var v=a(1);a(30);function h(e){var t=e.stats;return console.log(t),l.a.createElement("div",null,t.map((function(e,a){var n=e.stat,r=n.name[0].toUpperCase()+n.name.substring(1);return console.log(n),l.a.createElement(l.a.Fragment,{key:a},l.a.createElement("div",{style:{fontSize:"22px"}},r,": ",t[a].base_stat))})))}function g(e){var t=e.pokemon;return l.a.createElement("div",{className:"content"},l.a.createElement(E.b,{to:"/Pokedex"},l.a.createElement("div",null,"Back")),l.a.createElement("div",{className:"pokemonDetails"},l.a.createElement("h1",null," ","#",t.id+" "+t.name[0].toUpperCase()+t.name.substring(1)),l.a.createElement("div",{className:"portraitImage"},l.a.createElement("img",{src:t.sprites.other["official-artwork"].front_default,alt:"An image of "+t.name,width:"100%",height:"100%"})," "),l.a.createElement("br",null),l.a.createElement(d,{types:t.types}),l.a.createElement("br",null),l.a.createElement("div",{className:"details"},"Height: ",t.height/10,"m",l.a.createElement("br",null),"Weight: ",t.weight/10,"kg",l.a.createElement("br",null)),l.a.createElement("div",{className:"stats"},l.a.createElement(h,{stats:t.stats}))))}a(31);function y(e){var t=e.ability,a=Object(n.useState)(null),r=Object(o.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){u(t.url,i)}),[]),l.a.createElement("div",{className:"content"},l.a.createElement(E.b,{to:"/Pokedex"},l.a.createElement("div",null,"Back")),l.a.createElement("div",{className:"abilityDetails"},l.a.createElement("h1",null,t.name[0].toUpperCase()+t.name.substring(1)),c?l.a.createElement("div",null,c.flavor_text_entries[0].flavor_text,l.a.createElement("div",{className:"pokemonList"},l.a.createElement("h3",null,"Pokemon with ",t.name),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Number"),l.a.createElement("th",null,"Name")),c.pokemon.map((function(e,t){e.pokemon;return l.a.createElement(l.a.Fragment,{key:c.pokemon[t].name},l.a.createElement("tr",null,l.a.createElement("td",null,t+1),l.a.createElement("td",null,c.pokemon[t].pokemon.name[0].toUpperCase()+c.pokemon[t].pokemon.name.substring(1))))}))),l.a.createElement("br",null))):l.a.createElement("div",null,"Loading...")))}var x=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),i=Object(o.a)(c,2),m=i[0],s=i[1],p=Object(n.useState)(null),d=Object(o.a)(p,2),f=d[0],b=d[1];return Object(n.useEffect)((function(){u("https://pokeapi.co/api/v2/pokemon",r)}),[]),l.a.createElement("div",{className:"App"},l.a.createElement(E.a,null,l.a.createElement(v.c,null,l.a.createElement(v.a,{path:"/Pokedex/details"},l.a.createElement(g,{pokemon:m})),l.a.createElement(v.a,{path:"/Pokedex/ability"},l.a.createElement("div",null,l.a.createElement(y,{ability:f}))),l.a.createElement(v.a,{path:"/Pokedex"},a?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"grid-container"},l.a.createElement(l.a.Fragment,null,l.a.createElement(k,{pokemonList:a,setSelectedPokemon:s,setSelectedAbility:b})),l.a.createElement("br",null)),l.a.createElement("button",{className:"prevButton",disabled:null==a.previous,onClick:function(){return u(a.previous,r)}},"Prev"),l.a.createElement("button",{className:"nextButton",disabled:null==a.next,onClick:function(){return u(a.next,r)}},"Next")):l.a.createElement("div",null,"Loading...")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1e43a6d8.chunk.js.map