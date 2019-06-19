import { helper } from '@ember/component/helper';

export function pageGrouping(params/*, hash*/) {
  let page = params[0]['title']
  const groupings = [
    {title: "Getting Started", heading: "Card SDK"},
    {title: "The Cardstack Hub", heading: "Developer Reference"},
    {title: "Design System", heading: "Principles"}
  ]
  for (let item of groupings) {
    if (page === item.title) {
      return item.heading
    }
  }
  return false;
}

export default helper(pageGrouping);
