var timer = {
  'css': `timer,[is="timer"]{ display: block; max-width: 300px; margin: 0 auto; border: 1px solid rgba(64, 139, 194, .5); border-radius: 6px; color: rgba(64, 139, 194, 1); height: 100px; line-height: 100px; text-align: center; background: white; } timer p,[is="timer"] p{ margin: 0; }`,

  'exports': {
    onBeforeMount(props) {
        // create the component initial state
        this.state = {
            time: props.start || 0
        };
    },

    onUnmounted() {},

    onClick() {
        this.doApiRequest('test');
    },

    doApiRequest(rqst) {
        return debounce((rqst) => {
            fetch(`http://127.0.0.1:5000/?${rqst}`)
                .then((res) => res.json())
                .then((data) => {
                    this.update({
                        time: data.time
                    });
                });
        }, 500)(rqst)
    }
  },

  'template': function(template, expressionTypes, bindingTypes, getComponent) {
    return template('<p expr0="expr0"> </p>', [{
      'redundantAttribute': 'expr0',
      'selector': '[expr0]',

      'expressions': [{
        'type': expressionTypes.TEXT,
        'childNodeIndex': 0,

        'evaluate': function(scope) {
          return ['Seconds Elapsed: ', scope.state.time].join('');
        }
      }, {
        'type': expressionTypes.EVENT,
        'name': 'onclick',

        'evaluate': function(scope) {
          return scope.onClick;
        }
      }]
    }]);
  },

  'name': 'timer'
};

export default timer;
