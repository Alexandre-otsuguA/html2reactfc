const extractTitleTag = html =>
  html.match(/<title>[\w|\t|\r|\W]*?<\/title>/).at(0);
// const extractLinkTags = html => html.match(/<link[^>][\w|\t|\r|\W]*?\/>/g);
// const extractScriptTags = html =>
//   html.match(/<script[^>]*>[\w|\t|\r|\W]*?<\/script>/g);

// Bug Fix
// const extractTagAttr = (tag, attr) =>
//   tag
//     .split(' ')
//     .find(val => val.includes(attr))
//     .replace(/.*="|"$/g, '');

// const extractContentTag = tag =>
//   tag
//     .match(/>[\w|\t|\r|\W]*?</)
//     .at(0)
//     .slice(1, -1);

module.exports = {
  extractTitleTag,
  // extractLinkTags,
  // extractScriptTags,
  // extractTagAttr,
  // extractContentTag,
};
