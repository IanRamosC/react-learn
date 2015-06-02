var data = [
    {avatar_url: "https://avatars.githubusercontent.com/u/342471?v=3", html_url: "https://api.github.com/users/erkobridee", login: "erkobridee", name: "Erko Bridee" }
];

var MainApp = React.createClass({
	getInitialState : function() {
    return {data: {comments:[]}};
	},
	render: function () {
		return (
			<div>
				<SearchForm />
				<h1>Github Profile</h1>
				<GithubProfile data={this.props.data} />
			</div>
		);
	}
});

var SearchForm = React.createClass({
	render: function () {
		return (
			<form>
				<input type="text" placeholder="Username"/>
				<button type="submit">Search</button>
			</form>
		);
	}
});

var GithubProfile = React.createClass({
	render: function () {
		var profileNodes = this.props.data.map(function (profile) {
  		return (
	  		<GithubProfile>
	  			<a href={profile.html_url}>
						<img src={profile.avatar_url} title={profile.name} />
						<span>{profile.login}</span>
					</a>
				</GithubProfile>
  		);
		});

		return (
			<div>
				{profileNodes}
			</div>
		);
	}
});

React.render(
	<MainApp data={data} />,
	document.getElementById('profile')
);