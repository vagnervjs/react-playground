var Photo = React.createClass({
	toggleLiked: function() {
		this.setState({
		  liked: !this.state.liked
		});
	},

	getInitialState: function() {
		return {
		  liked: false
		}
	},

	render: function() {
		var buttonClass = this.state.liked ? 'active' : '';

		return (
			<div className='photo'>
				<img src={this.props.src} title={this.props.caption} />

		        <div className='bar'>
		          <button onClick={this.toggleLiked} className={buttonClass}>♥</button>
		          <span>{this.props.caption}</span>
		        </div>
			</div>
		)
	}
});

var PhotoGallery = React.createClass({

	getDataFromServer: function() {
		return [
		{
			key: 'ny0',
			url: 'http://tinyurl.com/lkevsb9',
			caption: 'New York!'
		},
		{
			key: 'cw0',
			url: 'http://tinyurl.com/mxkwh56',
			caption: 'Cows'
		},
		{
			key: 'sc0',
			url: 'http://tinyurl.com/nc7jv28',
			caption: 'Scooters'
		},
		{
			key: 'ny1',
			url: 'http://tinyurl.com/lkevsb9',
			caption: 'New York!'
		},
		{
			key: 'cw1',
			url: 'http://tinyurl.com/mxkwh56',
			caption: 'Cows'
		},
		{
			key: 'sc1',
			url: 'http://tinyurl.com/nc7jv28',
			caption: 'Scooters'
		},
		{
			key: 'ny2',
			url: 'http://tinyurl.com/lkevsb9',
			caption: 'New York!'
		},
		{
			key: 'cw2',
			url: 'http://tinyurl.com/mxkwh56',
			caption: 'Cows'
		},
		{
			key: 'sc2',
			url: 'http://tinyurl.com/nc7jv28',
			caption: 'Scooters'
		},
		];
	},

	render: function() {
		var data = this.getDataFromServer();

		var photos = data.map(function(photo) {
		  return <Photo key={photo.key} src={photo.url} caption={photo.caption} />
		});

		return (
		  <div className='photo-gallery'>
		    {photos}
		  </div>
		)
	}
});

React.render(<PhotoGallery />, document.body);
