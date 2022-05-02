var app = new Vue (
  {
    el: '#root',
    data: {
      message: 'Hello World',
      prova: 'rosso',
      colore: 'blue',
      picture: 'https://scontent.fcia2-2.fna.fbcdn.net/v/t1.18169-9/21430154_1933213873599152_5514535694093541510_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=9267fe&_nc_ohc=C6awK1zXPCYAX8kKTa1&_nc_ht=scontent.fcia2-2.fna&oh=00_AT-SnsMc8tDru7kI6nsE3vDat-vF1Ubc-O6B3YTMr5Y2fQ&oe=629557C9'
    },
    methods: {
      saluta: function() {
        console.log('ciao');
        return 'ciao';
      }
    }
  }
)