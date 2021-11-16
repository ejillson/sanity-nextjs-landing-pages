export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61940b9987b68d0b74f15626',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-ahh8iptn',
                  apiId: 'dcf9d413-8a9c-4b4d-8361-7ff67af99439'
                },
                {
                  buildHookId: '61940b99f02645009a514bc3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-efsvoqhs',
                  apiId: '3f3cab58-d2f4-4814-ad6e-46fbe22602ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ejillson/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-efsvoqhs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
