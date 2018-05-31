if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'frontend_main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'frontend_main'.");
}
var frontend_main = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var appendText = Kotlin.kotlin.dom.appendText_46n0ku$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var equals = Kotlin.equals;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
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
  function login_form() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var dc = Kotlin.isType(tmp$ = document.getElementById('app'), HTMLElement) ? tmp$ : throwCCE();
    dc.remove();
    var doc = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
    doc.id = 'app';
    var registration = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLElement) ? tmp$_1 : throwCCE();
    registration.id = 'registration';
    var title = Kotlin.isType(tmp$_2 = document.createElement('h2'), HTMLElement) ? tmp$_2 : throwCCE();
    appendText(title, '\u0412\u0445\u043E\u0434');
    registration.appendChild(title);
    var label1 = Kotlin.isType(tmp$_3 = document.createElement('label'), HTMLLabelElement) ? tmp$_3 : throwCCE();
    label1.htmlFor = 'id';
    label1.textContent = 'Id: ';
    registration.appendChild(label1);
    var input_name = Kotlin.isType(tmp$_4 = document.createElement('input'), HTMLInputElement) ? tmp$_4 : throwCCE();
    input_name.id = 'id';
    input_name.type = 'text';
    registration.appendChild(input_name);
    registration.appendChild(document.createElement('br'));
    var label3 = Kotlin.isType(tmp$_5 = document.createElement('label'), HTMLLabelElement) ? tmp$_5 : throwCCE();
    label3.htmlFor = 'pass';
    label3.textContent = 'Password: ';
    registration.appendChild(label3);
    var input_pass = Kotlin.isType(tmp$_6 = document.createElement('input'), HTMLInputElement) ? tmp$_6 : throwCCE();
    input_pass.id = 'pass';
    input_pass.type = 'password';
    registration.appendChild(input_pass);
    registration.appendChild(document.createElement('br'));
    var button = Kotlin.isType(tmp$_7 = document.createElement('button'), HTMLButtonElement) ? tmp$_7 : throwCCE();
    button.id = 'ok';
    button.textContent = 'Login';
    button.addEventListener('click', loginprocess());
    registration.appendChild(button);
    doc.appendChild(registration);
    var nav = Kotlin.isType(tmp$_8 = document.getElementById('nav'), HTMLElement) ? tmp$_8 : throwCCE();
    nav.append(doc);
  }
  function loginprocess$lambda$lambda(closure$req, closure$succ, closure$id, closure$password) {
    return function (event) {
      var response = closure$req.responseText;
      if (!equals(response, 'error')) {
        closure$succ.v = true;
        user_id = closure$id;
        user_pass = closure$password;
        user_name = response;
        login_menu();
      }
       else {
        println('Error login ' + closure$id + ' ' + closure$password);
      }
    };
  }
  function loginprocess$lambda(it) {
    var tmp$, tmp$_0;
    var name = Kotlin.isType(tmp$ = document.getElementById('id'), HTMLInputElement) ? tmp$ : throwCCE();
    var pass = Kotlin.isType(tmp$_0 = document.getElementById('pass'), HTMLInputElement) ? tmp$_0 : throwCCE();
    var id = toInt(name.value);
    var password = pass.value.toString();
    var succ = {v: false};
    var url = 'http://localhost:7575/api/user/login?id=' + id + '&password=' + password;
    var req = new XMLHttpRequest();
    req.onloadend = loginprocess$lambda$lambda(req, succ, id, password);
    req.open('GET', url, true);
    req.send();
    return Unit;
  }
  function loginprocess() {
    return EventListener(loginprocess$lambda);
  }
  var location;
  var user_id;
  var user_pass;
  var user_name;
  function main(args) {
    if (user_id === -1)
      unlogin_menu();
    else
      login_menu();
  }
  function relocation$lambda(closure$loc) {
    return function (it) {
      if (!equals(closure$loc, location)) {
        if (equals(closure$loc, '/registration'))
          registration_form();
        else if (equals(closure$loc, '/'))
          drawMain();
        else if (equals(closure$loc, '/alluser') && user_id >= 0)
          allUsers();
        else if (equals(closure$loc, '/login'))
          login_form();
        else if (equals(closure$loc, '/sendmessage'))
          sendMessage();
        else if (equals(closure$loc, '/aboutMe'))
          myInfo();
        else if (equals(closure$loc, '/unlogin'))
          Unlogin();
        else if (equals(closure$loc, '/myMessage'))
          MyMessage();
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
  function myInfo$lambda(closure$req, closure$doc) {
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
        user.innerHTML = "<div id = 'userInfo'>id: " + toString(element['id']) + '<br />Name: ' + toString(element['firstname']) + ' ' + toString(element['lastname']) + '<br />Country: ' + toString(element['country']) + '<\/div>';
        closure$doc_0.appendChild(user);
      }
    };
  }
  function myInfo() {
    var tmp$, tmp$_0, tmp$_1;
    var dc = Kotlin.isType(tmp$ = document.getElementById('app'), HTMLElement) ? tmp$ : throwCCE();
    dc.remove();
    var doc = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
    doc.id = 'app';
    var url = 'http://localhost:7575/api/user/aboutId?id=' + user_id;
    var req = new XMLHttpRequest();
    req.onloadend = myInfo$lambda(req, doc);
    req.open('GET', url, true);
    req.send();
    var nav = Kotlin.isType(tmp$_1 = document.getElementById('nav'), HTMLElement) ? tmp$_1 : throwCCE();
    nav.append(doc);
  }
  function MyMessage$lambda$lambda$lambda(closure$id) {
    return function (it) {
      messageInDialog(closure$id);
      return Unit;
    };
  }
  function MyMessage$lambda(closure$req, closure$doc) {
    return function (event) {
      var text = closure$req.responseText;
      println(text);
      var objArray = JSON.parse(text);
      var tmp$;
      for (tmp$ = 0; tmp$ !== objArray.length; ++tmp$) {
        var element = objArray[tmp$];
        var closure$doc_0 = closure$doc;
        var tmp$_0, tmp$_1;
        var dialog = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
        var id = toString(element['id']);
        dialog.className = 'dialog';
        dialog.id = id;
        dialog.innerHTML = 'User 1: ' + toString(element['user1id']) + ' <br />User 2: ' + toString(element['user2id']);
        closure$doc_0.addEventListener('click', EventListener(MyMessage$lambda$lambda$lambda(id)));
        var del = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLElement) ? tmp$_1 : throwCCE();
        del.id = 'mes' + id;
        closure$doc_0.appendChild(dialog);
        closure$doc_0.appendChild(del);
      }
    };
  }
  function MyMessage() {
    var tmp$, tmp$_0, tmp$_1;
    var dc = Kotlin.isType(tmp$ = document.getElementById('app'), HTMLElement) ? tmp$ : throwCCE();
    dc.remove();
    var doc = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
    doc.id = 'app';
    var url = 'http://localhost:7575/api/user/myMessage?id=' + user_id + '&pass=' + user_pass;
    var req = new XMLHttpRequest();
    req.onloadend = MyMessage$lambda(req, doc);
    req.open('GET', url, true);
    req.send();
    var nav = Kotlin.isType(tmp$_1 = document.getElementById('nav'), HTMLElement) ? tmp$_1 : throwCCE();
    nav.append(doc);
  }
  function messageInDialog$lambda(closure$req, closure$messages) {
    return function (event) {
      var text = closure$req.responseText;
      println(text);
      var objArray = JSON.parse(text);
      var tmp$;
      for (tmp$ = 0; tmp$ !== objArray.length; ++tmp$) {
        var element = objArray[tmp$];
        var closure$messages_0 = closure$messages;
        var tmp$_0;
        var message = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
        message.className = 'message';
        message.innerHTML = 'User: ' + toString(element['id_user']) + ' <br />Message: ' + toString(element['message']);
        closure$messages_0.appendChild(message);
      }
    };
  }
  function messageInDialog(_id) {
    var tmp$, tmp$_0, tmp$_1;
    var dialog = Kotlin.isType(tmp$ = document.getElementById(_id), HTMLElement) ? tmp$ : throwCCE();
    var del = Kotlin.isType(tmp$_0 = document.getElementById('mes' + _id), HTMLElement) ? tmp$_0 : throwCCE();
    del.remove();
    var messages = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : throwCCE();
    messages.className = 'messages';
    messages.id = 'mes' + _id;
    var url = 'http://localhost:7575/api/user/messageInDialog?id=' + _id;
    var req = new XMLHttpRequest();
    req.onloadend = messageInDialog$lambda(req, messages);
    req.open('GET', url, true);
    req.send();
    dialog.append(messages);
  }
  function unlogin_menu() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if (user_id === -1) {
      var nav = Kotlin.isType(tmp$ = document.getElementById('nav'), HTMLElement) ? tmp$ : throwCCE();
      var del = Kotlin.isType(tmp$_0 = document.getElementById('menu'), HTMLElement) ? tmp$_0 : throwCCE();
      del.remove();
      var menu = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLElement) ? tmp$_1 : throwCCE();
      menu.id = 'menu';
      var home = Kotlin.isType(tmp$_2 = document.createElement('button'), HTMLElement) ? tmp$_2 : throwCCE();
      home.id = 'home';
      home.className = 'homeButton';
      home.innerHTML = "<img src = '/css/logo.png' width = '32px' height = 'auto'>";
      home.addEventListener('click', relocation('/'));
      menu.appendChild(home);
      var registration = Kotlin.isType(tmp$_3 = document.createElement('button'), HTMLElement) ? tmp$_3 : throwCCE();
      registration.className = 'noHover';
      registration.id = '1';
      registration.textContent = 'Registration';
      menu.appendChild(registration);
      var login = Kotlin.isType(tmp$_4 = document.createElement('button'), HTMLElement) ? tmp$_4 : throwCCE();
      login.className = 'noHover';
      login.id = 'login';
      login.textContent = 'Login';
      menu.appendChild(login);
      login.addEventListener('click', relocation('/login'));
      var allUser = Kotlin.isType(tmp$_5 = document.createElement('button'), HTMLElement) ? tmp$_5 : throwCCE();
      allUser.className = 'noHover';
      allUser.id = '3';
      allUser.textContent = 'All Users';
      allUser.addEventListener('click', relocation('/alluser'));
      menu.appendChild(allUser);
      nav.appendChild(menu);
      var foot = Kotlin.isType(tmp$_6 = document.getElementById('footer'), HTMLElement) ? tmp$_6 : throwCCE();
      foot.innerText = 'Powered by Rostislav Tsekhmistro. K504';
      registration.addEventListener('click', relocation('/registration'));
    }
  }
  function login_menu() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    if (user_id >= 0) {
      var nav = Kotlin.isType(tmp$ = document.getElementById('nav'), HTMLElement) ? tmp$ : throwCCE();
      var del = Kotlin.isType(tmp$_0 = document.getElementById('menu'), HTMLElement) ? tmp$_0 : throwCCE();
      del.remove();
      var menu = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLElement) ? tmp$_1 : throwCCE();
      menu.id = 'menu';
      var home = Kotlin.isType(tmp$_2 = document.createElement('button'), HTMLElement) ? tmp$_2 : throwCCE();
      home.id = 'home';
      home.className = 'homeButton';
      home.innerHTML = "<img src = '/css/logo.png' width = '32px' height = 'auto'>";
      home.addEventListener('click', relocation('/'));
      menu.appendChild(home);
      var user = Kotlin.isType(tmp$_3 = document.createElement('button'), HTMLElement) ? tmp$_3 : throwCCE();
      user.className = 'noHover';
      user.id = 'but1';
      user.textContent = user_name;
      user.addEventListener('click', relocation('/aboutMe'));
      menu.appendChild(user);
      var unlog = Kotlin.isType(tmp$_4 = document.createElement('button'), HTMLElement) ? tmp$_4 : throwCCE();
      unlog.className = 'noHover';
      unlog.id = 'unlogin';
      unlog.textContent = 'Unlogin';
      menu.appendChild(unlog);
      unlog.addEventListener('click', relocation('/unlogin'));
      var allUser = Kotlin.isType(tmp$_5 = document.createElement('button'), HTMLElement) ? tmp$_5 : throwCCE();
      allUser.className = 'noHover';
      allUser.id = 'but3';
      allUser.textContent = 'All Users';
      allUser.addEventListener('click', relocation('/alluser'));
      menu.appendChild(allUser);
      var sendMessage = Kotlin.isType(tmp$_6 = document.createElement('button'), HTMLElement) ? tmp$_6 : throwCCE();
      sendMessage.className = 'noHover';
      sendMessage.id = 'but4';
      sendMessage.textContent = 'SendMessage';
      sendMessage.addEventListener('click', relocation('/sendmessage'));
      menu.appendChild(sendMessage);
      var myMessage = Kotlin.isType(tmp$_7 = document.createElement('button'), HTMLElement) ? tmp$_7 : throwCCE();
      myMessage.className = 'noHover';
      myMessage.id = 'but5';
      myMessage.textContent = 'MyMessage';
      myMessage.addEventListener('click', relocation('/myMessage'));
      menu.appendChild(myMessage);
      nav.appendChild(menu);
      var foot = Kotlin.isType(tmp$_8 = document.getElementById('footer'), HTMLElement) ? tmp$_8 : throwCCE();
      foot.innerText = 'Powered by Rostislav Tsekhmistro. K504';
      relocation('/');
    }
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
    label1.htmlFor = 'name';
    label1.textContent = 'Name: ';
    registration.appendChild(label1);
    var input_name = Kotlin.isType(tmp$_4 = document.createElement('input'), HTMLInputElement) ? tmp$_4 : throwCCE();
    input_name.id = 'name';
    input_name.type = 'text';
    registration.appendChild(input_name);
    registration.appendChild(document.createElement('br'));
    var label2 = Kotlin.isType(tmp$_5 = document.createElement('label'), HTMLLabelElement) ? tmp$_5 : throwCCE();
    label2.htmlFor = 'surname';
    label2.textContent = 'Surname: ';
    registration.appendChild(label2);
    var input_surname = Kotlin.isType(tmp$_6 = document.createElement('input'), HTMLInputElement) ? tmp$_6 : throwCCE();
    input_surname.id = 'surname';
    input_surname.type = 'text';
    registration.appendChild(input_surname);
    registration.appendChild(document.createElement('br'));
    var label3 = Kotlin.isType(tmp$_7 = document.createElement('label'), HTMLLabelElement) ? tmp$_7 : throwCCE();
    label3.htmlFor = 'pass';
    label3.textContent = 'Password: ';
    registration.appendChild(label3);
    var input_pass = Kotlin.isType(tmp$_8 = document.createElement('input'), HTMLInputElement) ? tmp$_8 : throwCCE();
    input_pass.id = 'pass';
    input_pass.type = 'password';
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
  function sendMessage() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var dc = Kotlin.isType(tmp$ = document.getElementById('app'), HTMLElement) ? tmp$ : throwCCE();
    dc.remove();
    var doc = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
    doc.id = 'app';
    var registration = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLElement) ? tmp$_1 : throwCCE();
    registration.id = 'sendMessage';
    var title = Kotlin.isType(tmp$_2 = document.createElement('h2'), HTMLElement) ? tmp$_2 : throwCCE();
    appendText(title, '\u041E\u0442\u043F\u0440\u0430\u0432\u043A\u0430 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F');
    registration.appendChild(title);
    var label1 = Kotlin.isType(tmp$_3 = document.createElement('label'), HTMLLabelElement) ? tmp$_3 : throwCCE();
    label1.htmlFor = 'name';
    label1.textContent = 'Id: ';
    registration.appendChild(label1);
    var input_id = Kotlin.isType(tmp$_4 = document.createElement('input'), HTMLInputElement) ? tmp$_4 : throwCCE();
    input_id.id = 'name';
    input_id.type = 'text';
    registration.appendChild(input_id);
    registration.appendChild(document.createElement('br'));
    var label2 = Kotlin.isType(tmp$_5 = document.createElement('label'), HTMLLabelElement) ? tmp$_5 : throwCCE();
    label2.htmlFor = 'text';
    label2.textContent = 'Message: ';
    registration.appendChild(label2);
    var input_text = Kotlin.isType(tmp$_6 = document.createElement('input'), HTMLInputElement) ? tmp$_6 : throwCCE();
    input_text.id = 'text';
    input_text.type = 'text';
    registration.appendChild(input_text);
    registration.appendChild(document.createElement('br'));
    var button = Kotlin.isType(tmp$_7 = document.createElement('button'), HTMLButtonElement) ? tmp$_7 : throwCCE();
    button.id = 'ok';
    button.textContent = 'Send';
    button.addEventListener('click', processsend());
    registration.appendChild(button);
    doc.appendChild(registration);
    var nav = Kotlin.isType(tmp$_8 = document.getElementById('nav'), HTMLElement) ? tmp$_8 : throwCCE();
    nav.append(doc);
  }
  function processsend$lambda$lambda(closure$req) {
    return function (event) {
      var response = closure$req.responseText;
      if (equals(response, 'Error'))
        alert('\u041D\u0435\u043B\u044C\u0437\u044F \u043E\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 \u0441\u0430\u043C\u043E\u043C\u0443 \u0441\u0435\u0431\u0435');
      else if (equals(response, 'Ok'))
        alert('All Ok');
    };
  }
  function processsend$lambda(it) {
    var tmp$, tmp$_0;
    var id = (Kotlin.isType(tmp$ = document.getElementById('name'), HTMLInputElement) ? tmp$ : throwCCE()).value.toString();
    var text = (Kotlin.isType(tmp$_0 = document.getElementById('text'), HTMLInputElement) ? tmp$_0 : throwCCE()).value.toString();
    var url = 'http://localhost:7575/api/user/sendMessage?id=' + user_id + '&pass=' + user_pass + '&id_user=' + id + '&message=' + text;
    var req = new XMLHttpRequest();
    req.onloadend = processsend$lambda$lambda(req);
    req.open('POST', url, true);
    req.send();
    return Unit;
  }
  function processsend() {
    return EventListener(processsend$lambda);
  }
  function Unlogin() {
    user_id = -1;
    user_pass = ' ';
    user_name = ' ';
    unlogin_menu();
    drawMain();
    relocation('/');
  }
  _.allUsers = allUsers;
  _.login_form = login_form;
  _.loginprocess = loginprocess;
  Object.defineProperty(_, 'location', {
    get: function () {
      return location;
    },
    set: function (value) {
      location = value;
    }
  });
  Object.defineProperty(_, 'user_id', {
    get: function () {
      return user_id;
    },
    set: function (value) {
      user_id = value;
    }
  });
  Object.defineProperty(_, 'user_pass', {
    get: function () {
      return user_pass;
    },
    set: function (value) {
      user_pass = value;
    }
  });
  Object.defineProperty(_, 'user_name', {
    get: function () {
      return user_name;
    },
    set: function (value) {
      user_name = value;
    }
  });
  _.main_kand9s$ = main;
  _.relocation_61zpoe$ = relocation;
  _.drawMain = drawMain;
  _.myInfo = myInfo;
  _.MyMessage = MyMessage;
  _.messageInDialog_61zpoe$ = messageInDialog;
  _.unlogin_menu = unlogin_menu;
  _.login_menu = login_menu;
  _.registration_form = registration_form;
  _.processregistration = processregistration;
  _.sendMessage = sendMessage;
  _.processsend = processsend;
  _.Unlogin = Unlogin;
  location = '/';
  user_id = -1;
  user_pass = ' ';
  user_name = '';
  main([]);
  Kotlin.defineModule('frontend_main', _);
  return _;
}(typeof frontend_main === 'undefined' ? {} : frontend_main, kotlin);

//# sourceMappingURL=frontend_main.js.map
