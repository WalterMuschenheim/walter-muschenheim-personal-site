---
layout: frontPage.njk
pagination:
  data: collections
  size: 1
  alias: collection
  filter:
    - all
permalink: "{% if collection === 'home' %}/index.html{% else %}/{{ collection | slug }}/{% endif %}"
---
