import { createRouter } from '@/front/routes/Index.js'

const router = createRouter();

let items = []

router.options.routes.forEach(route => {
    
    items.push({
        name: route.name, 
        path: route.path
    })
})

export const sitemap = function () {
    const routes = items
      .map(r => r.path)
      .filter(r => !r.includes(':')) // removes routes with params
      .map(r => `<url><loc>https://gowithgbi.com${r}</loc></url>`)
    console.log(`
      <?xml version='1.0' encoding='UTF-8'?>
      <urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
          ${routes.join('\n')}
      </urlset>
    `)
  }