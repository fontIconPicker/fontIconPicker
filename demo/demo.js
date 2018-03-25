jQuery( document ).ready( function( $ ) {

	// Icomoon icon index
	// If you are wondering who was the mad person to index such a large thing
	// Well, basically that mad person created a PHP script to index it
	// It has been released open source at: https://github.com/swashata/IcoMoonIconIndexer
	var icomoonIcons = {
		'Web Applications' : [ 57436, 57437, 57438, 57439, 57524, 57525, 57526, 57527, 57528, 57531, 57532, 57533, 57534, 57535, 57536, 57537, 57541, 57545, 57691, 57692 ],
		'Business Icons' : [ 57347, 57348, 57375, 57376, 57377, 57379, 57403, 57406, 57432, 57433, 57434, 57435, 57450, 57453, 57456, 57458, 57460, 57461, 57463 ],
		'eCommerce' : [ 57392, 57397, 57398, 57399, 57402 ],
		'Currency Icons' : [],
		'Form Control Icons' : [ 57383, 57384, 57385, 57386, 57387, 57388, 57484, 57594, 57595, 57600, 57603, 57604, 57659, 57660, 57693 ],
		'User Action & Text Editor' : [ 57442, 57443, 57444, 57445, 57446, 57447, 57472, 57473, 57474, 57475, 57476, 57477, 57539, 57662, 57668, 57669, 57670, 57671, 57674, 57675, 57688, 57689 ],
		'Charts and Codes' : [ 57493 ],
		'Attentive' : [ 57543, 57588, 57590, 57591, 57592, 57593, 57596 ],
		'Multimedia Icons' : [ 57356, 57357, 57362, 57363, 57448, 57485, 57547, 57548, 57549, 57605, 57606, 57609, 57610, 57611, 57614, 57617, 57618, 57620, 57621, 57622, 57623, 57624, 57625, 57626 ],
		'Location and Contact' : [ 57344, 57345, 57346, 57404, 57405, 57408, 57410, 57411, 57413, 57414, 57540 ],
		'Date and Time' : [ 57415, 57416, 57417, 57421, 57422, 57423 ],
		'Devices' : [ 57359, 57361, 57364, 57425, 57426, 57430 ],
		'Tools' : [ 57349, 57350, 57352, 57355, 57365, 57478, 57479, 57480, 57481, 57482, 57483, 57486, 57487, 57488, 57663, 57664 ],
		'Social and Networking' : [ 57694, 57700, 57701, 57702, 57703, 57704, 57705, 57706, 57707, 57709, 57710, 57711, 57717, 57718, 57719, 57736, 57737, 57738, 57739, 57740, 57741, 57742, 57746, 57747, 57748, 57755, 57756, 57758, 57759, 57760, 57761, 57763, 57764, 57765, 57766, 57767, 57776 ],
		'Brands' : [ 57743, 57750, 57751, 57752, 57753, 57754, 57757, 57773, 57774, 57775, 57789, 57790, 57792, 57793 ],
		'Files & Documents' : [ 57378, 57380, 57381, 57382, 57390, 57391, 57778, 57779, 57780, 57781, 57782, 57783, 57784, 57785, 57786, 57787 ],
		'Like & Dislike Icons' : [ 57542, 57544, 57550, 57551, 57552, 57553, 57554, 57555, 57556, 57557 ],
		'Emoticons' : [ 57558, 57559, 57560, 57561, 57562, 57563, 57564, 57565, 57566, 57567, 57568, 57569, 57570, 57571, 57572, 57573, 57574, 57575, 57576, 57577, 57578, 57579, 57580, 57581, 57582, 57583 ],
		'Directional Icons' : [ 57584, 57585, 57586, 57587, 57631, 57632, 57633, 57634, 57635, 57636, 57637, 57638, 57639, 57640, 57641, 57642, 57643, 57644, 57645, 57646, 57647, 57648, 57649, 57650, 57651, 57652, 57653, 57654 ],
		'Other Icons' : [ 57351, 57353, 57354, 57358, 57360, 57366, 57367, 57368, 57369, 57370, 57371, 57372, 57373, 57374, 57389, 57393, 57394, 57395, 57396, 57400, 57401, 57407, 57409, 57412, 57418, 57419, 57420, 57424, 57427, 57428, 57429, 57431, 57440, 57441, 57449, 57451, 57452, 57454, 57455, 57457, 57459, 57462, 57464, 57465, 57466, 57467, 57468, 57469, 57470, 57471, 57489, 57490, 57491, 57492, 57494, 57495, 57496, 57497, 57498, 57499, 57500, 57501, 57502, 57503, 57504, 57505, 57506, 57507, 57508, 57509, 57510, 57511, 57512, 57513, 57514, 57515, 57516, 57517, 57518, 57519, 57520, 57521, 57522, 57523, 57529, 57530, 57538, 57546, 57589, 57597, 57598, 57599, 57601, 57602, 57607, 57608, 57612, 57613, 57615, 57616, 57619, 57627, 57628, 57629, 57630, 57655, 57656, 57657, 57658, 57661, 57665, 57666, 57667, 57672, 57673, 57676, 57677, 57678, 57679, 57680, 57681, 57682, 57683, 57684, 57685, 57686, 57687, 57690, 57695, 57696, 57697, 57698, 57699, 57708, 57712, 57713, 57714, 57715, 57716, 57720, 57721, 57722, 57723, 57724, 57725, 57726, 57727, 57728, 57729, 57730, 57731, 57732, 57733, 57734, 57735, 57744, 57745, 57749, 57762, 57768, 57769, 57770, 57771, 57772, 57777, 57788, 57791, 57794 ]
	};

	var icomoonIconsSearch = {
		'Web Applications' : [ 'Box add', 'Box remove', 'Download', 'Upload', 'List', 'List 2', 'Numbered list', 'Menu', 'Menu 2', 'Cloud download', 'Cloud upload', 'Download 2', 'Upload 2', 'Download 3', 'Upload 3', 'Globe', 'Attachment', 'Bookmark', 'Embed', 'Code' ],
		'Business Icons' : [ 'Office', 'Newspaper', 'Book', 'Books', 'Library', 'Profile', 'Support', 'Address book', 'Cabinet', 'Drawer', 'Drawer 2', 'Drawer 3', 'Bubble', 'Bubble 2', 'User', 'User 2', 'User 3', 'User 4', 'Busy' ],
		'eCommerce' : [ 'Tag', 'Cart', 'Cart 2', 'Cart 3', 'Calculate' ],
		'Currency Icons' : [],
		'Form Control Icons' : [ 'Copy', 'Copy 2', 'Copy 3', 'Paste', 'Paste 2', 'Paste 3', 'Settings', 'Cancel circle', 'Checkmark circle', 'Spell check', 'Enter', 'Exit', 'Radio checked', 'Radio unchecked', 'Console' ],
		'User Action & Text Editor' : [ 'Undo', 'Redo', 'Flip', 'Flip 2', 'Undo 2', 'Redo 2', 'Zoomin', 'Zoomout', 'Expand', 'Contract', 'Expand 2', 'Contract 2', 'Link', 'Scissors', 'Bold', 'Underline', 'Italic', 'Strikethrough', 'Table', 'Table 2', 'Indent increase', 'Indent decrease' ],
		'Charts and Codes' : [ 'Pie' ],
		'Attentive' : [ 'Eye blocked', 'Warning', 'Question', 'Info', 'Info 2', 'Blocked', 'Spam' ],
		'Multimedia Icons' : [ 'Image', 'Image 2', 'Play', 'Film', 'Forward', 'Equalizer', 'Brightness medium', 'Brightness contrast', 'Contrast', 'Play 2', 'Pause', 'Forward 2', 'Play 3', 'Pause 2', 'Forward 3', 'Previous', 'Next', 'Volume high', 'Volume medium', 'Volume low', 'Volume mute', 'Volume mute 2', 'Volume increase', 'Volume decrease' ],
		'Location and Contact' : [ 'Home', 'Home 2', 'Home 3', 'Phone', 'Phone hang up', 'Envelope', 'Location', 'Location 2', 'Map', 'Map 2', 'Flag' ],
		'Date and Time' : [ 'History', 'Clock', 'Clock 2', 'Stopwatch', 'Calendar', 'Calendar 2' ],
		'Devices' : [ 'Camera', 'Headphones', 'Camera 2', 'Keyboard', 'Screen', 'Tablet' ],
		'Tools' : [ 'Pencil', 'Pencil 2', 'Pen', 'Paint format', 'Dice', 'Key', 'Key 2', 'Lock', 'Lock 2', 'Unlocked', 'Wrench', 'Cog', 'Cogs', 'Cog 2', 'Filter', 'Filter 2' ],
		'Social and Networking' : [ 'Share', 'Googleplus', 'Googleplus 2', 'Googleplus 3', 'Googleplus 4', 'Google drive', 'Facebook', 'Facebook 2', 'Facebook 3', 'Twitter', 'Twitter 2', 'Twitter 3', 'Vimeo', 'Vimeo 2', 'Vimeo 3', 'Github', 'Github 2', 'Github 3', 'Github 4', 'Github 5', 'Wordpress', 'Wordpress 2', 'Tumblr', 'Tumblr 2', 'Yahoo', 'Soundcloud', 'Soundcloud 2', 'Reddit', 'Linkedin', 'Lastfm', 'Lastfm 2', 'Stumbleupon', 'Stumbleupon 2', 'Stackoverflow', 'Pinterest', 'Pinterest 2', 'Yelp' ],
		'Brands' : [ 'Joomla', 'Apple', 'Finder', 'Android', 'Windows', 'Windows 8', 'Skype', 'Paypal', 'Paypal 2', 'Paypal 3', 'Chrome', 'Firefox', 'Opera', 'Safari' ],
		'Files & Documents' : [ 'File', 'File 2', 'File 3', 'File 4', 'Folder', 'Folder open', 'File pdf', 'File openoffice', 'File word', 'File excel', 'File zip', 'File powerpoint', 'File xml', 'File css', 'Html 5', 'Html 52' ],
		'Like & Dislike Icons' : [ 'Eye', 'Eye 2', 'Star', 'Star 2', 'Star 3', 'Heart', 'Heart 2', 'Heart broken', 'Thumbs up', 'Thumbs up 2' ],
		'Emoticons' : [ 'Happy', 'Happy 2', 'Smiley', 'Smiley 2', 'Tongue', 'Tongue 2', 'Sad', 'Sad 2', 'Wink', 'Wink 2', 'Grin', 'Grin 2', 'Cool', 'Cool 2', 'Angry', 'Angry 2', 'Evil', 'Evil 2', 'Shocked', 'Shocked 2', 'Confused', 'Confused 2', 'Neutral', 'Neutral 2', 'Wondering', 'Wondering 2' ],
		'Directional Icons' : [ 'Point up', 'Point right', 'Point down', 'Point left', 'Arrow up left', 'Arrow up', 'Arrow up right', 'Arrow right', 'Arrow down right', 'Arrow down', 'Arrow down left', 'Arrow left', 'Arrow up left 2', 'Arrow up 2', 'Arrow up right 2', 'Arrow right 2', 'Arrow down right 2', 'Arrow down 2', 'Arrow down left 2', 'Arrow left 2', 'Arrow up left 3', 'Arrow up 3', 'Arrow up right 3', 'Arrow right 3', 'Arrow down right 3', 'Arrow down 3', 'Arrow down left 3', 'Arrow left 3' ],
		'Other Icons' : [ 'Quill', 'Blog', 'Droplet', 'Images', 'Music', 'Pacman', 'Spades', 'Clubs', 'Diamonds', 'Pawn', 'Bullhorn', 'Connection', 'Podcast', 'Feed', 'Stack', 'Tags', 'Barcode', 'Qrcode', 'Ticket', 'Coin', 'Credit', 'Notebook', 'Pushpin', 'Compass', 'Alarm', 'Alarm 2', 'Bell', 'Print', 'Laptop', 'Mobile', 'Mobile 2', 'Tv', 'Disk', 'Storage', 'Reply', 'Bubbles', 'Bubbles 2', 'Bubbles 3', 'Bubbles 4', 'Users', 'Users 2', 'Quotes left', 'Spinner', 'Spinner 2', 'Spinner 3', 'Spinner 4', 'Spinner 5', 'Spinner 6', 'Binoculars', 'Search', 'Hammer', 'Wand', 'Aid', 'Bug', 'Stats', 'Bars', 'Bars 2', 'Gift', 'Trophy', 'Glass', 'Mug', 'Food', 'Leaf', 'Rocket', 'Meter', 'Meter 2', 'Dashboard', 'Hammer 2', 'Fire', 'Lab', 'Magnet', 'Remove', 'Remove 2', 'Briefcase', 'Airplane', 'Truck', 'Road', 'Accessibility', 'Target', 'Shield', 'Lightning', 'Switch', 'Powercord', 'Signup', 'Tree', 'Cloud', 'Earth', 'Bookmarks', 'Notification', 'Close', 'Checkmark', 'Checkmark 2', 'Minus', 'Plus', 'Stop', 'Backward', 'Stop 2', 'Backward 2', 'First', 'Last', 'Eject', 'Loop', 'Loop 2', 'Loop 3', 'Shuffle', 'Tab', 'Checkbox checked', 'Checkbox unchecked', 'Checkbox partial', 'Crop', 'Font', 'Text height', 'Text width', 'Omega', 'Sigma', 'Insert template', 'Pilcrow', 'Lefttoright', 'Righttoleft', 'Paragraph left', 'Paragraph center', 'Paragraph right', 'Paragraph justify', 'Paragraph left 2', 'Paragraph center 2', 'Paragraph right 2', 'Paragraph justify 2', 'Newtab', 'Mail', 'Mail 2', 'Mail 3', 'Mail 4', 'Google', 'Instagram', 'Feed 2', 'Feed 3', 'Feed 4', 'Youtube', 'Youtube 2', 'Lanyrd', 'Flickr', 'Flickr 2', 'Flickr 3', 'Flickr 4', 'Picassa', 'Picassa 2', 'Dribbble', 'Dribbble 2', 'Dribbble 3', 'Forrst', 'Forrst 2', 'Deviantart', 'Deviantart 2', 'Steam', 'Steam 2', 'Blogger', 'Blogger 2', 'Tux', 'Delicious', 'Xing', 'Xing 2', 'Flattr', 'Foursquare', 'Foursquare 2', 'Libreoffice', 'Css 3', 'IE', 'IcoMoon' ]
	};

	var fontelloIcons = {
		'Web Application Icons' : [ 'icon-mail', 'icon-mail-alt', 'icon-th-large', 'icon-th', 'icon-th-list', 'icon-help-circled', 'icon-info-circled', 'icon-info', 'icon-home', 'icon-link', 'icon-unlink', 'icon-link-ext', 'icon-link-ext-alt', 'icon-attach', 'icon-tag', 'icon-tags', 'icon-bookmark', 'icon-bookmark-empty', 'icon-download', 'icon-upload', 'icon-download-cloud', 'icon-upload-cloud', 'icon-reply', 'icon-reply-all' ],
		'Form Control Icons' : [ 'icon-search', 'icon-ok', 'icon-ok-circled', 'icon-ok-circled2', 'icon-ok-squared', 'icon-cancel', 'icon-cancel-circled', 'icon-cancel-circled2', 'icon-plus', 'icon-plus-circled', 'icon-plus-squared', 'icon-plus-squared-small', 'icon-minus', 'icon-minus-circled', 'icon-minus-squared', 'icon-minus-squared-alt', 'icon-minus-squared-small', 'icon-quote-right', 'icon-code', 'icon-comment-empty', 'icon-chat-empty' ],
		'Media Icons' : [ 'icon-video', 'icon-videocam', 'icon-picture', 'icon-camera', 'icon-camera-alt', 'icon-export', 'icon-export-alt', 'icon-pencil', 'icon-pencil-squared', 'icon-edit', 'icon-print' ],
		'Popular Icons' : [ 'icon-heart', 'icon-heart-empty', 'icon-star', 'icon-star-empty', 'icon-star-half', 'icon-star-half-alt', 'icon-user', 'icon-users', 'icon-male', 'icon-female', 'icon-forward', 'icon-quote-left', 'icon-retweet', 'icon-keyboard', 'icon-gamepad', 'icon-comment', 'icon-chat' ],
		'Others' : [ 'icon-music', 'icon-help', 'icon-lock', 'icon-lock-open', 'icon-lock-open-alt', 'icon-pin', 'icon-eye', 'icon-eye-off', 'icon-flag', 'icon-flag-empty', 'icon-flag-checkered', 'icon-thumbs-up', 'icon-thumbs-down', 'icon-thumbs-up-alt', 'icon-thumbs-down-alt', 'icon-bell', 'icon-bell-alt' ]
	};

	var svgs = [ 'Baby-Mobile', 'Bag-Present', 'Application-Map', 'Batman',
		'Battery-Charging', 'Beach', 'Bell', 'Bonsai', 'Boss-2', 'Boss-3',
		'Boss-5', 'Burglar', 'Bus', 'Businesswoman-1', 'Camera-Front',
		'Candles', 'Canoe', 'Captain-Shield', 'Candy', 'Cement-Mixer',
		'Car-Jumper', 'Checklist', 'Cheese', 'Cashier-2', 'Chair-4', 'Chat-2' ];

	// Centered
	$( '#grey-theme' ).fontIconPicker( {
		source: icomoonIcons,
		searchSource: icomoonIconsSearch,
		useAttribute: true,
		theme: 'fip-grey',
		attributeName: 'data-icomoon',
		emptyIconValue: 'none',
		appendTo: 'body'
	} );
	$( '#dark-grey-theme' ).fontIconPicker( {
		source: icomoonIcons,
		searchSource: icomoonIconsSearch,
		useAttribute: true,
		theme: 'fip-darkgrey',
		attributeName: 'data-icomoon',
		emptyIconValue: 'none',
		appendTo: 'body'
	} );
	$( '#bootstrap-theme' ).fontIconPicker( {
		source: icomoonIcons,
		searchSource: icomoonIconsSearch,
		useAttribute: true,
		theme: 'fip-bootstrap',
		attributeName: 'data-icomoon',
		emptyIconValue: 'none',
		appendTo: 'body'
	} );
	$( '#inverted-theme' ).fontIconPicker( {
		source: icomoonIcons,
		searchSource: icomoonIconsSearch,
		useAttribute: true,
		theme: 'fip-inverted',
		attributeName: 'data-icomoon',
		emptyIconValue: 'none',
		appendTo: 'body'
	} );

	// Right edge
	$( '#right-edge' ).fontIconPicker( {
		theme: 'fip-bootstrap',
		appendTo: 'body'
	} );

	// Left edge
	$( '#left-edge' ).fontIconPicker( {
		source: fontelloIcons,
		theme: 'fip-bootstrap',
		appendTo: 'body'
	} );

	// Use Attr
	$( '#use-attr' ).fontIconPicker( {
		source: icomoonIcons,
		searchSource: icomoonIconsSearch,
		useAttribute: true,
		theme: 'fip-grey',
		attributeName: 'data-icomoon',
		emptyIconValue: 'none',
		appendTo: 'body'
	} );

	// No use attr
	$( '#no-use-attr' ).fontIconPicker( {
		source: fontelloIcons,
		theme: 'fip-bootstrap',
		appendTo: 'body'
	} );

	// Ajax Button
	const loadAjax = $( '#load-ajax' ).fontIconPicker( {
		theme: 'fip-bootstrap',
		appendTo: 'body'
	} );

	// Add the event on the button
	$( '#ajax-button button' ).on( 'click', function( e ) {

		// Append the fontawesome CDN
		if ( ! $( '#fontawesome-cdn' ).length ) {
			$( 'head' ).append( '<link id="fontawesome-cdn" rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" integrity="sha384-3AB7yXWz4OeoZcPbieVW64vVXEwADiYyAEhwilzWsLw+9FgqpyjjStpPnpBO8o8S" crossorigin="anonymous">' );
		}

		// Prevent default
		e.preventDefault();

		// Show processing message
		$( this ).prop( 'disabled', true )
			.html( '<i class="icon-cog demo-animate-spin"></i> Please wait…' );

		// Get the JSON file
		$.ajax( {
			url: 'https://gist.githubusercontent.com/swashata/c0db916b33700c91ab75f59d4aeba7d3/raw/366789b2d001a99f5f41f1ceab980d991de059c3/fontawesome-icons-with-categories.json',
			type: 'GET',
			dataType: 'json'
		} )
			.done( function( response ) {
				console.log( response );
				setTimeout( function() {

				// Reset icons
					loadAjax.setIcons( response );

					// Show success message and disable
					$( '#ajax-button button' )
						.removeClass( 'btn-primary' )
						.addClass( 'btn-success' )
						.text( 'Succ' )
						.prop( 'disabled', true );
				}, 1000 );
			} )
			.fail( function() {

			// Show error message and enable
				$( '#ajax-button button' )
					.removeClass( 'btn-primary' )
					.addClass( 'btn-danger' )
					.text( 'Err' )
					.prop( 'disabled', false );
			} );
		e.stopPropagation();
	} );

	// setIcons no category fontello
	const loadAjaxNoCatFontello = $( '#seticons-no-cat-fnt' ).fontIconPicker( {
		theme: 'fip-bootstrap',
		appendTo: 'body',
		useAttribute: false
	} );
	$( '#seticons-no-cat-fnt-button button' ).on( 'click', function( e ) {
		const button = $( this );

		// Prevent default
		e.preventDefault();

		// Show processing message
		button.prop( 'disabled', true )
			.html( '<i class="icon-cog demo-animate-spin"></i> Please wait…' );

		// Get the JSON file
		$.ajax( {
			url: 'fontello-7275ca86/config.json',
			type: 'GET',
			dataType: 'json'
		} )
			.done( function( response ) {

				var fontelloJSONIcons = [];

				// Push the fonts into the array
				$.each( response.glyphs, function( i, v ) {
					fontelloJSONIcons.push( response.css_prefix_text + v.css );
				} );

				// Set new fonts
				loadAjaxNoCatFontello.setIcons( fontelloJSONIcons );

				// Show success message and disable
				button.removeClass( 'btn-primary' ).addClass( 'btn-success' ).text( 'Succ' ).prop( 'disabled', true );

			} )
			.fail( function() {

				// Show error message and enable
				button.removeClass( 'btn-primary' ).addClass( 'btn-danger' ).text( 'Err' ).prop( 'disabled', false );
			} );
		e.stopPropagation();
	} );

	// setIcons no category icomoon
	const loadAjaxNoCatIcomoon = $( '#seticons-no-cat-icm' ).fontIconPicker( {
		theme: 'fip-bootstrap',
		appendTo: 'body',
		useAttribute: false
	} );
	$( '#seticons-no-cat-icm-button button' ).on( 'click', function( e ) {
		const button = $( this );

		// Prevent default
		e.preventDefault();

		// Show processing message
		button.prop( 'disabled', true )
			.html( '<i class="icon-cog demo-animate-spin"></i> Please wait…' );

		// Get the JSON file
		$.ajax( {
			url: 'icomoon/selection.json',
			type: 'GET',
			dataType: 'json'
		} )
			.done( function( response ) {

				// Get the class prefix
				var classPrefix = response.preferences.fontPref.prefix,
					icomoonJSONIcons = [],
					icoMoonJSONSearch = [];

				// For each icon
				$.each( response.icons, function( i, v ) {

					// Set the source
					icomoonJSONIcons.push( classPrefix + v.properties.name );

					// Create and set the search source
					if ( v.icon && v.icon.tags && v.icon.tags.length ) {
						icoMoonJSONSearch.push( v.properties.name + ' ' + v.icon.tags.join( ' ' ) );
					} else {
						icoMoonJSONSearch.push( v.properties.name );
					}
				} );

				// Set new fonts on fontIconPicker
				loadAjaxNoCatIcomoon.setIcons( icomoonJSONIcons, icoMoonJSONSearch );

				// Show success message and disable
				button.removeClass( 'btn-primary' ).addClass( 'btn-success' ).text( 'Succ' ).prop( 'disabled', true );

			} )
			.fail( function() {

				// Show error message and enable
				button.removeClass( 'btn-primary' ).addClass( 'btn-danger' ).text( 'Err' ).prop( 'disabled', false );
			} );
		e.stopPropagation();
	} );

	// Select without category
	$( '#s-wt-ct' ).fontIconPicker( {
		theme: 'fip-bootstrap',
		useAttribute: true,
		attributeName: 'data-icomoon',
		emptyIconValue: 'none',
		appendTo: 'body'
	} );

	// Select with category
	$( '#s-w-ct' ).fontIconPicker( {
		theme: 'fip-darkgrey',
		useAttribute: true,
		attributeName: 'data-icomoon',
		emptyIconValue: 'none',
		appendTo: 'body',
		allCategoryText: 'Have at it…',
		unCategorizedText: 'Evil Ones'
	} );

	// Input without category
	$( '#i-wt-c' ).fontIconPicker( {
		source: fontelloIcons.Others,
		theme: 'fip-grey',
		appendTo: 'body'
	} );

	// Input with category
	$( '#i-w-c' ).fontIconPicker( {
		source: fontelloIcons,
		theme: 'fip-grey',
		appendTo: 'body'
	} );

	// Auto Close
	$( '#autoclose' ).fontIconPicker( {
		source: fontelloIcons,
		autoClose: false,
		appendTo: 'body'
	} );

	// IconsPerPage
	$( '#iconsperpage' ).fontIconPicker( {
		source: icomoonIcons,
		searchSource: icomoonIconsSearch,
		iconsPerPage: 50,
		useAttribute: true,
		attributeName: 'data-icomoon',
		appendTo: 'body'
	} );

	// Icon Generator
	$( '#icon-generator' ).fontIconPicker( {
		source: svgs,
		theme: 'fip-bootstrap',
		iconGenerator: function( item, flipBoxTitle, index ) {
			return '<i style="display: flex; align-items: center; justify-content: center; height: 100%;"><svg style="height: 32px; width: auto;" class="svg-icon ' + item + '"><use xlink:href="#' + item + '"></use></svg></i>';
		},
		appendTo: 'body'
	} );

	// has search
	$( '#has-search' ).fontIconPicker( {
		source: fontelloIcons,
		hasSearch: false,
		appendTo: 'body'
	} );

	// search placeholder
	$( '#search-placeholder' ).fontIconPicker( {
		source: fontelloIcons,
		searchPlaceholder: 'awesome…',
		appendTo: 'body'
	} );

	// empty icon
	$( '#empty-icon' ).fontIconPicker( {
		source: fontelloIcons,
		emptyIcon: false,
		appendTo: 'body'
	} );

	// empty icon value
	$( '#empty-icon-value' ).fontIconPicker( {
		source: fontelloIcons,
		emptyIconValue: 'noop',
		appendTo: 'body'
	} )
		.on( 'change', function() {
			$( '#empty-icon-selected-value' ).html( $( this ).val() );
		} );

	// Set Icons
	const dynamicIconsElement = $( '#change-icons' ).fontIconPicker( {
		source: icomoonIcons,
		searchSource: icomoonIconsSearch,
		useAttribute: true,
		attributeName: 'data-icomoon',
		theme: 'fip-bootstrap',
		autoClose: false,
		appendTo: 'body'
	} );

	// Add the event listeners and change icons dynamically
	$( '.change-icons-all' ).on( 'click', function( e ) {

		// Prevent default action
		e.preventDefault();

		// Set the icon
		dynamicIconsElement.setIcons( icomoonIcons, icomoonIconsSearch );

		// Change the button appearance
		$( '.change-icons-buttons button' ).removeClass( 'btn-primary' ).addClass( 'btn-info' );
		$( this ).removeClass( 'btn-info' ).addClass( 'btn-primary' );
	} );
	$( '.change-icons-1' ).on( 'click', function( e ) {

		// Prevent default action
		e.preventDefault();

		// Set the icon
		dynamicIconsElement.setIcons( icomoonIcons['Other Icons'], icomoonIconsSearch['Other Icons'] );

		// Change the button appearance
		$( '.change-icons-buttons button' ).removeClass( 'btn-primary' ).addClass( 'btn-info' );
		$( this ).removeClass( 'btn-info' ).addClass( 'btn-primary' );
	} );

	// Set selected icon
	const setSelectedIcon = $( '#set-icon' ).fontIconPicker( {
		source: icomoonIcons,
		searchSource: icomoonIconsSearch,
		useAttribute: true,
		attributeName: 'data-icomoon',
		theme: 'fip-bootstrap',
		appendTo: 'body'
	} )
		.on( 'change', function() {
			var setIcon = $( this ).val(),
				icon;
			if ( '' === setIcon ) {
				icon = '<i class="icomoon-blocked"></i>';
			} else {
				icon = '<i data-icomoon="&#x' + parseInt( setIcon, 10 ).toString( 16 ) + ';"></i>';
			}
			$( '#current-set-icon' ).html( icon );
		} );

	$( '.set-icons-buttons' ).on( 'click', '.btn', function( e ) {
		var newIcon = $( this ).data( 'iconValue' );
		setSelectedIcon.setIcon( newIcon );
	} );

	const setPage = $( '#set-page' ).fontIconPicker( {
		source: icomoonIcons,
		searchSource: icomoonIconsSearch,
		useAttribute: true,
		attributeName: 'data-icomoon',
		theme: 'fip-bootstrap',
		appendTo: 'body',
		autoClose: false
	} );

	$( '.set-pages-buttons' ).on( 'click', '.btn', function( e ) {
		var newPage = $( this ).data( 'pageValue' );
		setPage.setPage( newPage );
	} );

	// Destroy
	const destroyIconElement = $( '#destroy-api' ).fontIconPicker( {
			theme: 'fip-bootstrap',
			appendTo: 'body'
		} ),
		destroyButton = $( '.destroy-button-destroy' ),
		restoreButton = $( '.destroy-button-restore' );

	// Attach the events
	destroyButton.on( 'click', function() {

		// Destroy the picker
		destroyIconElement.destroyPicker();

		// Change appearance
		destroyButton.hide();
		restoreButton.fadeIn( 'fast' );
	} );

	restoreButton.on( 'click', function() {

		// Restore the picker
		destroyIconElement.refreshPicker();

		// Change appearance
		restoreButton.hide();
		destroyButton.fadeIn( 'fast' );
	} );

	// refreshPicker
	const refreshAPIElement = $( '#refresh-api' ).fontIconPicker( {
		hasSearch: true,
		theme: 'fip-bootstrap',
		appendTo: 'body'
	} );
	$( '.refresh-api-buttons button' ).on( 'click', function() {

		// Toggle the hasSearch value
		if ( $( this ).data( 'searchCanceled' ) ) {
			refreshAPIElement.refreshPicker( {
				hasSearch: true,
				theme: 'fip-bootstrap'
			} );
			$( this ).data( 'searchCanceled', false );
		} else {
			refreshAPIElement.refreshPicker( {
				hasSearch: false,
				theme: 'fip-bootstrap'
			} );
			$( this ).data( 'searchCanceled', true );
		}
	} );

	// Reposition picker
	const repositionPicker = $( '#reposition-picker' ).fontIconPicker( {
		source: fontelloIcons,
		appendTo: 'body',
		autoClose: false
	} );
	$( '#reposition-button' ).on( 'click', ( e ) => {
		e.preventDefault();
		repositionPicker.repositionPicker();
	} );
} );
