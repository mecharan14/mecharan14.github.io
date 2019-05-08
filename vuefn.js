Vue.component("before-login", {
			created: function(){
				app2.nav = false;
        app3.seen = false
			},
		methods: {
			hello: function() {
        let loginform = document.getElementById('loginform')
				let form = new FormData(loginform);
        //form.append('username', 'Chris');
        //console.log(form.get('username'));
				for (var value of form.values()) {
              //console.log(value); 
        }
        localStorage.setItem("login", "yes");
        test.login = true;
        router.push('/');
        app3.seen = true;
        app2.nav = true;
			}
    },
			template: `<div class="row">
			<h3 style="text-align: center;">Login to Raktah</h3>
    <form class="col s12" id="loginform" @submit.prevent="">
      <div class="row">
        <div class="input-field col s12">
          <i class="material-icons prefix">alternate_email</i>
          <input id="icon_prefix" type="text" name="username" class="validate">
          <label for="icon_prefix">Email / Username</label>
        </div>
        <div class="input-field col s12">
          <i class="material-icons prefix">lock_open</i>
          <input id="icon_telephone" type="password" name="password" class="validate">
          <label for="icon_telephone">Password</label>
        </div>
      </div>
      <center>
      	<button class="btn-large waves-effect waves-light white-text red" type="submit" name="action" @click="hello">Login</button>
      </center>
    </form>
  </div>`
		})


Vue.component("floatin-bar", {
      created: function(){
        app3.seen = true;
        app2.nav = true
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });

    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      edge: 'left',
      draggable: true
    });
      },
      template: `<div class="after-login"><div class="fixed-action-btn toolbar">
  <a class="btn-floating btn-large red">
    <i class="large material-icons">chevron_left</i>
  </a>
  <ul>
    <li><router-link to="/" class="btn-floating"><i class="material-icons">home</i></router-link></li>
    <li><router-link to="/profile" class="btn-floating"><i class="material-icons">person</i></router-link></li>
    <li><router-link to="/share" class="btn-floating"><i class="material-icons">share</i></router-link></li>
    <li><router-link to="/settings" class="btn-floating"><i class="material-icons">settings</i></router-link></li>
  </ul>
</div>
    <div id="content">
    </div></div>`
    })