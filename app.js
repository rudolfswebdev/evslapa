var apos = require('apostrophe')({
  shortName: 'evlapa',
  title: 'evlapa',

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user acounts.

  modules: {
    // Add custom apostrophe-modules and their respective configuration here!
     'link-widgets': {},
    'apostrophe-pages': {
       filters: {
      // Grab our ancestor pages, with two levels of subpages
      ancestors: {
        children: {
          depth: 2
        }
      },
      // We usually want children of the current page, too
      children: true
    },

      types: [
        {
          name: 'default',
          label: 'Default'
        },
        {
          name: 'home',
          label: 'Home'
        },
        {
          name: 'kontakti',
          label: 'kontakti'
        },
        {
          name: 'apraksts',
          label: 'apraksts'
        },
        {
          name: 'dokumenti',
          label: 'dokumenti'
        },
         {
          name: 'video',
          label: 'video'
        }
      ]
    }
  }

});
