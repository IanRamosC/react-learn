var data = [
    {
    	avatar_url: "https://avatars.githubusercontent.com/u/342471?v=3"
    , html_url: "https://api.github.com/users/erkobridee"
    , login: "erkobridee"
    , name: "Erko Bridee" }
];

var MainApp = React.createClass({
	render: function () {
		return (
			<div>
				<ProfileForm />
				<h1>Github Profile</h1>
				<ProfileList />
			</div>
		);
	}
});

var ProfileForm = React.createClass({
	render: function () {
		return (
			<form>
				<input type="text" placeholder="Username"/>
				<button type="submit">Search</button>
			</form>
		);
	}
});

var ProfileList = React.createClass({
	render: function () {
		return (
			<div className="ProfileList">
        <Profile name="Pete Hunt" html_url="test.html" avatar_url="teste.jpg" login="test_name" />
      </div>
		);
	}
});

var Profile = React.createClass({
  render: function() {
    return (
      <a href={this.props.html_url}>
				<img src={this.props.avatar_url} title={this.props.name} />
				<span>{this.props.login}</span>
			</a>
    );
  }
});

React.render(
	<MainApp />,
	document.getElementById('profile')
);