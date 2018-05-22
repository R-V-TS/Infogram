if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'infogram_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'infogram_main'.");
}
var infogram_main = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  function allUsers$lambda(closure$req, closure$doc) {
    return function (event) {
      var text = closure$req.responseText;
      println(text);
      var objArray = JSON.parse(text);
      var tmp$;
      for (tmp$ = 0; tmp$ !== objArray.length; ++tmp$) {
        var element = objArray[tmp$];
        var closure$doc_0 = closure$doc;
        var tmp$_0;
        var user = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
        user.innerHTML = "<div id = 'userInfo'>id: " + toString(element['id']) + '<br />user: ' + toString(element['firstname']) + ' ' + toString(element['lastname']) + '<\/div>';
        closure$doc_0.appendChild(user);
      }
    };
  }
  function allUsers() {
    var tmp$, tmp$_0, tmp$_1;
    var dc = Kotlin.isType(tmp$ = document.getElementById('app'), HTMLElement) ? tmp$ : throwCCE();
    dc.remove();
    var doc = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
    doc.id = 'app';
    var url = 'http://localhost:7575/api/user/all';
    var req = new XMLHttpRequest();
    req.onloadend = allUsers$lambda(req, doc);
    req.open('GET', url, true);
    req.send();
    var nav = Kotlin.isType(tmp$_1 = document.getElementById('nav'), HTMLElement) ? tmp$_1 : throwCCE();
    nav.append(doc);
  }
  var location;
  function main(args) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var nav = Kotlin.isType(tmp$ = document.getElementById('nav'), HTMLElement) ? tmp$ : throwCCE();
    var menu = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
    menu.id = 'menu';
    var home = Kotlin.isType(tmp$_1 = document.createElement('button'), HTMLElement) ? tmp$_1 : throwCCE();
    home.className = 'homeButton';
    home.innerHTML = "<img src = '/css/logo.png' width = '32px' height = 'auto'>";
    home.addEventListener('click', relocation('/'));
    menu.appendChild(home);
    var registration = Kotlin.isType(tmp$_2 = document.createElement('button'), HTMLElement) ? tmp$_2 : throwCCE();
    registration.className = 'noHover';
    registration.id = '1';
    registration.textContent = 'Registration';
    menu.appendChild(registration);
    var allUser = Kotlin.isType(tmp$_3 = document.createElement('button'), HTMLElement) ? tmp$_3 : throwCCE();
    allUser.className = 'noHover';
    allUser.id = '2';
    allUser.textContent = 'All Users';
    allUser.addEventListener('click', relocation('/alluser'));
    menu.appendChild(allUser);
    nav.appendChild(menu);
    var foot = Kotlin.isType(tmp$_4 = document.getElementById('footer'), HTMLElement) ? tmp$_4 : throwCCE();
    foot.innerText = 'Powered by Rostislav Tsekhmistro. K504';
    registration.addEventListener('click', relocation('/registration'));
  }
  function relocation$lambda(closure$loc) {
    return function (it) {
      if (!equals(closure$loc, location)) {
        if (equals(closure$loc, '/registration'))
          registration_form();
        else if (equals(closure$loc, '/'))
          drawMain();
        else if (equals(closure$loc, '/alluser'))
          allUsers();
        location = closure$loc;
      }
      return Unit;
    };
  }
  function relocation(loc) {
    return EventListener(relocation$lambda(loc));
  }
  function drawMain() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var doc = Kotlin.isType(tmp$ = document.getElementById('app'), HTMLElement) ? tmp$ : throwCCE();
    doc.remove();
    var main = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
    main.id = 'app';
    var hello = Kotlin.isType(tmp$_1 = document.createElement('h2'), HTMLElement) ? tmp$_1 : throwCCE();
    hello.innerText = '\u041F\u0440\u043E\u044D\u043A\u0442 Infogram, \u0421\u043E\u0437\u0434\u0430\u043D \u0434\u043B\u044F \u043E\u0431\u0449\u0435\u043D\u0438\u044F. \u041E\u0441\u043D\u043E\u0432\u043D\u043E\u0439 \u0443\u043A\u043B\u043E\u043D \u043D\u0430 RestAPI';
    main.appendChild(hello);
    var nav = Kotlin.isType(tmp$_2 = document.getElementById('nav'), HTMLElement) ? tmp$_2 : throwCCE();
    nav.append(main);
  }
  function registration_form() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    var dc = Kotlin.isType(tmp$ = document.getElementById('app'), HTMLElement) ? tmp$ : throwCCE();
    dc.remove();
    var doc = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
    doc.id = 'app';
    var registration = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLElement) ? tmp$_1 : throwCCE();
    registration.id = 'registration';
    var title = Kotlin.isType(tmp$_2 = document.createElement('h2'), HTMLElement) ? tmp$_2 : throwCCE();
    appendText(title, '\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F');
    registration.appendChild(title);
    var label1 = Kotlin.isType(tmp$_3 = document.createElement('label'), HTMLLabelElement) ? tmp$_3 : throwCCE();
    label1.htmlFor = 'input_name';
    label1.textContent = 'Name: ';
    var input_name = Kotlin.isType(tmp$_4 = document.createElement('input'), HTMLInputElement) ? tmp$_4 : throwCCE();
    input_name.id = 'name';
    input_name.type = 'text';
    registration.appendChild(input_name);
    registration.appendChild(document.createElement('br'));
    var label2 = Kotlin.isType(tmp$_5 = document.createElement('label'), HTMLLabelElement) ? tmp$_5 : throwCCE();
    label2.htmlFor = 'input_surname';
    label2.textContent = 'Surname: ';
    var input_surname = Kotlin.isType(tmp$_6 = document.createElement('input'), HTMLInputElement) ? tmp$_6 : throwCCE();
    input_surname.id = 'surname';
    input_surname.type = 'text';
    registration.appendChild(input_surname);
    registration.appendChild(document.createElement('br'));
    var label3 = Kotlin.isType(tmp$_7 = document.createElement('label'), HTMLLabelElement) ? tmp$_7 : throwCCE();
    label3.htmlFor = 'input_pass';
    label3.textContent = 'Password: ';
    var input_pass = Kotlin.isType(tmp$_8 = document.createElement('input'), HTMLInputElement) ? tmp$_8 : throwCCE();
    input_pass.id = 'pass';
    input_name.type = 'password';
    registration.appendChild(input_pass);
    registration.appendChild(document.createElement('br'));
    var button = Kotlin.isType(tmp$_9 = document.createElement('button'), HTMLButtonElement) ? tmp$_9 : throwCCE();
    button.id = 'ok';
    button.textContent = 'Registration';
    button.addEventListener('click', processregistration());
    registration.appendChild(button);
    doc.appendChild(registration);
    var nav = Kotlin.isType(tmp$_10 = document.getElementById('nav'), HTMLElement) ? tmp$_10 : throwCCE();
    nav.append(doc);
  }
  function processregistration$lambda(it) {
    var tmp$, tmp$_0, tmp$_1;
    var name = Kotlin.isType(tmp$ = document.getElementById('name'), HTMLInputElement) ? tmp$ : throwCCE();
    var surname = Kotlin.isType(tmp$_0 = document.getElementById('surname'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var pass = Kotlin.isType(tmp$_1 = document.getElementById('pass'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var name_str = name.value.toString();
    var surname_str = surname.value.toString();
    var password = pass.value.toString();
    var url = 'http://localhost:7575/api/user/registration?firstname=' + name_str + '&lastname=' + surname_str + '&password=' + password + '&country=Ukraine';
    var req = new XMLHttpRequest();
    req.open('POST', url, true);
    req.send();
    return Unit;
  }
  function processregistration() {
    return EventListener(processregistration$lambda);
  }
  _.allUsers = allUsers;
  Object.defineProperty(_, 'location', {
    get: function () {
      return location;
    },
    set: function (value) {
      location = value;
    }
  });
  _.main_kand9s$ = main;
  _.relocation_61zpoe$ = relocation;
  _.drawMain = drawMain;
  _.registration_form = registration_form;
  _.processregistration = processregistration;
  location = '/';
  main([]);
  Kotlin.defineModule('infogram_main', _);
  return _;
}(typeof infogram_main === 'undefined' ? {} : infogram_main, kotlin);

//# sourceMappingURL=infogram_main.js.map
