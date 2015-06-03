/** @jsx React.DOM */
var data = [
    {
      login: "ianramosc" 
    ,  name: "Ian Ramos"
    ,	avatar_url: "https://avatars.githubusercontent.com/u/5714212?v=3"
    , html_url: "https://github.com/ianramosc"
  	}
];

var MainApp = React.createClass({
	render: function () {
		return (
			<div>
				<ProfileForm />
				<h1>Github Profile</h1>
				<ProfileList data={this.props.data} />
			</div>
		);
	}
});

var Profile = React.createClass({
  render: function() {
    return (
      <a href={this.props.url}>
				<img src={this.props.avatar} title={this.props.name} />
				<span>{this.props.login}</span>
			</a>
    );
  }
});

var ProfileList = React.createClass({
	render: function () {
		var profileNodes = this.props.data.map(function (profile) {
			return (
				<Profile name={profile.name} url={profile.html_url} avatar={profile.avatar_url} login={profile.login} />
			);
		});
		return (
			<div className="profileList">
        {profileNodes}
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

React.render(
	<MainApp data={data} />,
	document.getElementById('profile')
);