import { helper } from '@ember/component/helper';

/**
 * HACK
 * Add items to the groupings array below to create new
 * subgroups. `title` should match the page title that
 * you want the `heading` to go above.
 * It is case sensitive.
 * The ordering is determined by the pages.yml
 * file in the cardstack-documentation repo.
 */

export function pageGrouping(params/*, hash*/) {
  let page = params[0]['title']
  const groupings = [
    {title: "Getting Started", heading: "Card SDK"},
    {title: "Developer Cookbook", heading: "Developer Reference"},
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
