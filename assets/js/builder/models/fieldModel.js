define( [], function() {
	var model = Backbone.Model.extend( {
		defaults: {
			options: false,
			getFieldID: function() {
				if ( jQuery.isNumeric( this.id ) ) {
					return 'field-' + this.id;
				} else {
					return this.id;
				}
			}
		},

		initialize: function() {
			this.bind( 'change', this.changeSetting, this );
			nfRadio.channel( 'fields' ).trigger( 'init:fieldModel', this );
			nfRadio.channel( 'fields-' + this.get( 'parentType' ) ).trigger( 'init:fieldModel', this );
			nfRadio.channel( 'fields-' + this.get( 'type' ) ).trigger( 'init:fieldModel', this );
		},

		changeSetting: function() {
			if ( ! this.hasChanged( 'isUpdated' ) ) {
				nfRadio.channel( 'fields' ).trigger( 'update:setting', this );
			}
		}
	} );
	
	return model;
} );